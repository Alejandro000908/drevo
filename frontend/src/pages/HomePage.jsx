import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Facilities from '../components/Facilities';
import Advantages from '../components/Advantages';
import Results from '../components/Results';
import SchoolLife from '../components/SchoolLife';
import SchoolNews from '../components/SchoolNews';
import Teachers from '../components/Teachers';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contacts from '../components/Contacts';
import VisitModal from '../components/VisitModal';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 5 seconds or on scroll past 50% of page
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50 && !showModal) {
        setShowModal(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showModal]);

  return (
    <main>
      <Hero />
      <About />
      <Facilities />
      <Advantages />
      <Results />
      <SchoolLife />
      <SchoolNews />
      <Teachers />
      <Testimonials />
      <FAQ />
      <Contacts />
      
      <VisitModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
};

export default HomePage;
