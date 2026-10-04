export type Lang = 'en' | 'id';

export interface MenuTr {
  name: string;
  tagline: string;
  description: string;
  allergens: string;
  pairsWellWith: string;
}

export interface MenuItemTr {
  [id: string]: MenuTr;
}

export interface Translation {
  // Nav
  nav: {
    table: string;
    events: string;
    signature: string;
    menu: string;
    privateDining: string;
    reservations: string;
    chef: string;
    space: string;
    testimonials: string;
    faq: string;
    closeMenu: string;
    openMenu: string;
    reserveTable: string;
  };
  // Hero
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  // Story
  story: {
    eyebrow: string;
    title: string;
    body: string;
  };
  // Events
  events: {
    eyebrow: string;
    title: string;
    body: string;
    everyThursday: string;
    tastingTitle: string;
    tastingBody: string;
    tastingPrice: string;
    povEyebrow: string;
    povTitle: string;
    povBody: string;
  };
  // Menu
  menu: {
    eyebrow: string;
    title: string;
    viewDetails: string;
    footer: string;
    categories: Record<string, string>;
    dietaryLabels: Record<string, string>;
    allergens: string;
    pairsWellWith: string;
    closeDish: string;
    items: MenuItemTr;
  };
  // Chef
  chef: {
    eyebrow: string;
    name: string;
    role: string;
    bio1: string;
    bio2: string;
    quote: string;
  };
  // The Space
  space: {
    eyebrow: string;
    title: string;
    body: string;
    diningRoom: string;
    bar: string;
    privateRoom: string;
    closeLightbox: string;
    prev: string;
    next: string;
  };
  // Testimonials
  testimonials: {
    eyebrow: string;
    title: string;
    prev: string;
    next: string;
    items: { quote: string; author: string; role: string }[];
  };
  // Private Dining
  privateDining: {
    eyebrow: string;
    title: string;
    body: string;
    privateRoom: string;
    privateRoomValue: string;
    wholeRestaurant: string;
    wholeRestaurantValue: string;
    chefsTable: string;
    chefsTableValue: string;
    sampleNote: string;
  };
  // FAQ
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  // Reservation
  reservation: {
    eyebrow: string;
    title: string;
    body: string;
    fullName: string;
    fullNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    date: string;
    datePlaceholder: string;
    selectDateFirst: string;
    time: string;
    guests: string;
    guest: string;
    guestsPlaceholder: string;
    submit: string;
    closedMondays: string;
    pastDates: string;
    booked: string;
    // Validation
    errName: string;
    errNameShort: string;
    errPhone: string;
    errPhoneInvalid: string;
    errEmail: string;
    errEmailInvalid: string;
    errDate: string;
    errTime: string;
    errGuests: string;
    // Large party
    largePartyNote: string;
    largePartyLink: string;
    largePartySuffix: string;
    // Confirmation
    confirmedEyebrow: string;
    confirmedTitle: string;
    confirmedBody: string;
    bookingSummary: string;
    addToCalendar: string;
    newReservation: string;
    // Policy
    policyTitle: string;
    policyBody: string;
    policyNote: string;
    // Summary labels
    sumName: string;
    sumDate: string;
    sumTime: string;
    sumGuests: string;
    sumPhone: string;
    sumEmail: string;
    // Month/day names
    months: string[];
    days: string[];
    dateLocale: string;
  };
  // Footer
  footer: {
    tagline: string;
    visit: string;
    hours: string;
    contact: string;
    hoursDetail: string;
    lastSeating: string;
    closedMondays: string;
    copyright: string;
    disclaimer: string;
  };
}

