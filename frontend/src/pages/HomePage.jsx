import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Facilities from '../components/Facilities';
import Advantages from '../components/Advantages';
import Results from '../components/Results';
import PricingInfographic from '../components/PricingInfographic';
import SchoolLife from '../components/SchoolLife';
import SchoolNews from '../components/SchoolNews';
import TeachersCarousel from '../components/TeachersCarousel';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contacts from '../components/Contacts';
import VisitModal from '../components/VisitModal';
import QuoteDivider from '../components/QuoteDivider';
import InteractiveStory from '../components/InteractiveStory';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [hasShownInitially, setHasShownInitially] = useState(false);

  useEffect(() => {
    // Listen for custom event to open visit modal
    const handleOpenVisitModal = () => {
      setShowModal(true);
    };
    
    window.addEventListener('openVisitModal', handleOpenVisitModal);

    // Show modal initially after 5 seconds or on scroll past 50% of page
    if (!hasShownInitially) {
      const timer = setTimeout(() => {
        setShowModal(true);
        setHasShownInitially(true);
      }, 5000);

      const handleScroll = () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > 50 && !showModal && !hasShownInitially) {
          setShowModal(true);
          setHasShownInitially(true);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('openVisitModal', handleOpenVisitModal);
      };
    }
    
    return () => {
      window.removeEventListener('openVisitModal', handleOpenVisitModal);
    };
  }, [showModal, hasShownInitially]);

  const handleCloseModal = () => {
    setShowModal(false);
    
    // Show modal again after 2 minutes (120 seconds)
    setTimeout(() => {
      setShowModal(true);
    }, 120000); // 120 seconds
  };

  return (
    <main>
      <Hero />
      
      {/* Quote 1 - About Leadership */}
      <QuoteDivider 
        quote="Школа — это пространство, где формируется будущее лидеров." 
        alignment="center" 
      />
      
      <About />
      
      {/* Quote 2 - About Strong Foundation */}
      <QuoteDivider 
        quote="Выбирая сильную школу, вы закладываете фундамент выдающегося будущего." 
        alignment="left" 
      />
      
      <Facilities />
      
      {/* Interactive Story Section */}
      <InteractiveStory />
      
      {/* Quote 3 - About Personality */}
      <QuoteDivider 
        quote="Настоящее образование начинается там, где ценят личность каждого ребёнка." 
        alignment="right" 
      />
      
      <Advantages />
      
      {/* Quote 4 - About Harmonious Development */}
      <QuoteDivider 
        quote="Мы создаём среду, в которой интеллект, характер и ценности развиваются гармонично." 
        alignment="center" 
      />
      
      <Results />
      
      {/* Quote 6 - About Culture of Thinking */}
      <QuoteDivider 
        quote="Образование здесь — это не только знания, но и культура мышления." 
        alignment="right" 
      />
      
      {/* Premium Pricing Infographic */}
      <PricingInfographic />
      
      <SchoolLife />
      <SchoolNews />
      
      {/* Quote 7 - About Trust */}
      <QuoteDivider 
        quote="Доверие родителей — наша главная ценность и ответственность." 
        alignment="center" 
      />
      
      <TeachersCarousel />
      
      {/* Quote 8 - About Daily Trust */}
      <QuoteDivider 
        quote="Вы доверяете нам самое важное — и мы оправдываем это доверие каждый день." 
        alignment="right" 
      />
      
      <Testimonials />
      
      {/* Quote 9 - About Potential */}
      <QuoteDivider 
        quote="Каждый ученик раскрывает свой потенциал в атмосфере уважения и поддержки." 
        alignment="center" 
      />
      
      <FAQ />
      
      {/* Quote 10 - About Leadership & Culture */}
      <QuoteDivider 
        quote="Здесь формируются уверенность, лидерство и внутренняя культура личности." 
        alignment="center" 
      />
      
      <Contacts />
      
      {/* VisitModal activado */}
      <VisitModal isOpen={showModal} onClose={handleCloseModal} />
    </main>
  );
};

export default HomePage;
