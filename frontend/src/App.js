import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Advantages from './components/Advantages';
import Courses from './components/Courses';
import Results from './components/Results';
import SchoolLife from './components/SchoolLife';
import SchoolNews from './components/SchoolNews';
import Teachers from './components/Teachers';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Advantages />
        <Courses />
        <Results />
        <SchoolLife />
        <SchoolNews />
        <Teachers />
        <Testimonials />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
