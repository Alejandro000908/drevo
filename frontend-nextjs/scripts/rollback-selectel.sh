#!/bin/bash

# ============================================
# Rollback script for Selectel hosting
# ============================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Configuration
SERVER_HOST="${SERVER_HOST:-your-server.selectel.ru}"
SERVER_USER="${SERVER_USER:-root}"
SERVER_PORT="${SERVER_PORT:-22}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/drevoznanii}"

echo -e "${YELLOW}🔙 Starting rollback process...${NC}"

# List available backups
echo -e "${YELLOW}📋 Available backups:${NC}"
BACKUPS=$(ssh -p "$SERVER_PORT" "$SERVER_USER@$SERVER_HOST" \
  "ls -dt ${DEPLOY_PATH}_backup_* 2>/dev/null || echo 'No backups found'")

if [ "$BACKUPS" == "No backups found" ]; then
  echo -e "${RED}❌ No backups found${NC}"
  exit 1
fi

echo "$BACKUPS"
echo ""

# Get latest backup
LATEST_BACKUP=$(echo "$BACKUPS" | head -n 1)
echo -e "${YELLOW}Latest backup: $LATEST_BACKUP${NC}"
echo ""

read -p "Do you want to rollback to this backup? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo -e "${YELLOW}Rollback cancelled${NC}"
  exit 0
fi

# Perform rollback
echo -e "${YELLOW}🔄 Restoring backup...${NC}"
ssh -p "$SERVER_PORT" "$SERVER_USER@$SERVER_HOST" \
  "rm -rf $DEPLOY_PATH && \
   cp -r $LATEST_BACKUP $DEPLOY_PATH && \
   chown -R www-data:www-data $DEPLOY_PATH"

echo -e "${GREEN}✅ Backup restored${NC}"

# Reload Nginx
echo -e "${YELLOW}🔄 Reloading Nginx...${NC}"
ssh -p "$SERVER_PORT" "$SERVER_USER@$SERVER_HOST" \
  "sudo nginx -t && sudo systemctl reload nginx"

echo -e "${GREEN}"
echo "🎉 ====================================="
echo "🎉 ROLLBACK SUCCESSFUL"
echo "🎉 ====================================="
echo "📦 Restored from: $LATEST_BACKUP"
echo "⏰ Time: $(date)"
echo "🎉 =====================================${NC}"
