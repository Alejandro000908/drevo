import { FULL_STATS } from '@/lib/data'

const FullStatsSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#414141] dark:text-white">
          Результаты, которыми мы гордимся
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Наши ученики достигают выдающихся результатов благодаря качественному образованию и индивидуальному подходу
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {FULL_STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                {stat.decimals 
                  ? stat.value.toLocaleString('ru-RU', { minimumFractionDigits: stat.decimals, maximumFractionDigits: stat.decimals })
                  : stat.value
                }{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm lg:text-base opacity-90 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FullStatsSection
