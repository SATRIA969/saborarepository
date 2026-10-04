import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { downloadIcs } from '@/utils/ics';

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  time?: string;
  guests?: string;
}

interface BookingData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
}

const timeSlots = [
  '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
];

const fullyBookedSlots: Record<number, string[]> = {
  2: ['5:30 PM', '7:00 PM'],
  3: ['6:00 PM', '8:00 PM'],
  4: ['6:30 PM', '7:30 PM', '9:00 PM'],
  5: ['5:30 PM', '6:00 PM', '7:00 PM', '8:30 PM'],
  6: ['6:00 PM', '7:00 PM', '7:30 PM', '8:00 PM', '9:30 PM'],
  0: ['6:30 PM', '8:00 PM', '9:00 PM'],
};

const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11 or more'];

export default function Reservation() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLFormElement>();

  const [form, setForm] = useState<BookingData>({
    name: '', phone: '', email: '', date: '', time: '', guests: '2',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  useEffect(() => {
    if (!showCalendar) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-calendar]')) {
        setShowCalendar(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showCalendar]);

  const bookedSlots = useMemo(
    () => fullyBookedSlots[new Date(form.date + 'T00:00:00').getDay()] ?? [],
    [form.date]
  );

  const calendarDays = useMemo(() => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startWeekday = firstDay.getDay();
    const totalDays = lastDay.getDate();

    const days: (Date | null)[] = [];
    for (let i = 0; i < startWeekday; i++) days.push(null);
    for (let d = 1; d <= totalDays; d++) days.push(new Date(year, month, d));
    return days;
  }, [calendarMonth]);

  const today = useMemo(() => {
    const tt = new Date();
    tt.setHours(0, 0, 0, 0);
    return tt;
  }, []);

  function isDateDisabled(d: Date): boolean {
    if (d.getDay() === 1) return true;
    if (d < today) return true;
    return false;
  }

  function selectDate(d: Date) {
    if (isDateDisabled(d)) return;
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
      d.getDate()
    ).padStart(2, '0')}`;
    setForm((f) => ({ ...f, date: iso, time: '' }));
    setShowCalendar(false);
  }

  function isDateSelected(d: Date): boolean {
    if (!form.date) return false;
    const sel = new Date(form.date + 'T00:00:00');
    return d.toDateString() === sel.toDateString();
  }

  function formatDateDisplay(iso: string): string {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString(t.reservation.dateLocale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = t.reservation.errName;
    else if (form.name.trim().length < 2) e.name = t.reservation.errNameShort;

    if (!form.phone.trim()) e.phone = t.reservation.errPhone;
    else if (!/^[\d\s+\-()]{7,}$/.test(form.phone.trim()))
      e.phone = t.reservation.errPhoneInvalid;

    if (!form.email.trim()) e.email = t.reservation.errEmail;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = t.reservation.errEmailInvalid;

    if (!form.date) e.date = t.reservation.errDate;
    if (!form.time) e.time = t.reservation.errTime;
    if (!form.guests) e.guests = t.reservation.errGuests;
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitted(true);
    }
  }

  function handleAddToCalendar() {
    if (!form.date || !form.time) return;
    const match = form.time.match(/(\d+):(\d+) (AM|PM)/);
    if (!match) return;
    const [, h, m, period] = match;
    let hour = parseInt(h);
    if (period === 'PM' && hour !== 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;
    const start = new Date(form.date + 'T00:00:00');
    start.setHours(hour, parseInt(m), 0, 0);

    downloadIcs({
      title: 'Sabora Restaurant Reservation',
      description: `Reservation for ${form.guests} guest(s)\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}`,
      location: 'Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan 12190',
      startDate: start,
      durationMinutes: 120,
    });
  }

  const isLargeParty = form.guests === '11 or more';

  // ---- Confirmation screen ----
  if (submitted) {
    return (
      <section id="reservations" className="relative bg-ink py-24 md:py-32 px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/30 mb-8">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a96a" strokeWidth="1.5">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-light mb-4">
            {t.reservation.confirmedEyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-light mb-6">
            {t.reservation.confirmedTitle}
          </h2>
          <p className="text-cream/60 text-lg font-light mb-10">
            {form.name.split(' ')[0]}. {t.reservation.confirmedBody}
          </p>

          <div className="bg-charcoal border border-gold/15 p-8 text-left mb-10">
            <h3 className="font-serif text-2xl text-gold-light font-light mb-6">
              {t.reservation.bookingSummary}
            </h3>
            <dl className="space-y-3">
              {[
                { label: t.reservation.sumName, value: form.name },
                { label: t.reservation.sumDate, value: formatDateDisplay(form.date) },
                { label: t.reservation.sumTime, value: form.time },
                { label: t.reservation.sumGuests, value: form.guests },
                { label: t.reservation.sumPhone, value: form.phone },
                { label: t.reservation.sumEmail, value: form.email },
              ].map((row, idx, arr) => (
                <div
                  key={row.label}
                  className={`flex justify-between ${
                    idx < arr.length - 1 ? 'border-b border-gold/8 pb-3' : ''
                  }`}
                >
                  <dt className="text-cream/40 text-sm">{row.label}</dt>
                  <dd className="text-cream text-sm font-light">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center justify-center gap-2 border border-gold/60 text-gold px-8 py-3 text-sm tracking-widest uppercase font-light hover:bg-gold hover:text-ink transition-all duration-400"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="1" />
                <path d="M3 10h18M8 2v4M16 2v4" strokeLinecap="round" />
              </svg>
              {t.reservation.addToCalendar}
            </button>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: '', phone: '', email: '', date: '', time: '', guests: '2' });
              }}
              className="inline-flex items-center justify-center text-cream/60 px-8 py-3 text-sm tracking-widest uppercase font-light hover:text-gold transition-colors"
            >
              {t.reservation.newReservation}
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ---- Form ----
  return (
    <section id="reservations" className="relative bg-charcoal py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12">
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-light mb-4">
            {t.reservation.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-light leading-tight mb-6">
            {t.reservation.title}
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed font-light">
            {t.reservation.body}
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="reveal bg-stone border border-gold/10 p-6 md:p-10 space-y-6"
          noValidate
        >
          {/* Name */}
          <div>
            <label htmlFor="res-name" className="block text-cream/60 text-sm font-light mb-2">
              {t.reservation.fullName}
            </label>
            <input
              id="res-name"
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className={`w-full bg-ink/50 border ${
                errors.name ? 'border-red-500/60' : 'border-gold/15'
              } px-4 py-3 text-cream font-light focus:border-gold/50 outline-none transition-colors`}
              placeholder={t.reservation.fullNamePlaceholder}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'err-name' : undefined}
            />
            {errors.name && (
              <p id="err-name" className="mt-2 text-red-400 text-xs font-light">
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="res-phone" className="block text-cream/60 text-sm font-light mb-2">
                {t.reservation.phone}
              </label>
              <input
                id="res-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className={`w-full bg-ink/50 border ${
                  errors.phone ? 'border-red-500/60' : 'border-gold/15'
                } px-4 py-3 text-cream font-light focus:border-gold/50 outline-none transition-colors`}
                placeholder={t.reservation.phonePlaceholder}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'err-phone' : undefined}
              />
              {errors.phone && (
                <p id="err-phone" className="mt-2 text-red-400 text-xs font-light">
                  {errors.phone}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="res-email" className="block text-cream/60 text-sm font-light mb-2">
                {t.reservation.email}
              </label>
              <input
                id="res-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className={`w-full bg-ink/50 border ${
                  errors.email ? 'border-red-500/60' : 'border-gold/15'
                } px-4 py-3 text-cream font-light focus:border-gold/50 outline-none transition-colors`}
                placeholder={t.reservation.emailPlaceholder}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'err-email' : undefined}
              />
              {errors.email && (
                <p id="err-email" className="mt-2 text-red-400 text-xs font-light">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Date (calendar picker) */}
          <div className="relative" data-calendar>
            <label htmlFor="res-date" className="block text-cream/60 text-sm font-light mb-2">
              {t.reservation.date}
            </label>
            <button
              id="res-date"
              type="button"
              onClick={() => setShowCalendar((v) => !v)}
              className={`w-full bg-ink/50 border ${
                errors.date ? 'border-red-500/60' : 'border-gold/15'
              } px-4 py-3 text-cream font-light focus:border-gold/50 outline-none transition-colors text-left flex items-center justify-between`}
              aria-haspopup="dialog"
              aria-expanded={showCalendar}
              aria-invalid={!!errors.date}
              aria-describedby={errors.date ? 'err-date' : undefined}
            >
              <span className={form.date ? 'text-cream' : 'text-cream/30'}>
                {form.date ? formatDateDisplay(form.date) : t.reservation.datePlaceholder}
              </span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/60 flex-shrink-0">
                <rect x="3" y="4" width="18" height="18" rx="1" />
                <path d="M3 10h18M8 2v4M16 2v4" strokeLinecap="round" />
              </svg>
            </button>
            {errors.date && (
              <p id="err-date" className="mt-2 text-red-400 text-xs font-light">
                {errors.date}
              </p>
            )}

            {/* Calendar popup */}
            {showCalendar && (
              <div
                className="absolute z-30 mt-2 bg-ink border border-gold/20 p-4 shadow-2xl modal-backdrop"
                role="dialog"
                aria-label={t.reservation.date}
              >
                {/* Month navigation */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    type="button"
                    onClick={() =>
                      setCalendarMonth(
                        new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1)
                      )
                    }
                    className="text-gold p-1 hover:text-gold-light transition-colors"
                    aria-label="Previous month"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <span className="text-cream font-light text-sm">
                    {t.reservation.months[calendarMonth.getMonth()]} {calendarMonth.getFullYear()}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setCalendarMonth(
                        new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1)
                      )
                    }
                    className="text-gold p-1 hover:text-gold-light transition-colors"
                    aria-label="Next month"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {t.reservation.days.map((day) => (
                    <div key={day} className="text-center text-cream/30 text-xs font-light w-9">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((d, i) => {
                    if (!d) return <div key={`empty-${i}`} className="w-9 h-9" />;
                    const disabled = isDateDisabled(d);
                    const selected = isDateSelected(d);
                    return (
                      <button
                        key={`day-${i}`}
                        type="button"
                        disabled={disabled}
                        onClick={() => selectDate(d)}
                        className={`w-9 h-9 text-sm font-light transition-all ${
                          selected
                            ? 'bg-gold text-ink'
                            : disabled
                            ? 'text-cream/20 cursor-not-allowed line-through'
                            : 'text-cream/70 hover:bg-gold/20 hover:text-gold'
                        }`}
                        aria-label={d.toDateString()}
                        aria-disabled={disabled}
                      >
                        {d.getDate()}
                      </button>
                    );
                  })}
                </div>

                <p className="mt-3 text-cream/30 text-xs font-light">
                  {t.reservation.closedMondays} · {t.reservation.pastDates}
                </p>
              </div>
            )}
          </div>

          {/* Time slots */}
          <div>
            <label className="block text-cream/60 text-sm font-light mb-3">
              {t.reservation.time}
              {!form.date && (
                <span className="ml-2 text-cream/30 text-xs italic">
                  {t.reservation.selectDateFirst}
                </span>
              )}
            </label>
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((slot) => {
                const booked = bookedSlots.includes(slot);
                const selected = form.time === slot;
                const disabled = booked || !form.date;
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={disabled}
                    onClick={() => setForm((f) => ({ ...f, time: slot }))}
                    className={`px-4 py-2 text-sm font-light border transition-all ${
                      selected
                        ? 'bg-gold text-ink border-gold'
                        : booked
                        ? 'border-cream/10 text-cream/20 cursor-not-allowed'
                        : 'border-gold/20 text-cream/70 hover:border-gold/50 hover:text-gold'
                    }`}
                    aria-label={booked ? `${slot} — ${t.reservation.booked}` : slot}
                    aria-pressed={selected}
                  >
                    {slot}
                    {booked && (
                      <span className="block text-[10px] tracking-wider">
                        {t.reservation.booked}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            {errors.time && (
              <p className="mt-2 text-red-400 text-xs font-light">{errors.time}</p>
            )}
          </div>

          {/* Guests */}
          <div>
            <label htmlFor="res-guests" className="block text-cream/60 text-sm font-light mb-2">
              {t.reservation.guests}
            </label>
            <select
              id="res-guests"
              value={form.guests}
              onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
              className={`w-full bg-ink/50 border ${
                errors.guests ? 'border-red-500/60' : 'border-gold/15'
              } px-4 py-3 text-cream font-light focus:border-gold/50 outline-none transition-colors`}
            >
              {guestOptions.map((g) => (
                <option key={g} value={g}>
                  {g} {g === '1' ? t.reservation.guest : t.reservation.guestsPlaceholder}
                </option>
              ))}
            </select>
            {errors.guests && (
              <p className="mt-2 text-red-400 text-xs font-light">{errors.guests}</p>
            )}
            {isLargeParty && (
              <div className="mt-3 p-4 bg-gold/8 border-l-2 border-gold/40">
                <p className="text-gold-light text-sm font-light leading-relaxed">
                  {t.reservation.largePartyNote}
                  <a
                    href="#private-dining"
                    className="text-gold underline underline-offset-2 hover:text-gold-light"
                  >
                    {t.reservation.largePartyLink}
                  </a>
                  {t.reservation.largePartySuffix}
                </p>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gold text-ink py-4 text-sm tracking-[0.2em] uppercase font-light hover:bg-gold-light transition-all duration-400"
          >
            {t.reservation.submit}
          </button>
        </form>

        {/* Reservation policy */}
        <div className="reveal mt-10 p-6 bg-stone/50 border-l-2 border-gold/20">
          <h3 className="font-serif text-xl text-gold-light font-light mb-3">
            {t.reservation.policyTitle}
          </h3>
          <p className="text-cream/40 text-sm font-light leading-relaxed">
            {t.reservation.policyBody}
          </p>
          <p className="mt-3 text-cream/30 text-xs font-light italic">
            {t.reservation.policyNote}
          </p>
        </div>

        <p className="mt-6 text-center text-gold/40 text-sm font-light">
          {t.reservation.closedMondays}
        </p>
      </div>
    </section>
  );
}
