import React, { useState, useEffect } from 'react';
import { X, User, Phone, Mail, Calendar, CheckCircle } from 'lucide-react';

const VisitModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    visitDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Пожалуйста, введите ваше имя';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, введите телефон';
    } else if (!/^\+?[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Неверный формат телефона';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
    }
    
    if (!formData.visitDate) {
      newErrors.visitDate = 'Пожалуйста, выберите дату';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/visit-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ fullName: '', phone: '', email: '', visitDate: '' });
        
        // Close modal after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Modal */}
      <div 
        className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Image */}
          <div className="relative h-64 md:h-full overflow-hidden">
            <img
              src="https://customer-assets.emergentagent.com/job_drevoznanie/artifacts/5fyuhaj5_5303056761474453987.jpg"
              alt="Classroom"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/40"></div>
            
            {/* Overlay Quote */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <p className="text-white text-xl md:text-2xl font-light italic leading-relaxed">
                "Дайте вашему ребенку возможность учиться с улыбкой"
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            {!isSuccess ? (
              <>
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#414141] dark:text-white mb-4 leading-tight">
                    Забронируйте визит в школу
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    Откройте для себя наши помещения, методы обучения и атмосферу лично
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Полное имя"
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-2 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#009479]/20 transition-all duration-300 ${
                        errors.fullName ? 'border-red-500' : 'border-gray-200 dark:border-gray-700 focus:border-[#009479]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Телефон"
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-2 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#009479]/20 transition-all duration-300 ${
                        errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-700 focus:border-[#009479]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-2 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#009479]/20 transition-all duration-300 ${
                        errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700 focus:border-[#009479]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Visit Date */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <input
                      type="date"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-2 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-[#009479]/20 transition-all duration-300 ${
                        errors.visitDate ? 'border-red-500' : 'border-gray-200 dark:border-gray-700 focus:border-[#009479]'
                      }`}
                    />
                    {errors.visitDate && (
                      <p className="mt-1 text-sm text-red-500">{errors.visitDate}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#009479] to-[#00BFA5] hover:from-[#007A64] hover:to-[#009479] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Отправка...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        <span>Забронировать визит</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* Success Message */
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-[#009479] to-[#00BFA5] rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#414141] dark:text-white mb-4">
                  Спасибо!
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Мы свяжемся с вами в ближайшее время для подтверждения вашего визита.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.95);
          }
          to { 
            opacity: 1; 
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Custom date input styling */
        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.3s;
        }

        input[type="date"]::-webkit-calendar-picker-indicator:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default VisitModal;
