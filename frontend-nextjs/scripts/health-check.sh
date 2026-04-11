#!/bin/bash

# ============================================
# Health check script for deployed site
# ============================================

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Configuration
SITE_URL="${SITE_URL:-https://drevoznanii.ru}"

echo -e "${YELLOW}🏥 Running health checks on $SITE_URL${NC}\n"

ERRORS=0

# Check 1: Homepage
echo -n "Checking homepage... "
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL/")
if [ "$HTTP_CODE" -eq 200 ]; then
  echo -e "${GREEN}✓${NC} HTTP $HTTP_CODE"
else
  echo -e "${RED}✗${NC} HTTP $HTTP_CODE (expected 200)"
  ERRORS=$((ERRORS+1))
fi

# Check 2: Sitemap
echo -n "Checking sitemap.xml... "
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL/sitemap.xml")
if [ "$HTTP_CODE" -eq 200 ]; then
  echo -e "${GREEN}✓${NC} HTTP $HTTP_CODE"
else
  echo -e "${RED}✗${NC} HTTP $HTTP_CODE (expected 200)"
  ERRORS=$((ERRORS+1))
fi

# Check 3: Robots.txt
echo -n "Checking robots.txt... "
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL/robots.txt")
if [ "$HTTP_CODE" -eq 200 ]; then
  echo -e "${GREEN}✓${NC} HTTP $HTTP_CODE"
else
  echo -e "${RED}✗${NC} HTTP $HTTP_CODE (expected 200)"
  ERRORS=$((ERRORS+1))
fi

# Check 4: Key pages
PAGES=("admision" "contacto" "programas" "vacantes" "vida-escolar")
for page in "${PAGES[@]}"; do
  echo -n "Checking /$page/... "
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL/$page/")
  if [ "$HTTP_CODE" -eq 200 ]; then
    echo -e "${GREEN}✓${NC} HTTP $HTTP_CODE"
  else
    echo -e "${RED}✗${NC} HTTP $HTTP_CODE (expected 200)"
    ERRORS=$((ERRORS+1))
  fi
done

# Check 5: SSL Certificate (if HTTPS)
if [[ "$SITE_URL" == https* ]]; then
  echo -n "Checking SSL certificate... "
  SSL_EXPIRE=$(echo | openssl s_client -servername "${SITE_URL#https://}" -connect "${SITE_URL#https://}:443" 2>/dev/null | openssl x509 -noout -enddate 2>/dev/null | cut -d= -f2)
  if [ -n "$SSL_EXPIRE" ]; then
    echo -e "${GREEN}✓${NC} Valid until $SSL_EXPIRE"
  else
    echo -e "${YELLOW}⚠${NC} Could not verify SSL"
  fi
fi

# Check 6: Backend API (if configured)
if [ -n "$API_URL" ]; then
  echo -n "Checking backend API... "
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$API_URL/health" 2>/dev/null || echo "000")
  if [ "$HTTP_CODE" -eq 200 ]; then
    echo -e "${GREEN}✓${NC} HTTP $HTTP_CODE"
  else
    echo -e "${YELLOW}⚠${NC} HTTP $HTTP_CODE (backend may be down)"
  fi
fi

# Summary
echo ""
echo "========================================"
if [ $ERRORS -eq 0 ]; then
  echo -e "${GREEN}✅ All health checks passed!${NC}"
  echo "========================================"
  exit 0
else
  echo -e "${RED}❌ $ERRORS check(s) failed${NC}"
  echo "========================================"
  exit 1
fi
