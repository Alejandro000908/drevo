// Configuración central de la API.
// En desarrollo usa REACT_APP_BACKEND_URL del .env.
// En producción (drevopoznaniy.ru) usa ruta relativa (''),
// de modo que el navegador pegue contra el mismo dominio:
//   fetch(`${API_URL}/api/send-email`)  ->  /api/send-email
export const API_URL = process.env.REACT_APP_BACKEND_URL || '';

export const SEND_EMAIL_ENDPOINT = `${API_URL}/api/send-email`;
