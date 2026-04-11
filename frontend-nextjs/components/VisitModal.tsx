'use client'

import React, { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from './ui/button'

interface VisitModalProps {
  isOpen: boolean
  onClose: () => void
}

const VisitModal = ({ isOpen, onClose }: VisitModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Visit request:', formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 animate-slideUp">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-[#414141] dark:text-white mb-2">
          Запишитесь на экскурсию
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Познакомьтесь с нашей школой лично
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Ваше имя
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#009479] focus:border-transparent"
              placeholder="Иван Иванов"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Телефон
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#009479] focus:border-transparent"
              placeholder="+7 (999) 123-45-67"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#009479] focus:border-transparent"
              placeholder="example@mail.ru"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#009479] to-[#00BFA5] hover:from-[#007A64] hover:to-[#009479] text-white py-3"
          >
            Отправить заявку
          </Button>
        </form>
      </div>
    </div>
  )
}

export default VisitModal
