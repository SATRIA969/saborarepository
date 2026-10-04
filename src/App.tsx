import { LanguageProvider } from '@/i18n/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Events from '@/components/Events';
import Menu from '@/components/Menu';
import Chef from '@/components/Chef';
import TheSpace from '@/components/TheSpace';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import PrivateDining from '@/components/PrivateDining';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-ink min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Story />
          <Events />
          <Menu />
          <Chef />
          <TheSpace />
          <Testimonials />
          <FAQ />
          <PrivateDining />
          <Reservation />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
