# Deployment Guide - Selectel Hosting

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Server Setup (Selectel)](#server-setup-selectel)
3. [GitHub Actions Deployment](#github-actions-deployment)
4. [Manual Deployment](#manual-deployment)
5. [Rollback](#rollback)
6. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Server Selectel con Ubuntu/Debian
- Nginx instalado
- Acceso SSH al servidor
- Repositorio GitHub del proyecto
- Node.js 18+ y Yarn instalados localmente (para deploy manual)

---

## Server Setup (Selectel)

### 1. Conectar al servidor

```bash
ssh root@your-server.selectel.ru
```

### 2. Instalar Nginx (si no está instalado)

```bash
apt update
apt install nginx -y
systemctl enable nginx
systemctl start nginx
```

### 3. Crear directorio de deployment

```bash
mkdir -p /var/www/drevoznanii
chown -R www-data:www-data /var/www/drevoznanii
```

### 4. Configurar Nginx

```bash
# Copiar configuración de ejemplo
nano /etc/nginx/sites-available/drevoznanii
```

Pegar el contenido de `nginx.conf` (incluido en el proyecto) y editar:
- `server_name` con tu dominio real
- `root` path si usas uno diferente

```bash
# Activar sitio
ln -s /etc/nginx/sites-available/drevoznanii /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

### 5. Configurar firewall

```bash
ufw allow 'Nginx Full'
ufw allow OpenSSH
ufw enable
```

### 6. (Opcional) Configurar SSL con Let's Encrypt

```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d drevoznanii.ru -d www.drevoznanii.ru
```

---

## GitHub Actions Deployment

### 1. Generar SSH Key para deploy

En tu **servidor Selectel**:

```bash
# Crear usuario específico para deploy (recomendado)
adduser --disabled-password deploy
usermod -aG sudo deploy

# Cambiar a usuario deploy
su - deploy

# Generar SSH key pair
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/github_deploy_key

# Agregar clave pública a authorized_keys
cat ~/.ssh/github_deploy_key.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# Mostrar clave privada (copiar para GitHub Secrets)
cat ~/.ssh/github_deploy_key
```

### 2. Configurar GitHub Secrets

Ve a tu repositorio en GitHub → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Crea los siguientes secrets:

| Secret Name | Valor | Ejemplo |
|------------|-------|---------|
| `SERVER_HOST` | IP o dominio del servidor | `123.45.67.89` o `server.selectel.ru` |
| `SERVER_USER` | Usuario SSH | `deploy` |
| `SERVER_PORT` | Puerto SSH | `22` |
| `SSH_PRIVATE_KEY` | Contenido completo de la clave privada | (todo el contenido de `~/.ssh/github_deploy_key`) |
| `DEPLOY_PATH` | Ruta de deployment en el servidor | `/var/www/drevoznanii` |
| `NEXT_PUBLIC_API_URL` | URL del backend API | `https://api.drevoznanii.ru` |

**Importante**: Para `SSH_PRIVATE_KEY`, copia TODO el contenido incluyendo:
```
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

### 3. Permisos para usuario deploy

En el **servidor**:

```bash
# Permitir al usuario deploy recargar nginx sin password
echo "deploy ALL=(ALL) NOPASSWD: /usr/sbin/nginx, /bin/systemctl reload nginx" | sudo tee /etc/sudoers.d/deploy

# Dar permisos sobre directorio de deployment
sudo chown -R deploy:www-data /var/www/drevoznanii
sudo chmod -R 775 /var/www/drevoznanii
```

### 4. Activar deployment automático

Una vez configurados los secrets, cada `git push` a la rama `main` activará automáticamente el deployment:

```bash
git add .
git commit -m "Deploy changes"
git push origin main
```

Verifica el progreso en GitHub → **Actions** tab

---

## Manual Deployment

### 1. Configurar variables de entorno localmente

Crea un archivo `.env.deploy` en la raíz del proyecto:

```bash
export SERVER_HOST="your-server.selectel.ru"
export SERVER_USER="deploy"
export SERVER_PORT="22"
export DEPLOY_PATH="/var/www/drevoznanii"
```

### 2. Cargar variables y ejecutar deploy

```bash
cd frontend-nextjs
source ../.env.deploy  # (si creaste el archivo)

# O define inline:
SERVER_HOST=your-server.selectel.ru \
SERVER_USER=deploy \
SERVER_PORT=22 \
DEPLOY_PATH=/var/www/drevoznanii \
./scripts/deploy-selectel.sh
```

### 3. Verificar deployment

Visita tu sitio web para confirmar que los cambios se aplicaron.

---

## Rollback

Si algo sale mal después de un deployment:

```bash
cd frontend-nextjs
source ../.env.deploy

# Ejecutar script de rollback
SERVER_HOST=your-server.selectel.ru \
SERVER_USER=deploy \
SERVER_PORT=22 \
DEPLOY_PATH=/var/www/drevoznanii \
./scripts/rollback-selectel.sh
```

El script:
1. Lista los backups disponibles
2. Restaura automáticamente el backup más reciente
3. Recarga Nginx

**Rollback manual desde el servidor:**

```bash
ssh deploy@your-server.selectel.ru
cd /var/www
rm -rf drevoznanii
cp -r drevoznanii_backup_YYYYMMDD_HHMMSS drevoznanii
sudo systemctl reload nginx
```

---

## Troubleshooting

### ❌ Build falla en GitHub Actions

**Solución:**
1. Verifica que `NEXT_PUBLIC_API_URL` esté configurado en GitHub Secrets
2. Revisa los logs del workflow en GitHub Actions
3. Prueba el build localmente: `cd frontend-nextjs && yarn build && yarn export`

### ❌ Cannot connect to server

**Solución:**
1. Verifica que la IP/hostname sea correcta en `SERVER_HOST`
2. Confirma que el puerto SSH sea correcto (`SERVER_PORT`)
3. Verifica que la clave SSH esté correctamente copiada en GitHub Secrets
4. Prueba conexión manual: `ssh -p 22 deploy@your-server.selectel.ru`

### ❌ Permission denied en deployment

**Solución:**
```bash
# En el servidor
sudo chown -R deploy:www-data /var/www/drevoznanii
sudo chmod -R 775 /var/www/drevoznanii
```

### ❌ Nginx no recarga

**Solución:**
```bash
# En el servidor
sudo nginx -t  # Verifica configuración
sudo systemctl status nginx
sudo systemctl reload nginx
```

### ❌ Sitio muestra 404 en rutas

**Solución:**
Verifica que la configuración de Nginx tenga:
```nginx
try_files $uri $uri/ $uri.html /index.html =404;
```

### ❌ Assets no se cargan (CSS/JS)

**Solución:**
1. Verifica permisos:
```bash
find /var/www/drevoznanii -type f -exec chmod 644 {} \;
find /var/www/drevoznanii -type d -exec chmod 755 {} \;
```
2. Verifica que Nginx esté sirviendo desde el directorio correcto

---

## File Structure

```
frontend-nextjs/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── scripts/
│   ├── deploy-selectel.sh      # Manual deploy script
│   └── rollback-selectel.sh    # Rollback script
├── nginx.conf                   # Nginx config example
└── DEPLOYMENT.md               # This file
```

---

## Quick Reference

| Action | Command |
|--------|---------|
| Deploy automático | `git push origin main` |
| Deploy manual | `./scripts/deploy-selectel.sh` |
| Rollback | `./scripts/rollback-selectel.sh` |
| Ver logs Nginx | `tail -f /var/log/nginx/drevoznanii_error.log` |
| Verificar Nginx config | `nginx -t` |
| Recargar Nginx | `sudo systemctl reload nginx` |

---

## Support

Si encuentras problemas:
1. Revisa los logs de GitHub Actions
2. Verifica logs de Nginx: `/var/log/nginx/drevoznanii_error.log`
3. Confirma permisos de archivos en el servidor
4. Verifica que todos los secrets de GitHub estén configurados correctamente
