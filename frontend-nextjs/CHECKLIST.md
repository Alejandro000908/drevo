# 📋 Deployment Checklist

## Pre-Deployment

### Server Setup
- [ ] Selectel server accessible via SSH
- [ ] Nginx installed and running
- [ ] Deploy user created (`deploy`)
- [ ] SSH key generated for GitHub Actions
- [ ] Deployment directory created (`/var/www/drevoznanii`)
- [ ] Correct permissions set (`deploy:www-data`, 775)
- [ ] Nginx configuration file created and enabled
- [ ] Nginx tested (`nginx -t`) and reloaded
- [ ] Firewall configured (ports 80, 443, SSH)
- [ ] Sudoers configured for nginx reload

### GitHub Configuration
- [ ] Repository pushed to GitHub
- [ ] GitHub Actions workflow exists (`.github/workflows/deploy.yml`)
- [ ] GitHub Secret: `SERVER_HOST` configured
- [ ] GitHub Secret: `SERVER_USER` configured
- [ ] GitHub Secret: `SERVER_PORT` configured
- [ ] GitHub Secret: `SSH_PRIVATE_KEY` configured (full private key)
- [ ] GitHub Secret: `DEPLOY_PATH` configured
- [ ] GitHub Secret: `NEXT_PUBLIC_API_URL` configured

### Project Configuration
- [ ] `.env.production` exists with correct values
- [ ] All dependencies installed (`yarn install`)
- [ ] Build succeeds locally (`yarn build`)
- [ ] Export succeeds locally (`yarn export`)
- [ ] All pages render correctly
- [ ] Forms connect to backend API
- [ ] sitemap.xml exists in `/out`
- [ ] robots.txt exists in `/out`

## Deployment

### Initial Deploy
- [ ] Push to `main` branch triggers workflow
- [ ] GitHub Actions workflow runs successfully
- [ ] No build errors in Actions logs
- [ ] Files synced to server (check Actions output)
- [ ] Deployment verified (index.html exists)
- [ ] Nginx reloaded successfully

### Verification
- [ ] Homepage loads (`https://drevoznanii.ru`)
- [ ] All pages accessible (admision, contacto, programas, etc.)
- [ ] sitemap.xml accessible (`/sitemap.xml`)
- [ ] robots.txt accessible (`/robots.txt`)
- [ ] Forms submit correctly
- [ ] Backend API responding
- [ ] Images load correctly
- [ ] No 404 errors in browser console
- [ ] No JavaScript errors in console
- [ ] Mobile responsive design works
- [ ] Page load speed acceptable

## Post-Deployment

### SEO & Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Yandex Webmaster
- [ ] Configure Yandex Metrica (optional)
- [ ] Configure Google Analytics (optional)
- [ ] Verify all meta tags
- [ ] Check Open Graph preview
- [ ] Verify canonical URLs

### SSL (if not done during setup)
- [ ] Install Let's Encrypt certificate (`certbot`)
- [ ] Configure HTTPS in Nginx
- [ ] Set up HTTP → HTTPS redirect
- [ ] Verify SSL certificate validity
- [ ] Test SSL rating (SSL Labs)

### Monitoring
- [ ] Set up uptime monitoring (optional)
- [ ] Configure error notifications
- [ ] Set up log rotation
- [ ] Backup strategy defined
- [ ] Document rollback procedure

### Performance
- [ ] Run Lighthouse audit
- [ ] Verify Gzip compression active
- [ ] Check cache headers
- [ ] Optimize images if needed
- [ ] Test page load speed

## Maintenance

### Regular Tasks
- [ ] Monitor disk space on server
- [ ] Review Nginx access logs
- [ ] Review Nginx error logs
- [ ] Check SSL certificate expiry (if using Let's Encrypt)
- [ ] Test rollback procedure quarterly
- [ ] Clean old backups (keep last 5)
- [ ] Update dependencies monthly

### Emergency Procedures
- [ ] Rollback script tested and working
- [ ] Backup restoration tested
- [ ] Contact information for hosting support documented
- [ ] Incident response plan documented

---

## Quick Commands Reference

```bash
# Deploy
git push origin main

# Manual deploy
./scripts/deploy-selectel.sh

# Rollback
./scripts/rollback-selectel.sh

# Health check
SITE_URL=https://drevoznanii.ru ./scripts/health-check.sh

# Pre-deploy check
./scripts/pre-deploy-check.sh

# Server SSH
ssh deploy@your-server.selectel.ru

# Check Nginx status
sudo systemctl status nginx

# Reload Nginx
sudo systemctl reload nginx

# View logs
tail -f /var/log/nginx/drevoznanii_error.log
tail -f /var/log/nginx/drevoznanii_access.log
```

---

**Last Updated:** $(date +%Y-%m-%d)