const en: Translation = {
  nav: {
    table: 'The Table',
    events: 'Events',
    signature: 'Signature',
    menu: 'Menu',
    privateDining: 'Private Dining',
    reservations: 'Reservations',
    chef: 'The Chef',
    space: 'The Space',
    testimonials: 'Reviews',
    faq: 'FAQ',
    closeMenu: 'Close menu',
    openMenu: 'Open menu',
    reserveTable: 'Reserve a Table',
  },
  hero: {
    eyebrow: 'Fine dining · open flame · season-led',
    title: 'Savour the flavours that tell a story.',
    subtitle:
      'An intimate dining room where local harvests meet flame, instinct, and a little beautiful unpredictability.',
    cta: 'Reserve a Table',
  },
  story: {
    eyebrow: 'The Sabora table',
    title: 'Seasonal dishes crafted with passion and the freshest ingredients.',
    body:
      'Sabora began with a wood-fired grill and a simple promise: cook only what the season gives us. Our chef works with small farms and day-boat fishers across Java and Bali, then lets smoke, fermentation and bright acidity do the talking. The menu changes as often as the harvest does.',
  },
  events: {
    eyebrow: 'Gather at Sabora',
    title: 'Events and seasonal menus you won\u2019t want to miss.',
    body:
      'A changing calendar of collaborative dinners, intimate celebrations, and one-night-only menus.',
    everyThursday: 'Every Thursday',
    tastingTitle: 'Chef\u2019s seasonal tasting.',
    tastingBody: 'Seven courses shaped by what arrived at the kitchen that morning.',
    tastingPrice: 'Rp 1.450k per guest · wine pairing +Rp 850k',
    povEyebrow: 'Our point of view',
    povTitle: 'Signature dishes to match every meal.',
    povBody: 'Precise, generous cooking with a confident sense of place.',
  },
  menu: {
    eyebrow: 'From our kitchen',
    title: 'Dishes that keep guests coming back.',
    viewDetails: 'View details',
    footer:
      '7 items · V vegetarian · GF gluten-free · prices exclude 10% service & tax (sample)',
    categories: {
      Mains: 'Mains',
      Starters: 'Starters',
      Desserts: 'Desserts',
      Cocktails: 'Cocktails',
    },
    dietaryLabels: {
      V: 'Vegetarian',
      GF: 'Gluten-Free',
      VGF: 'Vegan & Gluten-Free',
    },
    allergens: 'Allergens',
    pairsWellWith: 'Pairs well with',
    closeDish: 'Close dish details',
    items: {
      'ember-ribeye': {
        name: 'Ember-Roasted Ribeye',
        tagline: 'smoked bone marrow · shallot jus',
        description:
          'A 45-day dry-aged ribeye seared over ironbark embers until the fat renders into a crisp, caramelised crust. Served with a quenelle of smoked bone marrow butter and a deep shallot jus reduced with Balinese palm sugar. Finished with charred shallot rings and a pinch of Maldon salt.',
        allergens:
          'Contains no gluten. May contain traces of dairy from the marrow butter.',
        pairsWellWith:
          '2019 Penfolds Bin 28 Kalimna Shiraz — bold dark fruit stands up to the smoke.',
      },
      'coastal-catch': {
        name: 'Coastal Catch',
        tagline: 'fennel · citrus beurre blanc',
        description:
          'Day-boat line-caught snapper from the Lombok Strait, pan-seared to a crisp skin and rested on a bed of shaved fennel and blood orange. Finished with a citrus beurre blanc infused with kaffir lime and a scattering of dill flowers. A bright, clean plate that tastes of the sea.',
        allergens: 'Contains fish, dairy (butter), and citrus. No gluten.',
        pairsWellWith:
          'Sancerre Blanc 2021 — flinty minerality and citrus zest echo the beurre blanc.',
      },
      'garden-fire': {
        name: 'Garden on Fire',
        tagline: 'heirloom vegetables · burnt leek',
        description:
          'Heirloom carrots, beets, and baby turnips slow-roasted over smouldering vine cuttings until their sugars caramelise. Plated on a smear of burnt leek ash puree with a drizzle of aged balsamic and toasted hazelnuts. A celebration of what the garden offered this morning.',
        allergens: 'Contains tree nuts (hazelnuts). Vegan and gluten-free.',
        pairsWellWith:
          'Garden Highball — the cucumber and basil cut through the smoky sweetness.',
      },
      'truffle-flatbread': {
        name: 'Truffle Flatbread',
        tagline: 'wild mushroom · aged pecorino',
        description:
          'A thin, blistered sourdough flatbread topped with foraged oyster mushrooms sautéed in truffle oil, shaved aged pecorino, and wild arugula. Finished with a generous shaving of black winter truffle and a thread of cold-pressed olive oil.',
        allergens:
          'Contains gluten and dairy. May contain traces of nuts from the truffle oil.',
        pairsWellWith: 'Pinot Noir 2020 — earthy mushroom notes harmonise with the truffle.',
      },
      'cacao-sea-salt': {
        name: 'Cacao & Sea Salt',
        tagline: 'dark chocolate · malted cream',
        description:
          'Single-origin Madagascan dark chocolate (72%) tempered into a glossy ganache, layered with malted cream and a delicate cocoa sablé. Finished with flaked sea salt from Bali and a quenelle of smoked milk sorbet. Rich, bittersweet, and deeply satisfying.',
        allergens: 'Contains dairy and gluten-free oats. No wheat gluten.',
        pairsWellWith:
          'Portuguese Tawny Port — caramel and dried fruit notes complement the dark cacao.',
      },
      'golden-hour': {
        name: 'Golden Hour',
        tagline: 'passion fruit · citrus · smoked honey',
        description:
          'A chilled dessert of passion fruit curd set on a buttery shortbread base, crowned with citrus sorbet and a drizzle of smoked honey. Garnished with candied lime zest and edible gold leaf. Tropical, bright, and just sweet enough.',
        allergens: 'Contains dairy and eggs. Gluten-free.',
        pairsWellWith:
          'Muscat de Beaumes-de-Venise — floral sweetness mirrors the passion fruit.',
      },
      'garden-highball': {
        name: 'Garden Highball',
        tagline: 'cucumber · basil · sparkling lime',
        description:
          'A garden-forward non-alcoholic highball: muddled cucumber and Thai basil shaken with fresh lime, topped with artisanal tonic and a sprig of basil. Crisp, herbaceous, and endlessly refreshing — a palate cleanser between courses or a standalone aperitif.',
        allergens: 'No major allergens. Non-alcoholic.',
        pairsWellWith:
          'Garden on Fire — the herbal freshness echoes the roasted vegetables.',
      },
    },
  },
  chef: {
    eyebrow: 'Meet the Chef',
    name: 'Arif Santoso',
    role: 'Executive Chef & Founder',
    bio1:
      'Arif\u2019s path began in his grandmother\u2019s kitchen in Yogyakarta, where he learned that the best cooking starts with listening — to the season, to the ingredient, to the fire. After a decade in kitchens across Sydney and Copenhagen, he returned home to build Sabora around a single wood-fired grill and a daily-changing menu.',
    bio2:
      'He works directly with small farms in Bandung and day-boat fishers off the coast of Bali, building relationships that shape every plate. His cooking is precise but never fussy — smoke, fermentation, and bright acidity do most of the talking.',
    quote: 'Cook only what the season gives you. The fire does the rest.',
  },
  space: {
    eyebrow: 'The Space',
    title: 'A room designed for slow evenings.',
    body:
      'Warm timber, low light, and the glow of an open flame. Every corner of Sabora was designed to make a meal feel like an occasion — whether you\u2019re at the chef\u2019s counter, the bar, or tucked into the private dining room.',
    diningRoom: 'Dining Room',
    bar: 'The Bar',
    privateRoom: 'Private Room',
    closeLightbox: 'Close image',
    prev: 'Previous image',
    next: 'Next image',
  },
  testimonials: {
    eyebrow: 'Guest Stories',
    title: 'What our guests are saying.',
    prev: 'Previous testimonial',
    next: 'Next testimonial',
    items: [
      {
        quote:
          'The chef\u2019s tasting was the best meal we\u2019ve had in Jakarta. Every course told a story, and the wine pairing was spot on. We\u2019ll be back every Thursday.',
        author: 'Priya Sharma',
        role: 'Food writer, Jakarta',
      },
      {
        quote:
          'We celebrated our anniversary in the private room and it was perfect. The team made us feel like the only guests in the restaurant. The ribeye was unforgettable.',
        author: 'Dimas Pratama',
        role: 'Anniversary dinner',
      },
      {
        quote:
          'Sabora changed how I think about vegetables. The Garden on Fire dish was smoky, sweet, and entirely unexpected. A truly seasonal kitchen.',
        author: 'Leila Hartono',
        role: 'Regular guest',
      },
      {
        quote:
          'From the bar to the last bite of dessert, every detail was considered. The Golden Hour cocktail alone is worth the visit. A hidden gem in Senopati.',
        author: 'Marcus Tan',
        role: 'Dining enthusiast',
      },
    ],
  },
  privateDining: {
    eyebrow: 'Private dining & events',
    title: 'Celebrate with us.',
    body:
      'Our private room seats up to 24 guests, and the whole restaurant can host up to 80 standing. Tell us about your occasion and we\u2019ll design a menu around it.',
    privateRoom: 'Private Room',
    privateRoomValue: 'Up to 24 guests · seated',
    wholeRestaurant: 'Whole Restaurant',
    wholeRestaurantValue: 'Up to 80 guests · standing',
    chefsTable: 'Chef\u2019s Table',
    chefsTableValue: '6 guests · kitchen-side',
    sampleNote: 'Sample capacities — to be confirmed by Sabora',
  },
  faq: {
    eyebrow: 'Good to Know',
    title: 'Frequently asked questions.',
    items: [
      {
        q: 'What is the dress code?',
        a: 'Smart casual. We want you to be comfortable, but we kindly ask no beachwear, flip-flops, or athletic singlets in the dining room after 6 PM.',
      },
      {
        q: 'Is parking available?',
        a: 'Valet parking is available from 5:30 PM at the restaurant entrance. There is also a public car park on Jl. Senopati, a two-minute walk from the front door.',
      },
      {
        q: 'Can you accommodate food allergies?',
        a: 'Absolutely. Please note any allergies or dietary requirements when you book, and our team will adapt the menu. For the chef\u2019s tasting, we need 48 hours\u2019 notice for significant changes.',
      },
      {
        q: 'Are children welcome?',
        a: 'Children of all ages are welcome. We offer a simplified children\u2019s menu on request. We kindly ask that families with infants are seated by 6:30 PM to preserve the dining room\u2019s atmosphere.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'Cancellations are free up to 24 hours before your reservation. Within 24 hours, a charge may apply for tasting menu bookings. Large party bookings require a deposit, refundable up to 72 hours in advance.',
      },
    ],
  },
  reservation: {
    eyebrow: 'Reservations',
    title: 'Your table is waiting for you.',
    body:
      'Open Tuesday to Sunday from 5:30 PM. Send a request below and our team will confirm your table.',
    fullName: 'Full Name',
    fullNamePlaceholder: 'Your name',
    phone: 'Phone Number',
    phonePlaceholder: '+62 812 3456 7890',
    email: 'Email',
    emailPlaceholder: 'you@email.com',
    date: 'Date',
    datePlaceholder: 'Select a date',
    selectDateFirst: '(select a date first)',
    time: 'Time',
    guests: 'Number of Guests',
    guest: 'guest',
    guestsPlaceholder: 'guests',
    submit: 'Request Reservation',
    closedMondays: 'Closed on Mondays',
    pastDates: 'past dates unavailable',
    booked: 'Booked',
    errName: 'Please enter your name.',
    errNameShort: 'Name must be at least 2 characters.',
    errPhone: 'Please enter your phone number.',
    errPhoneInvalid: 'Please enter a valid phone number.',
    errEmail: 'Please enter your email.',
    errEmailInvalid: 'Please enter a valid email address.',
    errDate: 'Please select a date.',
    errTime: 'Please select a time slot.',
    errGuests: 'Please select number of guests.',
    largePartyNote: 'For parties of 11 or more, we recommend our ',
    largePartyLink: 'Private Dining enquiry',
    largePartySuffix: '. Our events team will craft a bespoke menu for your group.',
    confirmedEyebrow: 'Reservation Requested',
    confirmedTitle: 'Your table is waiting.',
    confirmedBody:
      'We\u2019ve received your request and our team will confirm your reservation shortly.',
    bookingSummary: 'Booking Summary',
    addToCalendar: 'Add to Calendar',
    newReservation: 'New Reservation',
    policyTitle: 'Reservation policy',
    policyBody:
      'Tables are held for 15 minutes past the reserved time. Cancellations within 24 hours may incur a charge for tasting menus. Please inform us of any dietary requirements at the time of booking.',
    policyNote: 'Sample policy — to be confirmed by Sabora',
    sumName: 'Name',
    sumDate: 'Date',
    sumTime: 'Time',
    sumGuests: 'Guests',
    sumPhone: 'Phone',
    sumEmail: 'Email',
    months: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ],
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dateLocale: 'en-US',
  },
  footer: {
    tagline: 'Fine Dining & Lounge',
    visit: 'Visit',
    hours: 'Hours',
    contact: 'Contact',
    hoursDetail: 'Tue\u2013Sun · 5:30 PM – late',
    lastSeating: 'Last seating 9:30 PM',
    closedMondays: 'Closed Mondays',
    copyright: '© 2026 Sabora · Sample contact details · Season-led. Fire-finished.',
    disclaimer: 'Concept project — all details are fictional.',
  },
};

