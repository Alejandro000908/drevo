'use client'

import React from 'react'
import { X, Download } from 'lucide-react'

interface ProgramModalProps {
  program: {
    id: number
    title: string
    image: string
    downloadLink: string
    color: string
  } | null
  onClose: () => void
}

const ProgramModal = ({ program, onClose }: ProgramModalProps) => {
  if (!program) return null

  const handleDownload = () => {
    window.open(program.downloadLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      
      {/* Modal */}
      <div 
        className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Header with gradient */}
        <div className={`relative bg-gradient-to-br ${program.color} p-8`}>
          <h2 className="text-3xl font-bold text-white mb-2">{program.title}</h2>
          <p className="text-white/90">Образовательная программа</p>
        </div>

        {/* Program Image */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Подробная образовательная программа с перечнем предметов, учебными планами и методическими материалами для данной ступени обучения.
          </p>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="w-full bg-gradient-to-r from-[#009479] to-[#00BFA5] hover:from-[#007A64] hover:to-[#009479] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span>Скачать программу (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProgramModal
