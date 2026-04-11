'use client'

import React from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Древо Познаний</h3>
            <p className="text-sm">Частная школа в Раменском</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <p className="text-sm mb-2">Телефон: {siteConfig.contact.phone}</p>
            <p className="text-sm mb-2">Email: {siteConfig.contact.email}</p>
            <p className="text-sm">{siteConfig.contact.address}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#00BFA5]">Главная</Link></li>
              <li><Link href="/programas" className="hover:text-[#00BFA5]">Программы</Link></li>
              <li><Link href="/vacantes" className="hover:text-[#00BFA5]">Вакансии</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Социальные сети</h4>
            <p className="text-sm">Следите за новостями школы</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} Древо Познаний. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer