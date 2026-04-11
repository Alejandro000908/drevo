#!/bin/bash

# ============================================
# Initialize Selectel server for deployment
# Run this script ON THE SERVER
# ============================================

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}"
echo "============================================"
echo "  Selectel Server Initialization Script"
echo "============================================"
echo -e "${NC}"

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
  echo -e "${RED}Please run as root: sudo ./init-server.sh${NC}"
  exit 1
fi

# Configuration
DEPLOY_USER="deploy"
DEPLOY_PATH="/var/www/drevoznanii"
SITE_NAME="drevoznanii"

echo -e "${YELLOW}📋 Configuration:${NC}"
echo "  Deploy user: $DEPLOY_USER"
echo "  Deploy path: $DEPLOY_PATH"
echo "  Site name: $SITE_NAME"
echo ""

read -p "Continue with this configuration? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Aborted"
  exit 0
fi

# Step 1: Update system
echo -e "${YELLOW}📦 Updating system...${NC}"
apt update
apt upgrade -y

# Step 2: Install required packages
echo -e "${YELLOW}📦 Installing required packages...${NC}"
apt install -y nginx certbot python3-certbot-nginx curl rsync

# Step 3: Create deploy user
echo -e "${YELLOW}👤 Creating deploy user...${NC}"
if id "$DEPLOY_USER" &>/dev/null; then
  echo "  User $DEPLOY_USER already exists"
else
  adduser --disabled-password --gecos "" $DEPLOY_USER
  usermod -aG sudo $DEPLOY_USER
  echo -e "${GREEN}✓${NC} User created"
fi

# Step 4: Generate SSH key
echo -e "${YELLOW}🔑 Generating SSH key for GitHub...${NC}"
sudo -u $DEPLOY_USER bash -c "
  if [ ! -f ~/.ssh/github_deploy_key ]; then
    ssh-keygen -t ed25519 -C 'github-deploy' -f ~/.ssh/github_deploy_key -N ''
    cat ~/.ssh/github_deploy_key.pub >> ~/.ssh/authorized_keys
    chmod 600 ~/.ssh/authorized_keys
    chmod 700 ~/.ssh
    echo '✓ SSH key generated'
  else
    echo '  SSH key already exists'
  fi
"

# Step 5: Create deployment directory
echo -e "${YELLOW}📁 Creating deployment directory...${NC}"
mkdir -p $DEPLOY_PATH
chown -R $DEPLOY_USER:www-data $DEPLOY_PATH
chmod -R 775 $DEPLOY_PATH
echo -e "${GREEN}✓${NC} Directory created: $DEPLOY_PATH"

# Step 6: Configure sudoers for nginx
echo -e "${YELLOW}🔧 Configuring sudo permissions...${NC}"
echo "$DEPLOY_USER ALL=(ALL) NOPASSWD: /usr/sbin/nginx, /bin/systemctl reload nginx, /bin/systemctl restart nginx" > /etc/sudoers.d/$DEPLOY_USER
chmod 440 /etc/sudoers.d/$DEPLOY_USER
echo -e "${GREEN}✓${NC} Sudo configured"

# Step 7: Configure firewall
echo -e "${YELLOW}🔥 Configuring firewall...${NC}"
if command -v ufw &> /dev/null; then
  ufw --force enable
  ufw allow 'Nginx Full'
  ufw allow OpenSSH
  echo -e "${GREEN}✓${NC} Firewall configured"
else
  echo -e "${YELLOW}⚠${NC} UFW not installed, skipping firewall config"
fi

# Step 8: Start Nginx
echo -e "${YELLOW}🚀 Starting Nginx...${NC}"
systemctl enable nginx
systemctl start nginx
echo -e "${GREEN}✓${NC} Nginx started"

# Step 9: Show SSH private key for GitHub
echo ""
echo -e "${BLUE}============================================${NC}"
echo -e "${GREEN}✅ Server initialization complete!${NC}"
echo -e "${BLUE}============================================${NC}"
echo ""
echo -e "${YELLOW}📝 NEXT STEPS:${NC}"
echo ""
echo "1. Copy this SSH PRIVATE KEY for GitHub Secrets:"
echo -e "${BLUE}----------------------------------------${NC}"
sudo -u $DEPLOY_USER cat /home/$DEPLOY_USER/.ssh/github_deploy_key
echo -e "${BLUE}----------------------------------------${NC}"
echo ""
echo "2. Add this key to GitHub Secrets as SSH_PRIVATE_KEY"
echo ""
echo "3. Configure Nginx for your domain:"
echo "   - Edit: /etc/nginx/sites-available/$SITE_NAME"
echo "   - Copy content from nginx.conf (in the project)"
echo "   - Enable: ln -s /etc/nginx/sites-available/$SITE_NAME /etc/nginx/sites-enabled/"
echo "   - Test: nginx -t"
echo "   - Reload: systemctl reload nginx"
echo ""
echo "4. Configure other GitHub Secrets:"
echo "   - SERVER_HOST: $(hostname -I | awk '{print $1}')"
echo "   - SERVER_USER: $DEPLOY_USER"
echo "   - SERVER_PORT: 22"
echo "   - DEPLOY_PATH: $DEPLOY_PATH"
echo "   - NEXT_PUBLIC_API_URL: (your backend API URL)"
echo ""
echo "5. (Optional) Set up SSL:"
echo "   certbot --nginx -d yourdomain.com -d www.yourdomain.com"
echo ""
echo -e "${GREEN}🎉 Ready for deployment!${NC}"
echo ""
