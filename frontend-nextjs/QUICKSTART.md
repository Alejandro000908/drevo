# 🚀 Quick Start - Deployment to Selectel

## ⚡ 5-Minute Setup

### 1. Server Setup (One-time)

```bash
# Connect to Selectel server
ssh root@your-server.selectel.ru

# Install Nginx
apt update && apt install nginx -y

# Create deploy user
adduser --disabled-password deploy
usermod -aG sudo deploy
su - deploy

# Generate SSH key for GitHub
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/github_deploy_key -N ""
cat ~/.ssh/github_deploy_key.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# Show private key (copy this for GitHub)
cat ~/.ssh/github_deploy_key

# Exit deploy user
exit

# Create deployment directory
mkdir -p /var/www/drevoznanii
chown -R deploy:www-data /var/www/drevoznanii
chmod -R 775 /var/www/drevoznanii

# Configure Nginx
nano /etc/nginx/sites-available/drevoznanii
```

Paste the content from `nginx.conf`, then:

```bash
ln -s /etc/nginx/sites-available/drevoznanii /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx

# Allow deploy user to reload nginx
echo "deploy ALL=(ALL) NOPASSWD: /usr/sbin/nginx, /bin/systemctl reload nginx" | sudo tee /etc/sudoers.d/deploy
```

### 2. GitHub Secrets (One-time)

Go to: **GitHub Repo → Settings → Secrets and variables → Actions → New repository secret**

| Secret Name | Value | Where to get it |
|------------|-------|-----------------|
| `SERVER_HOST` | `123.45.67.89` | Your Selectel server IP |
| `SERVER_USER` | `deploy` | Deploy user created above |
| `SERVER_PORT` | `22` | SSH port (default 22) |
| `SSH_PRIVATE_KEY` | `-----BEGIN OPENSSH...` | Output of `cat ~/.ssh/github_deploy_key` |
| `DEPLOY_PATH` | `/var/www/drevoznanii` | Deployment directory |
| `NEXT_PUBLIC_API_URL` | `https://api.drevoznanii.ru` | Your backend API URL |

### 3. Deploy! 🚀

```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

✅ **Done!** Check GitHub Actions tab for deployment progress.

---

## 🔧 Manual Deploy (Alternative)

```bash
cd frontend-nextjs

# Set environment variables
export SERVER_HOST="your-server.selectel.ru"
export SERVER_USER="deploy"
export SERVER_PORT="22"
export DEPLOY_PATH="/var/www/drevoznanii"

# Deploy
./scripts/deploy-selectel.sh
```

---

## 🔍 Verify Deployment

```bash
# Check site
SITE_URL=https://drevoznanii.ru ./scripts/health-check.sh

# Or manually
curl https://drevoznanii.ru
```

---

## 🆘 Rollback

```bash
export SERVER_HOST="your-server.selectel.ru"
export SERVER_USER="deploy"
export DEPLOY_PATH="/var/www/drevoznanii"

./scripts/rollback-selectel.sh
```

---

## 📋 Pre-Deployment Checklist

- [ ] Server configured (Nginx, deploy user, SSH key)
- [ ] GitHub Secrets configured (6 secrets)
- [ ] DNS pointing to Selectel server
- [ ] SSL certificate installed (optional, can do later)
- [ ] Backend API running (if using forms)
- [ ] `.env.production` configured with correct API URL

---

## 🔗 Links

- [Full Documentation](./DEPLOYMENT.md)
- [Nginx Config Example](./nginx.conf)
- [GitHub Actions Workflow](./.github/workflows/deploy.yml)
