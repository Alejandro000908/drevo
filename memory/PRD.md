# Proyecto: Sitio web de la escuela privada «Древо Познаний»

## Información de contacto real

**Escuela:** Частная школа Древо Познаний  
**Dirección:** г. Раменское, Красноармейская 105  
**Teléfono:** +7 (916) 122-21-12  
**Email:** Drevop@ya.ru; Smunin@ya.ru  
**Horario:** Понедельник - Пятница с 8:30 до 20:00  

**Redes sociales:**
- VK: https://vk.com/drevopoznaniy_ramenskoe
- Telegram: https://t.me/Drevopoznaniy_ramenskoe

## Paleta de colores (basada en el logo)

**Colores principales:**
- Turquesa principal: #009479 (del logo)
- Gris oscuro: #414141 (texto y fondos)
- Turquesa hover: #007A64
- Turquesa claro: #00BFA5 (acentos)

## Equipo docente actualizado

1. **Полина Фёдоровна** - Matemática
2. **Михаил Иванович** - Física
3. **Mr. Alejandro** - Informática e Inglés
4. **Елена Анатольевна** - Escuela Primaria
5. **Наталия Владимировна** - Escuela Primaria

*Nota: Todos los maestros tienen placeholders en lugar de fotos reales y campo de "lema de vida" vacío*

## Opiniones reales implementadas

Se integraron 5 testimonios reales de padres:
1. Madre de estudiante de 1er año (mención a Mr. Alejandro y Elena Anatolevna)
2. Madre con hijo en 3er año
3. Madre cuyo hijo preparó ОГЭ exitosamente
4. Madre de egresado (entró a universidad en presupuesto)
5. Madre con hijo en 8vo grado (llegó en 6to)

## Cambios implementados (27 enero 2025)

### 1. Actualización completa de colores
- ✅ Todos los componentes actualizados con paleta turquesa #009479
- ✅ Logo actualizado con árbol estilizado en turquesa
- ✅ Gradientes actualizados (gris oscuro + turquesa)
- ✅ Botones, badges, iconos con nuevo esquema de colores

### 2. Datos de contacto reales
- ✅ Teléfono: +7 (916) 122-21-12
- ✅ Emails: Drevop@ya.ru y Smunin@ya.ru
- ✅ Dirección: Раменское, Красноармейская 105
- ✅ Redes sociales: VK y Telegram (eliminado Instagram)
- ✅ Horario de trabajo agregado

### 3. Sección de profesores actualizada
- ✅ Nuevos nombres de maestros reales
- ✅ Placeholders blancos en lugar de fotos
- ✅ Campo "lema de vida" agregado (vacío)
- ✅ Iconos de usuario turquesa para placeholders

### 4. Opiniones reales de padres
- ✅ 5 testimonios auténticos integrados
- ✅ Roles específicos (madre de estudiante X grado)
- ✅ Menciones a maestros reales (Mr. Alejandro, Elena Anatolevna)

## Arquitectura técnica

**Frontend:** React + Tailwind CSS + shadcn/ui  
**Backend:** FastAPI + Python (pendiente integración)  
**Base de datos:** MongoDB  
**Despliegue:** Docker + Supervisor

## Estado actual

✅ **Frontend completado** con datos reales y mock
- Todos los componentes con colores del logo turquesa
- Datos de contacto reales integrados
- Maestros con nombres reales y placeholders
- Opiniones auténticas de padres
- Mapa de Yandex integrado
- **Sección "Vida Escolar" con fotos reales de niños**
- **Sección "Instalaciones" con fotos del interior**
- **Logos de universidades de egresados**

✅ **Backend implementado**
- API REST con FastAPI
- Endpoint `/api/contact` (POST y GET)
- Integración con MongoDB para guardar contactos
- Validación de datos con Pydantic
- CORS configurado correctamente

⏳ **Pendiente:**
- Integración de servicio de email para notificaciones
- Testing end-to-end completo
- Panel de administración para revisar contactos

## API Endpoints

### POST /api/contact
Envía un formulario de contacto

**Request Body:**
```json
{
  "name": "string",
  "phone": "string",
  "email": "string (email válido)",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Спасибо! Мы свяжемся с вами в ближайшее время.",
  "contact_id": "uuid"
}
```

### GET /api/contact
Obtiene todos los contactos (endpoint de administración)

**Response:**
```json
[
  {
    "id": "uuid",
    "name": "string",
    "phone": "string",
    "email": "string",
    "message": "string",
    "created_at": "ISO datetime",
    "status": "pending|contacted|closed"
  }
]
```

## Próximos pasos

1. ✅ ~~Desarrollo de backend (API endpoints, MongoDB models)~~
2. Integración de servicio de email (Resend, SendGrid, o Gmail SMTP)
3. Testing completo con testing_agent_v3
4. Panel de administración para gestionar contactos
5. Optimización SEO y performance

---

**Última actualización:** 31 marzo 2026
