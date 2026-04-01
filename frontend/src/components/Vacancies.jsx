import React, { useState } from 'react';
import { Briefcase, GraduationCap, Clock, MapPin, Send, Upload, CheckCircle, AlertCircle, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

// Mock job vacancies data
const JOB_VACANCIES = [
  {
    id: 1,
    title: "Учитель английского языка",
    type: "Полная занятость",
    location: "г. Раменское",
    description: "Приглашаем опытного преподавателя английского языка для работы с учениками 5-11 классов. Подготовка к ОГЭ и ЕГЭ.",
    requirements: [
      "Высшее педагогическое образование",
      "Опыт работы от 2 лет",
      "Владение современными методиками преподавания",
      "Уровень английского C1/C2"
    ],
    responsibilities: [
      "Проведение уроков английского языка",
      "Подготовка учеников к экзаменам",
      "Разработка учебных материалов"
    ]
  },
  {
    id: 2,
    title: "Учитель математики",
    type: "Полная занятость",
    location: "г. Раменское",
    description: "Ищем талантливого преподавателя математики для работы со школьниками всех возрастов. Акцент на подготовку к ОГЭ и ЕГЭ.",
    requirements: [
      "Высшее образование (математика/физика)",
      "Опыт подготовки к ОГЭ/ЕГЭ",
      "Умение объяснять сложные темы простым языком",
      "Любовь к детям и своей работе"
    ],
    responsibilities: [
      "Преподавание математики",
      "Подготовка к олимпиадам и экзаменам",
      "Индивидуальная работа с учениками"
    ]
  },
  {
    id: 3,
    title: "Учитель начальных классов",
    type: "Полная занятость",
    location: "г. Раменское",
    description: "Приглашаем творческого и энергичного преподавателя для работы с учениками младших классов.",
    requirements: [
      "Высшее педагогическое образование",
      "Опыт работы с детьми 7-10 лет",
      "Терпение и креативность",
      "Знание современных образовательных методик"
    ],
    responsibilities: [
      "Преподавание базовых предметов",
      "Развитие творческих способностей детей",
      "Работа с родителями"
    ]
  },
  {
    id: 4,
    title: "Учитель русского языка и литературы",
    type: "Полная/частичная занятость",
    location: "г. Раменское",
    description: "Требуется преподаватель русского языка и литературы с опытом подготовки к государственным экзаменам.",
    requirements: [
      "Филологическое образование",
      "Опыт работы от 3 лет",
      "Глубокое знание предмета",
      "Умение заинтересовать учеников"
    ],
    responsibilities: [
      "Проведение уроков русского языка и литературы",
      "Подготовка к ОГЭ и ЕГЭ",
      "Развитие грамотности и любви к чтению"
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
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {JOB_VACANCIES.map((job, index) => (
            <div
              key={job.id}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              style={{ 
                animation: 'fadeInUp 0.6s ease-out',
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Job Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#414141] mb-2 group-hover:text-[#009479] transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs bg-[#009479]/10 text-[#009479] px-3 py-1 rounded-full font-medium">
                      <Clock className="w-3 h-3" />
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#009479]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#009479]" />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {job.description}
              </p>

              {/* Requirements */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-[#414141] mb-2">Требования:</h4>
                <ul className="space-y-1">
                  {job.requirements.slice(0, 3).map((req, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="text-[#009479] mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => setSelectedJob(job)}
                className="w-full bg-[#009479] hover:bg-[#007A64] text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Откликнуться
                <Send className="w-4 h-4" />
              </button>
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
