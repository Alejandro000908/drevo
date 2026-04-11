#!/bin/bash

# ============================================
# Deploy script for Selectel hosting
# ============================================

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration (edit these values)
SERVER_HOST="${SERVER_HOST:-your-server.selectel.ru}"
SERVER_USER="${SERVER_USER:-root}"
SERVER_PORT="${SERVER_PORT:-22}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/drevoznanii}"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo -e "${YELLOW}🚀 Starting deployment process...${NC}"

# Step 1: Build and export
echo -e "${YELLOW}📦 Building Next.js project...${NC}"
cd "$PROJECT_DIR"

if [ ! -f "package.json" ]; then
  echo -e "${RED}❌ Error: Not in Next.js project directory${NC}"
  exit 1
fi

yarn install
yarn build
yarn export

if [ ! -d "out" ]; then
  echo -e "${RED}❌ Error: Export failed - /out directory not found${NC}"
  exit 1
fi

echo -e "${GREEN}✅ Build completed successfully${NC}"

# Step 2: Verify server connection
echo -e "${YELLOW}🔐 Testing server connection...${NC}"
if ! ssh -p "$SERVER_PORT" "$SERVER_USER@$SERVER_HOST" "echo 'Connection OK'" > /dev/null 2>&1; then
  echo -e "${RED}❌ Error: Cannot connect to server${NC}"
  echo -e "${YELLOW}Make sure SSH keys are configured or use: ssh-copy-id -p $SERVER_PORT $SERVER_USER@$SERVER_HOST${NC}"
  exit 1
fi

echo -e "${GREEN}✅ Server connection OK${NC}"

# Step 3: Create backup
echo -e "${YELLOW}💾 Creating backup...${NC}"
BACKUP_NAME="backup_$(date +%Y%m%d_%H%M%S)"
ssh -p "$SERVER_PORT" "$SERVER_USER@$SERVER_HOST" \
  "if [ -d $DEPLOY_PATH ]; then \
     cp -r $DEPLOY_PATH ${DEPLOY_PATH}_${BACKUP_NAME}; \
     echo 'Backup created: ${DEPLOY_PATH}_${BACKUP_NAME}'; \
   else \
     mkdir -p $DEPLOY_PATH; \
     echo 'Deploy directory created'; \
   fi"

echo -e "${GREEN}✅ Backup created${NC}"

# Step 4: Deploy files
echo -e "${YELLOW}📤 Uploading files to Selectel...${NC}"
rsync -avz --delete \
  -e "ssh -p $SERVER_PORT" \
  --progress \
  "$PROJECT_DIR/out/" \
  "$SERVER_USER@$SERVER_HOST:$DEPLOY_PATH/"

echo -e "${GREEN}✅ Files uploaded successfully${NC}"

# Step 5: Set correct permissions
echo -e "${YELLOW}🔧 Setting permissions...${NC}"
ssh -p "$SERVER_PORT" "$SERVER_USER@$SERVER_HOST" \
  "chown -R www-data:www-data $DEPLOY_PATH && \
   find $DEPLOY_PATH -type f -exec chmod 644 {} \; && \
   find $DEPLOY_PATH -type d -exec chmod 755 {} \;"

echo -e "${GREEN}✅ Permissions set${NC}"

# Step 6: Verify deployment
echo -e "${YELLOW}🔍 Verifying deployment...${NC}"
ssh -p "$SERVER_PORT" "$SERVER_USER@$SERVER_HOST" \
  "if [ -f $DEPLOY_PATH/index.html ]; then \
     echo 'Deployment verified: index.html found'; \
   else \
     echo 'ERROR: index.html not found'; \
     exit 1; \
   fi"

echo -e "${GREEN}✅ Deployment verified${NC}"

# Step 7: Reload Nginx
echo -e "${YELLOW}🔄 Reloading Nginx...${NC}"
if ssh -p "$SERVER_PORT" "$SERVER_USER@$SERVER_HOST" \
  "sudo nginx -t && sudo systemctl reload nginx" 2>/dev/null; then
  echo -e "${GREEN}✅ Nginx reloaded${NC}"
else
  echo -e "${YELLOW}⚠️  Could not reload Nginx (may require manual reload)${NC}"
fi

# Success message
echo -e "${GREEN}"
echo "🎉 ====================================="
echo "🎉 DEPLOYMENT SUCCESSFUL"
echo "🎉 ====================================="
echo "📦 Deployed to: $DEPLOY_PATH"
echo "🌐 Server: $SERVER_HOST"
echo "⏰ Time: $(date)"
echo "🔙 Backup: ${DEPLOY_PATH}_${BACKUP_NAME}"
echo "🎉 =====================================${NC}"
echo ""
echo -e "${YELLOW}📝 Next steps:${NC}"
echo "1. Visit your website to verify"
echo "2. To rollback: ./scripts/rollback-selectel.sh"
echo ""
