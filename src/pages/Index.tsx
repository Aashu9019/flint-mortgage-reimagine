
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhoWeHelp from '../components/WhoWeHelp';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <Hero />
      <Services />
      <WhoWeHelp />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
