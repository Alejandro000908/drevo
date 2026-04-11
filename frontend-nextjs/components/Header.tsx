'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from './ui/button'
import ExportedImage from 'next-image-export-optimizer'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    handleScroll() // Set initial state
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (typeof document === 'undefined') return
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMenuOpen(false)
    }
  }

  const handleNavigation = (link: any) => {
    if (link.external) {
      setIsMenuOpen(false)
    } else {
      if (pathname !== '/') {
        if (typeof window !== 'undefined') {
          window.location.href = '/#' + link.id
        }
      } else {
        scrollToSection(link.id)
      }
    }
  }

  const navLinks = [
    { id: 'home', label: 'Главная', href: '/', external: false },
    { id: 'preschool-prep', label: 'Подготовка к школе', href: '/preparacion-preescolar', external: true },
    { id: 'programs', label: 'Программы', href: '/programas', external: true },
    { id: 'results', label: 'Результаты', href: '/#results', external: false },
    { id: 'news', label: 'Новости', href: '/#news', external: false },
    { id: 'documents', label: 'Документы', href: '/documentos', external: true },
    { id: 'vacancies', label: 'Вакансии', href: '/vacantes', external: true },
    { id: 'contacts', label: 'Контакты', href: '/#contacts', external: false }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg dark:shadow-2xl dark:shadow-[#009479]/10'
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center cursor-pointer group flex-shrink-0"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mr-2 sm:mr-3 transition-transform duration-300 group-hover:scale-110">
              <ExportedImage 
                src="/images/logo.png"
                alt="Древо Познаний - Частная школа в Раменском"
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-[#009479] dark:text-[#00BFA5] leading-tight transition-colors duration-300">
                Древо Познаний
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">Частная школа</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.external ? (
                <Link
                  key={link.id}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#009479] dark:hover:text-[#00BFA5] transition-all duration-300 hover:scale-105"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#009479] dark:hover:text-[#00BFA5] transition-all duration-300 hover:scale-105"
                >
                  {link.label}
                </button>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+79161222112" className="flex items-center text-[#009479] dark:text-[#00BFA5] hover:scale-105 transition-transform duration-300">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-semibold">+7 (916) 122-21-12</span>
            </a>
            <Button
              onClick={() => scrollToSection('contacts')}
              className="bg-gradient-to-r from-[#009479] to-[#00BFA5] hover:from-[#007A64] hover:to-[#009479] text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Записаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Quick Access Bar - Mobile Horizontal Scroll */}
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-800">
          <div 
            className="flex gap-2 overflow-x-auto py-3 px-2 no-scrollbar snap-x snap-mandatory"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {navLinks.map((link) => (
              link.external ? (
                <Link
                  key={link.id}
                  href={link.href}
                  className="flex-shrink-0 snap-start px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-[#009479] hover:text-white dark:hover:bg-[#00BFA5] rounded-full transition-all duration-300 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link)}
                  className="flex-shrink-0 snap-start px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-[#009479] hover:text-white dark:hover:bg-[#00BFA5] rounded-full transition-all duration-300 whitespace-nowrap"
                >
                  {link.label}
                </button>
              )
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                link.external ? (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => handleNavigation(link)}
                    className="px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                )
              ))}
              <div className="pt-4 px-4">
                <a href="tel:+79161222112" className="flex items-center justify-center text-[#009479] dark:text-[#00BFA5] mb-3">
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="font-semibold">+7 (916) 122-21-12</span>
                </a>
                <Button
                  onClick={() => {
                    scrollToSection('contacts')
                    setIsMenuOpen(false)
                  }}
                  className="w-full bg-gradient-to-r from-[#009479] to-[#00BFA5] hover:from-[#007A64] hover:to-[#009479] text-white px-6 py-3 rounded-full shadow-lg"
                >
                  Записаться
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
