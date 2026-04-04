import React from 'react';
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

const HomePage = () => {
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
    </main>
  );
};

export default HomePage;
