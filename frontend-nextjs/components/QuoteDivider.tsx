import React from 'react'

interface QuoteDividerProps {
  quote: string
  alignment?: 'left' | 'center' | 'right'
}

const QuoteDivider = ({ quote, alignment = 'center' }: QuoteDividerProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <section className="py-16 bg-gradient-to-r from-[#009479]/5 to-[#00BFA5]/5 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <blockquote className={`max-w-4xl mx-auto ${alignmentClasses[alignment]}`}>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-[#414141] dark:text-gray-200 leading-relaxed">
            "{quote}"
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-[#009479] to-[#00BFA5] rounded-full"></div>
          </div>
        </blockquote>
      </div>
    </section>
  )
}

export default QuoteDivider
