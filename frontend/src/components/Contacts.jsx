import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { SCHOOL_INFO } from '../data/mock';

const API_URL = process.env.REACT_APP_BACKEND_URL;

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
    if (!formData.name || !formData.phone || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Пожалуйста, заполните все поля'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Usar el nuevo sistema de email
      const emailData = {
        formName: 'Formulario de contacto - Древо Познаний',
        pageUrl: window.location.href,
        submittedAt: new Date().toISOString(),
        fields: {
          'Имя': formData.name,
          'Телефон': formData.phone,
          'Сообщение': formData.message
        }
      };

      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();
      
      if (response.ok && result.ok) {
        setStatus({
          type: 'success',
          message: 'Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.'
        });
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: result.detail || result.error || 'Произошла ошибка. Попробуйте позже.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        type: 'error',
        message: 'Произошла ошибка при отправке. Попробуйте позже.'
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
                <div className="flex gap-3">
                  {/* VK */}
                  <a
                    href={SCHOOL_INFO.social.vk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 hover:bg-[#0077FF] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="VK"
                  >
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.18 14.53h-1.48c-.63 0-.82-.5-1.96-1.64-.98-.98-1.42-1.12-1.67-1.12-.34 0-.44.1-.44.58v1.5c0 .4-.13.65-1.18.65-1.75 0-3.69-.97-5.04-2.77-2.03-2.61-2.59-4.57-2.59-4.97 0-.25.1-.48.58-.48h1.48c.43 0 .6.2.76.65.85 2.35 2.28 4.41 2.87 4.41.22 0 .32-.1.32-.66v-2.56c-.07-1.13-.66-1.22-.66-1.62 0-.2.17-.4.43-.4h2.33c.36 0 .5.2.5.62v3.46c0 .36.16.5.27.5.22 0 .4-.14.82-.56 1.26-1.42 2.17-3.61 2.17-3.61.12-.25.32-.48.76-.48h1.48c.53 0 .65.27.53.62-.18.85-1.85 3.51-1.85 3.51-.19.3-.26.44 0 .77.19.25.82.8 1.24 1.29.77.88 1.36 1.62 1.52 2.13.15.52-.08.78-.61.78z"/>
                    </svg>
                  </a>
                  
                  {/* Telegram */}
                  <a
                    href={SCHOOL_INFO.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 hover:bg-[#0088cc] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Telegram"
                  >
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href={SCHOOL_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100" style={{ height: '400px' }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=38.262168%2C55.568273&z=17&l=map&pt=38.262168,55.568273,pm2rdm"
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen={true}
                style={{ position: 'relative', border: 'none' }}
                title="Yandex Map - School location"
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
              Записаться на пробный день
            </h3>

            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              data-email-form="true"
              data-form-name="Formulario de contacto - Древо Познаний"
            >
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
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Сообщение *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=""
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
