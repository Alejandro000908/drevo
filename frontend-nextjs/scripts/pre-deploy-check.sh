#!/bin/bash

# ============================================
# Pre-deployment verification script
# ============================================

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}🔍 Running pre-deployment checks...${NC}\n"

ERRORS=0

# Check 1: Node.js version
echo -n "Checking Node.js version... "
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -ge 18 ]; then
  echo -e "${GREEN}✓${NC} Node.js $NODE_VERSION"
else
  echo -e "${RED}✗${NC} Node.js version must be 18+"
  ERRORS=$((ERRORS+1))
fi

# Check 2: Dependencies installed
echo -n "Checking dependencies... "
if [ -d "node_modules" ] && [ -f "yarn.lock" ]; then
  echo -e "${GREEN}✓${NC} Dependencies installed"
else
  echo -e "${RED}✗${NC} Run 'yarn install' first"
  ERRORS=$((ERRORS+1))
fi

# Check 3: Environment variables
echo -n "Checking environment variables... "
if [ -f ".env.production" ] || [ -f ".env.local" ]; then
  echo -e "${GREEN}✓${NC} Environment files found"
else
  echo -e "${YELLOW}⚠${NC} No .env files found (using defaults)"
fi

# Check 4: Build test
echo -n "Testing build process... "
if yarn build > /dev/null 2>&1; then
  echo -e "${GREEN}✓${NC} Build successful"
else
  echo -e "${RED}✗${NC} Build failed - check errors above"
  ERRORS=$((ERRORS+1))
fi

# Check 5: Export test
echo -n "Testing export process... "
if [ -d "out" ]; then
  FILE_COUNT=$(find out -type f | wc -l)
  if [ "$FILE_COUNT" -gt 0 ]; then
    echo -e "${GREEN}✓${NC} Export successful ($FILE_COUNT files)"
  else
    echo -e "${RED}✗${NC} Export directory is empty"
    ERRORS=$((ERRORS+1))
  fi
else
  echo -e "${RED}✗${NC} Export directory not found"
  ERRORS=$((ERRORS+1))
fi

# Check 6: Critical files
echo -n "Checking critical files... "
MISSING_FILES=()
for file in "out/index.html" "out/sitemap.xml" "out/robots.txt"; do
  if [ ! -f "$file" ]; then
    MISSING_FILES+=("$file")
  fi
done

if [ ${#MISSING_FILES[@]} -eq 0 ]; then
  echo -e "${GREEN}✓${NC} All critical files present"
else
  echo -e "${RED}✗${NC} Missing: ${MISSING_FILES[*]}"
  ERRORS=$((ERRORS+1))
fi

# Summary
echo ""
echo "========================================"
if [ $ERRORS -eq 0 ]; then
  echo -e "${GREEN}✅ All checks passed - Ready to deploy!${NC}"
  echo "========================================"
  exit 0
else
  echo -e "${RED}❌ $ERRORS check(s) failed${NC}"
  echo "========================================"
  echo "Fix the errors above before deploying"
  exit 1
fi
