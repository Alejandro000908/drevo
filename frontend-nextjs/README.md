# Древо Познаний - Next.js SEO-Optimized Site

## 🎯 Arquitectura Final

**Stack:**
- Next.js 14.2.18 (App Router)
- Static Site Generation (SSG) con `output: 'export'`
- Tailwind CSS + Framer Motion
- next-image-export-optimizer (optimización de imágenes para export estático)

**Backend:**
- FastAPI (sin cambios) - `/app/backend/`
- Formularios y emails vía API calls

## 📁 Estructura del Proyecto

```
/app/frontend-nextjs/
├── app/                          # App Router (Next.js 14)
│   ├── layout.tsx                # Root layout con SEO global
│   ├── page.tsx                  # Homepage
│   ├── programas/page.tsx        # Programas
│   ├── vacantes/page.tsx         # Vacantes
│   ├── documentos/page.tsx       # Documentos
│   ├── preparacion-preescolar/   # Preparación preescolar
│   ├── vida-escolar/page.tsx     # Vida escolar
│   ├── admision/page.tsx         # Admisión
│   └── globals.css               # Estilos globales
├── components/                   # Componentes React
│   ├── ui/                       # shadcn/ui components
│   ├── Header.tsx                # ✅ Migrado
│   ├── Footer.tsx                # ✅ Migrado
│   ├── Hero.tsx                  # ✅ Migrado
│   ├── Stats.tsx                 # ✅ Migrado
│   └── ...                       # TODO: Migrar resto
├── lib/
│   ├── config.ts                 # ✅ Configuración del sitio
│   ├── schema.ts                 # ✅ Schema.org markup
│   └── utils.ts                  # Utilidades
├── public/
│   ├── sitemap.xml               # ✅ SEO
│   ├── robots.txt                # ✅ SEO
│   ├── images/                   # Imágenes optimizadas
│   └── favicon.ico
├── next.config.js                # ✅ Configuración Next.js
├── tailwind.config.js            # ✅ Configuración Tailwind
└── package.json                  # ✅ Dependencias

/app/backend/                     # Backend FastAPI (SIN CAMBIOS)
└── ...
```

## 🚀 Desarrollo Local

```bash
cd /app/frontend-nextjs

# Instalar dependencias
yarn install

# Desarrollo (puerto 3001)
yarn dev

# Build para producción
yarn build

# Export estático
yarn export
```

## 📦 Build y Export

El comando `yarn export` ejecuta:
1. `next build` - Genera build optimizado
2. `next-image-export-optimizer` - Optimiza imágenes

**Resultado:** Carpeta `/out` con archivos estáticos listos para Selectel

## 🌐 Deployment en Selectel

**📖 Ver guía completa:** [`DEPLOYMENT.md`](./DEPLOYMENT.md)

### Deploy Automático (Recomendado)

Cada push a `main` ejecuta deployment automático vía GitHub Actions:

```bash
git add .
git commit -m "Deploy changes"
git push origin main
```

**Requisitos:**
- Configurar GitHub Secrets (ver `DEPLOYMENT.md`)
- Servidor Selectel configurado con SSH

### Deploy Manual

```bash
cd /app/frontend-nextjs

# Configurar variables
export SERVER_HOST="your-server.selectel.ru"
export SERVER_USER="deploy"
export DEPLOY_PATH="/var/www/drevoznanii"

# Ejecutar deploy
./scripts/deploy-selectel.sh
```

### Rollback

```bash
./scripts/rollback-selectel.sh
```

### Paso 3: Configurar Nginx

```nginx
# /etc/nginx/sites-available/drevoznanii.ru
server {
    listen 80;
    listen [::]:80;
    server_name drevoznanii.ru www.drevoznanii.ru;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name drevoznanii.ru www.drevoznanii.ru;

    # SSL Certificates
    ssl_certificate /etc/letsencrypt/live/drevoznanii.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/drevoznanii.ru/privkey.pem;

    # Frontend (archivos estáticos Next.js)
    root /var/www/drevoznanii;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json image/svg+xml;

    # Cache static assets
    location /_next/static/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location /images/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # API Backend (FastAPI)
    location /api/ {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Frontend routing (Next.js trailing slashes)
    location / {
        try_files $uri $uri.html $uri/index.html /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
```

