'use client'

import { useState, useEffect } from 'react'
import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import QuoteDivider from '@/components/QuoteDivider'
import About from '@/components/About'
import Facilities from '@/components/Facilities'
import InteractiveStory from '@/components/InteractiveStory'
import Advantages from '@/components/Advantages'
import Results from '@/components/Results'
import PricingInfographic from '@/components/PricingInfographic'
import SchoolLife from '@/components/SchoolLife'
import SchoolNews from '@/components/SchoolNews'
import TeachersCarousel from '@/components/TeachersCarousel'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contacts from '@/components/Contacts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VisitModal from '@/components/VisitModal'

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)
  const [hasShownInitially, setHasShownInitially] = useState(false)

  useEffect(() => {
    // Disabled for development/testing
    return
    
    if (!hasShownInitially) {
      const timer = setTimeout(() => {
        setShowModal(true)
        setHasShownInitially(true)
      }, 5000)

      const handleScroll = () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        if (scrollPercent > 50 && !showModal && !hasShownInitially) {
          setShowModal(true)
          setHasShownInitially(true)
        }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        clearTimeout(timer)
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [showModal, hasShownInitially])

  const handleCloseModal = () => {
    setShowModal(false)
    
    setTimeout(() => {
      setShowModal(true)
    }, 120000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        
        <QuoteDivider 
          quote="Школа — это пространство, где формируется будущее лидеров." 
          alignment="center" 
        />
        
        <About />
        
        <QuoteDivider 
          quote="Выбирая сильную школу, вы закладываете фундамент выдающегося будущего." 
          alignment="left" 
        />
        
        <Facilities />
        
        <InteractiveStory />
        
        <QuoteDivider 
          quote="Настоящее образование начинается там, где ценят личность каждого ребёнка." 
          alignment="right" 
        />
        
        <Advantages />
        
        <QuoteDivider 
          quote="Мы создаём среду, в которой интеллект, характер и ценности развиваются гармонично." 
          alignment="center" 
        />
        
        <Results />
        
        <QuoteDivider 
          quote="Образование здесь — это не только знания, но и культура мышления." 
          alignment="right" 
        />
        
        <PricingInfographic />
        
        <SchoolLife />
        
        <section id="news" className="scroll-mt-20">
          <SchoolNews />
        </section>
        
        <QuoteDivider 
          quote="Доверие родителей — наша главная ценность и ответственность." 
          alignment="center" 
        />
        
        <section id="teachers" className="scroll-mt-20">
          <TeachersCarousel />
        </section>
        
        <QuoteDivider 
          quote="Вы доверяете нам самое важное — и мы оправдываем это доверие каждый день." 
          alignment="right" 
        />
        
        <Testimonials />
        
        <QuoteDivider 
          quote="Каждый ученик раскрывает свой потенциал в атмосфере уважения и поддержки." 
          alignment="center" 
        />
        
        <section id="faq" className="scroll-mt-20">
          <FAQ />
        </section>
        
        <QuoteDivider 
          quote="Здесь формируются уверенность, лидерство и внутренняя культура личности." 
          alignment="center" 
        />
        
        <section id="contacts" className="scroll-mt-20">
          <Contacts />
        </section>
      </main>
      <Footer />
      
      <VisitModal isOpen={showModal} onClose={handleCloseModal} />
    </>
  )
}
