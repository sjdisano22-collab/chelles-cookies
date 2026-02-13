import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './sections/AboutSection';
import GallerySection from './sections/GallerySection';
import ServicesSection from './sections/ServicesSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
