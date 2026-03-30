import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { SCHOOL_INFO, submitContactForm } from '../data/mock';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Пожалуйста, заполните все поля'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setStatus({
          type: 'success',
          message: result.message
        });
        setFormData({ name: '', phone: '', email: '', message: '' });
      }
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
    <section id="contacts" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#009479]/10 text-[#009479] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            СВЯЖИТЕСЬ С НАМИ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#414141] mb-4">
            Контакты
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Запишитесь на бесплатное пробное занятие или задайте интересующие вопросы
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-[#414141] to-[#009479] rounded-2xl p-8 text-white mb-6">
              <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#009479] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-gray-200">{SCHOOL_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#009479] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <a
                      href={`tel:${SCHOOL_INFO.phone}`}
                      className="text-gray-200 hover:text-[#009479] transition-colors"
                    >
                      {SCHOOL_INFO.phone}
                    </a>
                    <br />
                    <a
                      href={`https://wa.me/${SCHOOL_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#009479] hover:underline mt-1 inline-block"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#009479] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href={`mailto:${SCHOOL_INFO.email}`}
                      className="text-gray-200 hover:text-[#009479] transition-colors block"
                    >
                      {SCHOOL_INFO.email}
                    </a>
                    <a
                      href={`mailto:${SCHOOL_INFO.emailSecondary}`}
                      className="text-gray-200 hover:text-[#009479] transition-colors block"
                    >
                      {SCHOOL_INFO.emailSecondary}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-2">График работы</h4>
                <p className="text-gray-200 text-sm mb-4">{SCHOOL_INFO.schedule}</p>
                <h4 className="font-semibold mb-4">Мы в социальных сетях</h4>
                <div className="flex gap-4">
                  <a
                    href={SCHOOL_INFO.social.vk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 hover:bg-[#009479] rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <span className="text-lg font-bold">VK</span>
                  </a>
                  <a
                    href={SCHOOL_INFO.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 hover:bg-[#009479] rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <span className="text-lg font-bold">TG</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src={SCHOOL_INFO.mapEmbedUrl}
                width="100%"
                height="300"
                frameBorder="0"
                allowFullScreen
                className="w-full"
                title="School location map"
              ></iframe>
            </div>
            
            {/* Link to full map */}
            <div className="mt-4 text-center">
              <a
                href={SCHOOL_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#009479] hover:text-[#007A64] font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Открыть карту в новой вкладке
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#414141] mb-6">
              Записаться на пробное занятие
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Сообщение *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Расскажите, по какому предмету нужна подготовка и в какой класс идет ребенок..."
                  rows={5}
                  className="w-full resize-none"
                  required
                />
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

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#009479] hover:bg-[#007A64] text-white font-semibold py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Отправка...'
                ) : (
                  <>
                    Отправить заявку
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
