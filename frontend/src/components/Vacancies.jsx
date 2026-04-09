import React, { useState } from 'react';
import { Briefcase, GraduationCap, Clock, MapPin, Send, Upload, CheckCircle, AlertCircle, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

// Real job vacancies data
const JOB_VACANCIES = [
  {
    id: 1,
    title: "Учитель начальных классов",
    salary: "70 000 – 110 000 ₽",
    salaryPeriod: "за месяц, на руки",
    payments: "два раза в месяц",
    experience: "1–3 года",
    employment: "Полная занятость",
    schedule: "5/2",
    workHours: "8",
    location: "г. Раменское",
    responsibilities: [
      "Преподавание 1-4 классы",
      "Разработка рабочей программы по предмету",
      "Организация учебной и внеурочной деятельности обучающихся (до 12 человек в классе)",
      "Ведение электронного журнала"
    ],
    requirements: [
      "Стаж работы от 1-3 лет",
      "Среднее и высшее профессиональное образование (бакалавриат, специалитет, магистратура)",
      "Знание и владение различными методиками преподавания предмета, умение и желание работать с детьми",
      "Навыки работы с УМК \"Перспектива\" и математикой Л. Г. Петерсон приветствуются"
    ],
    conditions: [
      "График работы: 5/2 с 9:00 до 16:30",
      "Оформление по ТК РФ",
      "Стабильная заработная плата",
      "Премии по результатам успеваемости учащихся",
      "Двухразовое питание за счёт школы",
      "Обучение и тренинги",
      "Возможность профессионального и карьерного роста"
    ],
    keySkills: [
      "Грамотная речь",
      "Организация учебного процесса",
      "Обучение и развитие",
      "Ведение документации",
      "Грамотность"
    ]
  },
  {
    id: 2,
    title: "Учитель русского языка и литературы",
    salary: "70 000 – 95 000 ₽",
    salaryPeriod: "за месяц, на руки",
    experience: "1–3 года",
    employment: "Полная занятость",
    schedule: "5/2",
    workHours: "8",
    location: "г. Раменское",
    responsibilities: [
      "Проведение уроков русского языка и литературы в 5-11 классах на высоком уровне",
      "Применение индивидуального подхода к каждому ребенку",
      "Подготовка учащихся к ОГЭ, ЕГЭ и ГИА (опыт подготовки учеников обязателен)",
      "Проведение учебных занятий в 5-11 общеобразовательных классах",
      "Осуществление профессиональной деятельности в соответствии с требованиями ФГОС",
      "Планирование и проведение учебных занятий",
      "Формирование у детей мотивации к обучению"
    ],
    requirements: [
      "Высшее профессиональное образование (бакалавриат, специалитет, магистратура)",
      "Навыки работы репетитором приветствуются",
      "Профильное образование",
      "Знание предмета, методики преподавания",
      "Опыт подготовки к олимпиадам и конкурсам",
      "Опыт подготовки к ОГЭ и ЕГЭ"
    ],
    conditions: [
      "Оформление по ТК РФ",
      "Стабильная заработная плата",
      "Премии по результатам успеваемости учеников, до 20% от зп",
      "Классное руководство (по желанию)",
      "Премии за успешную подготовку учеников к сдаче ОГЭ/ЕГЭ",
      "Работа в классах до 12 человек",
      "5/2 с 9:00 до 16:30",
      "50% скидка на обучение Вашего ребёнка в нашей школе",
      "График 5/2",
      "Возможно проведение платных образовательных услуг",
      "Возможность (по желанию) преподавать на курсах при школе"
    ],
    keySkills: [
      "Грамотная речь",
      "Грамотность",
      "Обязательность"
    ]
  },
  {
    id: 3,
    title: "Учитель Истории/обществознания",
    salary: "50 000 – 95 000 ₽",
    salaryPeriod: "за месяц, на руки",
    experience: "1–3 года",
    employment: "Частичная занятость",
    schedule: "5/2",
    workHours: "8",
    location: "г. Раменское",
    responsibilities: [],
    requirements: [],
    conditions: [],
    keySkills: []
  },
  {
    id: 4,
    title: "Учитель математики",
    salary: "70 000 – 125 000 ₽",
    salaryPeriod: "за месяц на руки",
    experience: "3–6 лет",
    employment: "Полная занятость",
    schedule: "5/2",
    workHours: "7 или 8",
    location: "г. Раменское",
    responsibilities: [
      "Учитель математики для преподавания в 5-11 классах",
      "Подготовка к ОГЭ, ЕГЭ, Олимпиадам",
      "Преподавание в классах (до 12 человек)",
      "Классное руководство (по желанию)",
      "Преподавание на курсах при школе",
      "Формирование у детей мотивации к обучению"
    ],
    requirements: [
      "Высшее педагогическое или профильное (математическое или физико-математическое) образование",
      "Опыт работы от 3 лет",
      "Опыт подготовки к ОГЭ/ЕГЭ обязателен",
      "Опыт работы репетитором приветствуется",
      "Наличие квалификационной категории приветствуется, но не обязательно",
      "Знание предмета, методик преподавания"
    ],
    conditions: [
      "График работы: 5/2 (с 9:00 до 16:30)",
      "Оформление по ТК РФ",
      "Стабильная заработная плата",
      "Премии по результатам успеваемости учащихся",
      "Премии по результатам сдачи ОГЭ/ЕГЭ и участии в Олимпиадах",
      "50% от стоимости, на обучение вашего ребёнка в нашей школе",
      "Обучение и тренинги",
      "Возможность профессионального и карьерного роста"
    ],
    keySkills: [
      "Пользователь ПК",
      "Работа в команде",
      "Грамотная речь",
      "Умение работать в коллективе",
      "Творческое мышление"
    ]
  },
  {
    id: 5,
    title: "Учитель информатики",
    salary: "80 000 – 125 000 ₽",
    salaryPeriod: "за месяц на руки",
    payments: "два раза в месяц",
    experience: "3–6 лет",
    employment: "Полная занятость",
    schedule: "5/2",
    workHours: "8",
    location: "г. Раменское",
    responsibilities: [
      "Учитель информатики для преподавания в 5-11 классах",
      "Подготовка к ОГЭ, ЕГЭ, Олимпиадам",
      "Преподавание в классах (до 12 человек)",
      "Классное руководство (по желанию)",
      "Преподавание на курсах при школе",
      "Формирование у детей мотивации к обучению"
    ],
    requirements: [
      "Высшее педагогическое или профильное (информатика, математическое или физико-математическое) образование",
      "Опыт работы от 3 лет",
      "Опыт подготовки к ОГЭ/ЕГЭ обязателен",
      "Опыт работы репетитором приветствуется",
      "Наличие квалификационной категории приветствуется, но не обязательно",
      "Знание предмета, методик преподавания"
    ],
    conditions: [
      "График работы: 5/2 (с 9:00 до 16:30)",
      "Оформление по ТК РФ",
      "Стабильная заработная плата",
      "Премии по результатам успеваемости учащихся",
      "Премии по результатам сдачи ОГЭ/ЕГЭ и участии в Олимпиадах",
      "50% от стоимости, на обучение вашего ребёнка в нашей школе",
      "Обучение и тренинги",
      "Возможность профессионального и карьерного роста"
    ],
    keySkills: [
      "Пользователь ПК",
      "Работа в команде",
      "Грамотная речь",
      "Умение работать в коллективе",
      "Творческое мышление"
    ]
  },
  {
    id: 6,
    title: "Учитель химии/биологии",
    salary: "60 000 – 90 000 ₽",
    salaryPeriod: "за месяц на руки",
    experience: "1–3 года",
    employment: "Частичная занятость",
    schedule: "5/2 или свободный",
    workHours: "6",
    location: "г. Раменское",
    responsibilities: [
      "Преподавание химии и биологии (5-11) в соответствии с ФГОС",
      "Опыт подготовки к ОГЭ и ЕГЭ",
      "Заполнение журнала",
      "Подготовка материалов к занятию",
      "Подготовка к ГИА по биологии",
      "Подготовка к олимпиадам и конкурсам (биология)",
      "Дополнительное образование",
      "Внеурочная деятельность"
    ],
    requirements: [
      "Высшее профильное (биология/химия) образование или среднее специальное (Химия/биология)",
      "Желание профессионально развиваться"
    ],
    conditions: [
      "Гибкий график",
      "Оформление по ТК РФ",
      "Заработная плата по результатам собеседования (зависит от нагрузки и дополнительного функционала)"
    ],
    keySkills: [
      "Грамотная речь",
      "Грамотность",
      "Оформление документации",
      "Pascal",
      "Обязательность"
    ]
  }
];

const Vacancies = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    cv: null
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setStatus({
          type: 'error',
          message: 'Размер файла не должен превышать 5MB'
        });
        return;
      }
      setFormData((prev) => ({ ...prev, cv: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Пожалуйста, заполните все обязательные поля'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // TODO: Implement API call to submit application
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({
        type: 'success',
        message: 'Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.'
      });
      setFormData({ name: '', email: '', phone: '', message: '', cv: null });
      setSelectedJob(null);
      
      // Reset file input
      const fileInput = document.getElementById('cv-upload');
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Произошла ошибка. Попробуйте позже.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="vacancies" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Briefcase className="w-4 h-4" />
            <span>КАРЬЕРА</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] mb-4">
            Присоединяйтесь к нашей команде
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы ищем талантливых преподавателей, которые разделяют нашу страсть к образованию и готовы вдохновлять новое поколение
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {JOB_VACANCIES.map((job, index) => (
            <div
              key={job.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              style={{ 
                animation: 'fadeInUp 0.6s ease-out',
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Job Header with Salary Highlight */}
              <div className="bg-gradient-to-r from-[#009479] to-[#00BFA5] p-6 text-white">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium">
                        <Clock className="w-3 h-3" />
                        {job.employment}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>
                
                {/* Salary */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl md:text-3xl font-black mb-1">
                    {job.salary}
                  </div>
                  <div className="text-sm text-white/90">{job.salaryPeriod}</div>
                  {job.payments && (
                    <div className="text-xs text-white/80 mt-1">Выплаты: {job.payments}</div>
                  )}
                </div>
              </div>

              {/* Job Details */}
              <div className="p-6 space-y-4">
                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-3 pb-4 border-b border-gray-100">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Опыт работы</div>
                    <div className="text-sm font-semibold text-gray-900">{job.experience}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">График</div>
                    <div className="text-sm font-semibold text-gray-900">{job.schedule}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Рабочие часы</div>
                    <div className="text-sm font-semibold text-gray-900">{job.workHours}</div>
                  </div>
                </div>

                {/* Responsibilities */}
                {job.responsibilities && job.responsibilities.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-1 h-4 bg-[#009479] rounded"></span>
                      Обязанности:
                    </h4>
                    <ul className="space-y-1.5">
                      {job.responsibilities.slice(0, 4).map((resp, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-[#009479] mt-0.5 flex-shrink-0">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                      {job.responsibilities.length > 4 && (
                        <li className="text-xs text-gray-500 italic pl-4">
                          + ещё {job.responsibilities.length - 4} обязанностей
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Requirements */}
                {job.requirements && job.requirements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-1 h-4 bg-[#009479] rounded"></span>
                      Требования:
                    </h4>
                    <ul className="space-y-1.5">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-[#009479] mt-0.5 flex-shrink-0">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                      {job.requirements.length > 3 && (
                        <li className="text-xs text-gray-500 italic pl-4">
                          + ещё {job.requirements.length - 3} требований
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Conditions Highlight */}
                {job.conditions && job.conditions.length > 0 && (
                  <div className="bg-gradient-to-br from-[#009479]/5 to-[#00BFA5]/5 rounded-xl p-4 border border-[#009479]/10">
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-[#009479]">✓</span>
                      Условия:
                    </h4>
                    <ul className="space-y-1.5">
                      {job.conditions.slice(0, 3).map((cond, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="text-[#009479] mt-0.5 flex-shrink-0">•</span>
                          <span className="font-medium">{cond}</span>
                        </li>
                      ))}
                      {job.conditions.length > 3 && (
                        <li className="text-xs text-gray-600 italic pl-4">
                          + ещё {job.conditions.length - 3} преимуществ
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Key Skills */}
                {job.keySkills && job.keySkills.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 mb-2">Ключевые навыки:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.keySkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Apply Button */}
              <div className="px-6 pb-6">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full bg-[#009479] hover:bg-[#007A64] text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>Откликнуться на вакансию</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-[#009479] to-[#007A64] rounded-2xl p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Что мы предлагаем</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h4 className="font-semibold mb-2">Конкурентная зарплата</h4>
              <p className="text-white/90 text-sm">Достойная оплата труда и премии за результаты</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h4 className="font-semibold mb-2">Профессиональный рост</h4>
              <p className="text-white/90 text-sm">Обучение, тренинги и карьерное развитие</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="font-semibold mb-2">Дружная команда</h4>
              <p className="text-white/90 text-sm">Поддержка коллег и комфортная атмосфера</p>
            </div>
          </div>
        </div>

        {/* Application Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              style={{ animation: 'scaleIn 0.3s ease-out' }}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#414141]">Отклик на вакансию</h3>
                  <p className="text-sm text-gray-600 mt-1">{selectedJob.title}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    className="w-full"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.ru"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Сопроводительное письмо *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о своем опыте и мотивации..."
                    rows={5}
                    className="w-full resize-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cv-upload" className="block text-sm font-semibold text-gray-700 mb-2">
                    Резюме (PDF, DOC, DOCX - до 5MB)
                  </label>
                  <div className="relative">
                    <input
                      id="cv-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="cv-upload"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#009479] hover:bg-[#009479]/5 transition-colors cursor-pointer"
                    >
                      <Upload className="w-5 h-5 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {formData.cv ? formData.cv.name : 'Загрузить резюме'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Status Message */}
                {status.message && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <p className="text-sm font-medium">{status.message}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg"
                  >
                    Отмена
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#009479] hover:bg-[#007A64] text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Vacancies;
