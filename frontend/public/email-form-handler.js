// Global Email Form Handler
// Detecta y maneja automáticamente todos los formularios marcados con data-email-form="true"

(function() {
  'use strict';

  // Configuración
  const API_URL = process.env.REACT_APP_BACKEND_URL || '';
  const EMAIL_ENDPOINT = `${API_URL}/api/send-email`;

  // Función para sanitizar inputs
  function sanitizeInput(value) {
    if (typeof value !== 'string') return value;
    return value.replace(/[<>'"&]/g, '');
  }

  // Función para recoger datos del formulario dinámicamente
  function collectFormData(form) {
    const formData = {};
    const formName = form.getAttribute('data-form-name') || form.getAttribute('name') || 'Formulario de contacto';
    
    // Recoger todos los inputs, textareas y selects
    const elements = form.querySelectorAll('input, textarea, select');
    
    elements.forEach(element => {
      const name = element.name || element.id;
      const value = element.value;
      
      // Solo agregar campos con nombre y valor
      if (name && value && value.trim() !== '') {
        // Ignorar campos de password y archivos por seguridad
        if (element.type !== 'password' && element.type !== 'file') {
          formData[name] = sanitizeInput(value);
        }
      }
    });
    
    return {
      formName: formName,
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString(),
      fields: formData
    };
  }

  // Función para enviar email
  async function sendEmail(data, button) {
    try {
      const response = await fetch(EMAIL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.ok) {
        return { success: true, message: 'Email enviado exitosamente' };
      } else {
        throw new Error(result.error || 'Error al enviar email');
      }
    } catch (error) {
      console.error('Error al enviar email:', error);
      return { success: false, message: error.message };
    }
  }

  // Función para mostrar mensaje al usuario
  function showMessage(form, message, isSuccess) {
    // Buscar o crear contenedor de mensaje
    let messageDiv = form.querySelector('.email-form-message');
    
    if (!messageDiv) {
      messageDiv = document.createElement('div');
      messageDiv.className = 'email-form-message';
      messageDiv.style.cssText = `
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
      `;
      form.appendChild(messageDiv);
    }

    messageDiv.textContent = message;
    messageDiv.style.backgroundColor = isSuccess ? '#d4edda' : '#f8d7da';
    messageDiv.style.color = isSuccess ? '#155724' : '#721c24';
    messageDiv.style.border = isSuccess ? '1px solid #c3e6cb' : '1px solid #f5c6cb';
    
    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
      messageDiv.style.display = 'none';
    }, 5000);
  }

  // Función principal para manejar el submit
  function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
    
    // Desactivar botón mientras envía
    if (submitButton) {
      submitButton.disabled = true;
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Enviando...';
      
      // Restaurar botón después del envío
      setTimeout(() => {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }, 3000);
    }

    // Recoger datos del formulario
    const formData = collectFormData(form);

    // Validar que exista al menos un campo
    if (Object.keys(formData.fields).length === 0) {
      showMessage(form, 'Por favor, complete al menos un campo', false);
      return;
    }

    // Enviar email
    sendEmail(formData, submitButton).then(result => {
      if (result.success) {
        showMessage(form, '✅ Mensaje enviado exitosamente. Nos pondremos en contacto pronto.', true);
        // Limpiar formulario
        form.reset();
      } else {
        showMessage(form, `❌ Error: ${result.message}. Por favor, intente nuevamente.`, false);
      }
    });
  }

  // Inicializar cuando el DOM esté listo
  function init() {
    // Buscar todos los formularios marcados con data-email-form="true"
    const emailForms = document.querySelectorAll('form[data-email-form="true"]');
    
    if (emailForms.length === 0) {
      console.log('No se encontraron formularios con data-email-form="true"');
      return;
    }

    console.log(`📧 Inicializando ${emailForms.length} formulario(s) de email`);

    // Agregar event listener a cada formulario
    emailForms.forEach(form => {
      form.addEventListener('submit', handleFormSubmit);
      console.log(`✅ Formulario "${form.getAttribute('data-form-name') || 'sin nombre'}" configurado`);
    });
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-inicializar si hay cambios dinámicos en el DOM (para React)
  const observer = new MutationObserver(() => {
    const emailForms = document.querySelectorAll('form[data-email-form="true"]:not([data-email-initialized])');
    if (emailForms.length > 0) {
      emailForms.forEach(form => {
        form.setAttribute('data-email-initialized', 'true');
        form.addEventListener('submit', handleFormSubmit);
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

})();