### Paso 4: SSL con Let's Encrypt

```bash
sudo certbot --nginx -d drevoznanii.ru -d www.drevoznanii.ru
```

### Paso 5: Backend FastAPI

El backend FastAPI sigue corriendo igual:
```bash
# En servidor Selectel
cd /app/backend
source venv/bin/activate
uvicorn server:app --host 0.0.0.0 --port 8001 --workers 4
```

O con systemd service:
```ini
# /etc/systemd/system/drevoznanii-api.service
[Unit]
Description=Drevoznanii FastAPI Backend
After=network.target

[Service]
User=www-data
WorkingDirectory=/app/backend
Environment="PATH=/app/backend/venv/bin"
ExecStart=/app/backend/venv/bin/uvicorn server:app --host 0.0.0.0 --port 8001 --workers 4
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable drevoznanii-api
sudo systemctl start drevoznanii-api
```

## 📊 SEO Checklist

### ✅ Implementado:
- [x] HTML estático generado (SSG)
- [x] Meta tags únicos por página
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Canonical tags
- [x] Schema.org markup (EducationalOrganization)
- [x] sitemap.xml
- [x] robots.txt
- [x] Geo-targeting para Rusia
- [x] Yandex Webmaster meta tags preparados

### ⏳ Pendiente (Post-deployment):
- [ ] Verificar sitio en Google Search Console
- [ ] Verificar sitio en Yandex Webmaster
- [ ] Configurar Yandex Metrica
- [ ] Agregar Google Analytics (opcional)
- [ ] Configurar redirects 301 si hay URLs antiguas
- [ ] Generar y subir `og-image.jpg` (1200x630px)

## 🔍 Testing SEO Local

```bash
# Lighthouse
npx lighthouse http://localhost:3001 --view

# HTML validation
npx html-validator-cli http://localhost:3001

# Sitemap validation
curl http://localhost:3001/sitemap.xml
```

## 📝 Tareas de Migración Pendientes

### Componentes a migrar:
1. ✅ Header
2. ✅ Hero
3. ✅ Stats
4. ⏳ Programs (stub creado)
5. ⏳ SchoolNews (stub creado)
6. ⏳ TeachersCarousel (stub creado)
7. ⏳ FAQ (stub creado)
8. ⏳ Contacts (stub creado, integrar con API FastAPI)
9. ⏳ Footer (básico creado)

### Páginas a crear:
1. ✅ `/` (Homepage)
2. ⏳ `/programas`
3. ⏳ `/vacantes`
4. ⏳ `/documentos`
5. ⏳ `/preparacion-preescolar`
6. ⏳ `/vida-escolar`
7. ⏳ `/admision`

### Datos a migrar:
- ⏳ `/app/frontend/src/data/mock.js` → Convertir a TypeScript
- ⏳ Copiar todas las imágenes a `/public/images/`
- ⏳ Optimizar imágenes con `next-image-export-optimizer`

## 🎨 Manteniendo el Diseño Actual

**Cambios mínimos necesarios:**
1. `import Image from 'next/image'` → `import ExportedImage from 'next-image-export-optimizer'`
2. `<Link to="/path">` (React Router) → `<Link href="/path">` (Next.js)
3. `useLocation()` → `usePathname()` (Next.js)
4. Agregar `'use client'` en componentes con interactividad

**Diseño mantiene:**
- ✅ Colores exactos (#009479, #00BFA5, #414141)
- ✅ Tipografía (Inter)
- ✅ Animaciones (Framer Motion)
- ✅ Tailwind classes iguales
- ✅ Estructura visual idéntica

## 📚 Recursos

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [next-image-export-optimizer](https://github.com/Niels-IO/next-image-export-optimizer)
- [Yandex Webmaster](https://webmaster.yandex.ru/)
- [Google Search Console](https://search.google.com/search-console)