const id: Translation = {
  nav: {
    table: 'Meja Kami',
    events: 'Acara',
    signature: 'Signature',
    menu: 'Menu',
    privateDining: 'Ruang Privat',
    reservations: 'Reservasi',
    chef: 'Sang Koki',
    space: 'Ruang',
    testimonials: 'Ulasan',
    faq: 'Tanya Jawab',
    closeMenu: 'Tutup menu',
    openMenu: 'Buka menu',
    reserveTable: 'Pesan Meja',
  },
  hero: {
    eyebrow: 'Fine dining · api terbuka · mengikuti musim',
    title: 'Nikmati rasa yang menuai cerita.',
    subtitle:
      'Ruang makan intim di mana hasil bumi lokal bertemu api, naluri, dan sedikit keindahan yang tak terduga.',
    cta: 'Pesan Meja',
  },
  story: {
    eyebrow: 'Meja Sabora',
    title: 'Hidangan musiman yang dibuat dengan passion dan bahan tersegar.',
    body:
      'Sabora bermula dari sebuah panggangan kayu dan janji sederhana: masak hanya apa yang diberikan musim. Koki kami bekerja dengan petani kecil dan nelayan perahu hari di seluruh Jawa dan Bali, lalu membiarkan asap, fermentasi, dan keasaman cerah berbicara. Menu berubah seiring panen.',
  },
  events: {
    eyebrow: 'Berkumpul di Sabora',
    title: 'Acara dan menu musiman yang tak boleh Anda lewatkan.',
    body:
      'Kalender yang terus berubah — jamuan kolaboratif, perayaan intim, dan menu sekali saji.',
    everyThursday: 'Setiap Kamis',
    tastingTitle: 'Tasting musim dari Koki.',
    tastingBody: 'Tujuh sajian yang dibentuk oleh apa yang tiba di dapur pagi itu.',
    tastingPrice: 'Rp 1.450k per tamu · wine pairing +Rp 850k',
    povEyebrow: 'Sudut pandang kami',
    povTitle: 'Hidangan signature untuk setiap selera.',
    povBody: 'Masakan yang presisi, murah hati, dengan rasa tempat yang percaya diri.',
  },
  menu: {
    eyebrow: 'Dari dapur kami',
    title: 'Hidangan yang membuat tamu kembali lagi.',
    viewDetails: 'Lihat detail',
    footer:
      '7 item · V vegetarian · GF bebas gluten · harga belum termasuk 10% service & pajak (contoh)',
    categories: {
      Mains: 'Menu Utama',
      Starters: 'Pembuka',
      Desserts: 'Dessert',
      Cocktails: 'Koktail',
    },
    dietaryLabels: {
      V: 'Vegetarian',
      GF: 'Bebas Gluten',
      VGF: 'Vegan & Bebas Gluten',
    },
    allergens: 'Alergen',
    pairsWellWith: 'Cocok dipadukan dengan',
    closeDish: 'Tutup detail hidangan',
    items: {
      'ember-ribeye': {
        name: 'Ribeye Panggang Api',
        tagline: 'sumsum tulang berasap · jus bawang',
        description:
          'Ribeye dry-aged 45 hari yang dibakar di atas bara kayu ironbark hingga lemak berubah menjadi kerak karamel yang renyah. Disajikan dengan sumsum tulang berasap dan jus bawang yang direduksi dengan gula palem Bali. Ditambah cincin bawang bakar dan sejumput garam Maldon.',
        allergens:
          'Tidak mengandung gluten. Mungkin mengandung jejak susu dari mentega sumsum.',
        pairsWellWith:
          '2019 Penfolds Bin 28 Kalimna Shiraz — buah gelap yang berani menandingi asap.',
      },
      'coastal-catch': {
        name: 'Tangkapan Pesisir',
        tagline: 'adas · jeruk · beurre blanc',
        description:
          'Kakap merah fresh dari Selat Lombok, digoreng dengan kulit renyah dan ditata di atas irisan adas dan jeruk darah. Disiram beurre blanc jeruk dengan daun jeruk purut dan taburan bunga dill. Piring yang terang dan bersih, berasa dari laut.',
        allergens: 'Mengandung ikan, susu (mentega), dan jeruk. Tanpa gluten.',
        pairsWellWith:
          'Sancerre Blanc 2021 — mineral flint dan kesegaran jeruk menandingi beurre blanc.',
      },
      'garden-fire': {
        name: 'Kebun Berapi',
        tagline: 'sayuran heirloom · daun bawang bakar',
        description:
          'Wortel heirloom, bit, dan turnip bayi yang dipanggang lambat di atas ranting anggur membara hingga gula karamelisasi. Ditata di atas puree abu daun bawang bakar dengan cuka balsamic tua dan hazelnut panggang. Perayaan dari apa yang kebun berikan pagi ini.',
        allergens: 'Mengandung kacang pohon (hazelnut). Vegan dan bebas gluten.',
        pairsWellWith: 'Garden Highball — mentimun dan basil memotong manis berasap.',
      },
      'truffle-flatbread': {
        name: 'Flatbread Truffle',
        tagline: 'jamur liar · pecorino tua',
        description:
          'Flatbread sourdough tipis dengan jamur tiram liar yang ditumis dalam minyak truffle, pecorino tua parut, dan arugula liar. Ditambah serutan truffle hitam musim dingin dan benang minyak zaitun cold-pressed.',
        allergens:
          'Mengandung gluten dan susu. Mungkin mengandung jejak kacang dari minyak truffle.',
        pairsWellWith: 'Pinot Noir 2020 — nada jamur bumi selaras dengan truffle.',
      },
      'cacao-sea-salt': {
        name: 'Cacao & Garam Laut',
        tagline: 'cokelat hitam · krim malt',
        description:
          'Cokelat hitam Madagaskar single-origin (72%) yang diolah menjadi ganache mengkilap, berlapis krim malt dan sablé kakao. Ditambah serpihan garam laut dari Bali dan sorbet susu berasap. Kaya, pahit manis, dan sangat memuaskan.',
        allergens: 'Mengandung susu dan oat bebas gluten. Tanpa gluten gandum.',
        pairsWellWith:
          'Portuguese Tawny Port — caramel dan buah kering menambah cacao gelap.',
      },
      'golden-hour': {
        name: 'Jam Emas',
        tagline: 'markisa · jeruk · madu berasap',
        description:
          'Dessert dingin dengan curd markisa di atas dasar shortbread, ditambah sorbet jeruk dan madu berasap. Hiasan kulit jeruk nipis manis dan emas edible. Tropis, terang, dan manis secukupnya.',
        allergens: 'Mengandung susu dan telur. Bebas gluten.',
        pairsWellWith: 'Muscat de Beaumes-de-Venise — manis bunga mencerminkan markisa.',
      },
      'garden-highball': {
        name: 'Garden Highball',
        tagline: 'mentimun · basil · lime berbuih',
        description:
          'Highball non-alkohol: mentimun dan basil Thai yang diulek dengan lime segar, ditambah tonik artisanal dan tangkai basil. Segar, herba, dan menyegarkan — pembersih langit antara sajian atau aperitif tersendiri.',
        allergens: 'Tanpa alergen utama. Non-alkohol.',
        pairsWellWith: 'Kebun Berapi — kesegaran herba menggema sayuran panggang.',
      },
    },
  },
  chef: {
    eyebrow: 'Kenali Sang Koki',
    name: 'Arif Santoso',
    role: 'Executive Chef & Pendiri',
    bio1:
      'Perjalanan Arif bermula di dapur neneknya di Yogyakarta, di mana ia belajar bahwa memasak terbaik dimulai dengan mendengarkan — musim, bahan, dan api. Setelah satu dekade di dapur Sydney dan Copenhagen, ia pulang untuk membangun Sabora di sekitar satu panggangan kayu dan menu yang berubah setiap hari.',
    bio2:
      'Ia bekerja langsung dengan petani kecil di Bandung dan nelayan perahu hari di pesisir Bali, membangun hubungan yang membentuk setiap piring. Masakannya presisi tapi tidak rumit — asap, fermentasi, dan keasaman cerah berbicara lebih banyak.',
    quote: 'Masak hanya apa yang musim berikan. Api yang mengerjakan sisanya.',
  },
  space: {
    eyebrow: 'Ruang',
    title: 'Ruang yang dirancang untuk malam yang tenang.',
    body:
      'Kayu hangat, cahaya redup, dan nyala api terbuka. Setiap sudut Sabora dirancang untuk menjadikan makanan terasa seperti sebuah perayaan — baik di konter koki, bar, maupun ruang makan privat.',
    diningRoom: 'Ruang Makan',
    bar: 'Bar',
    privateRoom: 'Ruang Privat',
    closeLightbox: 'Tutup gambar',
    prev: 'Gambar sebelumnya',
    next: 'Gambar berikutnya',
  },
  testimonials: {
    eyebrow: 'Cerita Tamu',
    title: 'Apa kata tamu kami.',
    prev: 'Ulasan sebelumnya',
    next: 'Ulasan berikutnya',
    items: [
      {
        quote:
          'Tasting koki adalah makan terbaik yang kami nikmati di Jakarta. Setiap sajian menuai cerita, dan wine pairing sangat pas. Kami akan kembali setiap Kamis.',
        author: 'Priya Sharma',
        role: 'Penulis kuliner, Jakarta',
      },
      {
        quote:
          'Kami merayakan anniversary di ruang privat dan semuanya sempurna. Tim membuat kami merasa seperti tamu satu-satunya. Ribeye-nya tak terlupakan.',
        author: 'Dimas Pratama',
        role: 'Makan anniversary',
      },
      {
        quote:
          'Sabora mengubah cara saya memandang sayuran. Hidangan Kebun Berapi berasap, manis, dan tak terduga. Dapur yang benar-benar musiman.',
        author: 'Leila Hartono',
        role: 'Tamu rutin',
      },
      {
        quote:
          'Dari bar hingga gigitan dessert terakhir, setiap detail diperhatikan. Koktail Jam Emas saja sudah sepadan dengan kunjungan. Permata tersembunyi di Senopati.',
        author: 'Marcus Tan',
        role: 'Pencinta kuliner',
      },
    ],
  },
  privateDining: {
    eyebrow: 'Ruang privat & acara',
    title: 'Rayakan bersama kami.',
    body:
      'Ruang privat kami menampung hingga 24 tamu, dan seluruh restoran dapat menampung hingga 80 tamu berdiri. Ceritakan acara Anda dan kami akan merancang menu khusus untuk Anda.',
    privateRoom: 'Ruang Privat',
    privateRoomValue: 'Hingga 24 tamu · duduk',
    wholeRestaurant: 'Seluruh Restoran',
    wholeRestaurantValue: 'Hingga 80 tamu · berdiri',
    chefsTable: 'Meja Koki',
    chefsTableValue: '6 tamu · sisi dapur',
    sampleNote: 'Kapasitas contoh — untuk dikonfirmasi oleh Sabora',
  },
  faq: {
    eyebrow: 'Perlu Diketahui',
    title: 'Pertanyaan yang sering diajukan.',
    items: [
      {
        q: 'Apa dress code-nya?',
        a: 'Smart casual. Kami ingin Anda nyaman, tetapi mohon tidak menggunakan pakaian pantai, sandal jepit, atau singlet olahraga di ruang makan setelah pukul 18.00.',
      },
      {
        q: 'Apakah ada parkir?',
        a: 'Parkir valet tersedia mulai pukul 17.30 di pintu masuk restoran. Ada juga parkir umum di Jl. Senopati, dua menit berjalan kaki dari pintu depan.',
      },
      {
        q: 'Apakah bisa menampung alergi makanan?',
        a: 'Tentu. Mohon catarkan alergi atau kebutuhan diet saat reservasi, dan tim kami akan menyesuaikan menu. Untuk tasting koki, kami perlu pemberitahuan 48 jam untuk perubahan signifikan.',
      },
      {
        q: 'Apakah anak-anak diperbolehkan?',
        a: 'Anak-anak segala usia diperbolehkan. Kami menyediakan menu anak sederhana atas permintaan. Kami mohon keluarga dengan bayi dipindahkan sebelum pukul 18.30 untuk menjaga suasana ruang makan.',
      },
      {
        q: 'Apa kebijakan pembatalan?',
        a: 'Pembatalan gratis hingga 24 jam sebelum reservasi. Dalam 24 jam, biaya dapat berlaku untuk tasting menu. Pemesanan kelompok besar memerlukan deposit, dapat dikembalikan hingga 72 jam sebelumnya.',
      },
    ],
  },
  reservation: {
    eyebrow: 'Reservasi',
    title: 'Meja Anda menunggu.',
    body:
      'Buka Selasa hingga Minggu mulai pukul 17.30. Kirim permintaan di bawah dan tim kami akan mengkonfirmasi meja Anda.',
    fullName: 'Nama Lengkap',
    fullNamePlaceholder: 'Nama Anda',
    phone: 'Nomor Telepon',
    phonePlaceholder: '+62 812 3456 7890',
    email: 'Email',
    emailPlaceholder: 'anda@email.com',
    date: 'Tanggal',
    datePlaceholder: 'Pilih tanggal',
    selectDateFirst: '(pilih tanggal dulu)',
    time: 'Waktu',
    guests: 'Jumlah Tamu',
    guest: 'tamu',
    guestsPlaceholder: 'tamu',
    submit: 'Ajukan Reservasi',
    closedMondays: 'Tutup hari Senin',
    pastDates: 'tanggal lalu tidak tersedia',
    booked: 'Penuh',
    errName: 'Mohon masukkan nama Anda.',
    errNameShort: 'Nama harus minimal 2 karakter.',
    errPhone: 'Mohon masukkan nomor telepon Anda.',
    errPhoneInvalid: 'Mohon masukkan nomor telepon yang valid.',
    errEmail: 'Mohon masukkan email Anda.',
    errEmailInvalid: 'Mohon masukkan email yang valid.',
    errDate: 'Mohon pilih tanggal.',
    errTime: 'Mohon pilih waktu.',
    errGuests: 'Mohon pilih jumlah tamu.',
    largePartyNote: 'Untuk rombongan 11 orang atau lebih, kami sarankan ',
    largePartyLink: 'pertanyaan Ruang Privat',
    largePartySuffix: '. Tim acara kami akan merancang menu khusus untuk grup Anda.',
    confirmedEyebrow: 'Reservasi Diajukan',
    confirmedTitle: 'Meja Anda menunggu.',
    confirmedBody:
      'Kami telah menerima permintaan Anda dan tim kami akan mengkonfirmasi reservasi Anda segera.',
    bookingSummary: 'Ringkasan Pemesanan',
    addToCalendar: 'Tambah ke Kalender',
    newReservation: 'Reservasi Baru',
    policyTitle: 'Kebijakan reservasi',
    policyBody:
      'Meja disimpan selama 15 menit setelah waktu reservasi. Pembatalan dalam 24 jam dapat dikenakan biaya untuk tasting menu. Mohon informasikan kebutuhan diet saat pemesanan.',
    policyNote: 'Kebijakan contoh — untuk dikonfirmasi oleh Sabora',
    sumName: 'Nama',
    sumDate: 'Tanggal',
    sumTime: 'Waktu',
    sumGuests: 'Tamu',
    sumPhone: 'Telepon',
    sumEmail: 'Email',
    months: [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
    ],
    days: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
    dateLocale: 'id-ID',
  },
  footer: {
    tagline: 'Fine Dining & Lounge',
    visit: 'Kunjungi',
    hours: 'Jam Buka',
    contact: 'Kontak',
    hoursDetail: 'Sel–Min · 17.30 – larut',
    lastSeating: 'Seating terakhir 21.30',
    closedMondays: 'Tutup hari Senin',
    copyright: '© 2026 Sabora · Kontak contoh · Mengikuti musim. Selesai dengan api.',
    disclaimer: 'Proyek konsep — semua detail bersifat fiktif.',
  },
};

export const translations: Record<Lang, Translation> = { en, id };
