import { FULL_STATS } from '@/lib/data'

const FullStatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0a1929] via-[#1a2332] to-[#0d3d4a] relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300BFA5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#009479]/20 backdrop-blur-sm border border-[#009479]/30 rounded-full px-6 py-2 mb-6">
            <svg className="w-4 h-4 text-[#00BFA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-[#00BFA5] font-semibold text-sm">НАШИ ДОСТИЖЕНИЯ И ВЫПУСКНИКИ</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Результаты, которыми мы гордимся
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Цифры говорят сами за себя — наши ученики достигают впечатляющих успехов
          </p>
        </div>

        {/* Stats Grid - 4 top, 2 bottom */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {FULL_STATS.slice(0, 4).map((stat) => (
              <div
                key={stat.id}
                className="bg-[#1e2a38]/40 backdrop-blur-sm border-2 border-[#009479]/40 rounded-3xl p-8 text-center hover:border-[#00BFA5]/60 hover:bg-[#1e2a38]/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#009479]/20"
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#00BFA5] mb-3">
                  {stat.decimals 
                    ? stat.value.toLocaleString('ru-RU', { minimumFractionDigits: stat.decimals, maximumFractionDigits: stat.decimals })
                    : stat.value
                  }{stat.suffix}
                </div>
                <div className="text-sm sm:text-base text-white font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {FULL_STATS.slice(4, 6).map((stat) => (
              <div
                key={stat.id}
                className="bg-[#1e2a38]/40 backdrop-blur-sm border-2 border-[#009479]/40 rounded-3xl p-8 text-center hover:border-[#00BFA5]/60 hover:bg-[#1e2a38]/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#009479]/20"
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#00BFA5] mb-3">
                  {stat.decimals 
                    ? stat.value.toLocaleString('ru-RU', { minimumFractionDigits: stat.decimals, maximumFractionDigits: stat.decimals })
                    : stat.value
                  }{stat.suffix}
                </div>
                <div className="text-sm sm:text-base text-white font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullStatsSection
