# ÉTAPE 1 : Installation des dépendances
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Étape 2 - Installation des dépendances (optimisée)
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev && \
    npm cache clean --force

# INSTALLE TOUT (dev + prod) pour le build
RUN npm ci && npm cache clean --force

# ÉTAPE 2 : Build de l'application
FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copie les dépendances + tout le code
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build && \
    rm -rf node_modules && \
    npm ci --omit=dev --prefer-offline

# Build Next.js
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ÉTAPE 3 : Prépare les deps de production uniquement
FROM node:20-alpine AS prod-deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./

# MAINTENANT on installe que la prod
RUN npm ci --omit=dev && npm cache clean --force

# ÉTAPE 4 : Image de production
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1  # Désactive la télémétrie

RUN addgroup -g 1001 -S nodejs && \
    adduser -S -u 1001 -G nodejs nextjs && \
    chown -R nextjs:nodejs /app

# Copie les node_modules de production
COPY --from=prod-deps /app/node_modules ./node_modules

# Copie les fichiers nécessaires depuis builder
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Monitoring
HEALTHCHECK --interval=30s --timeout=5s \
  CMD wget -q -O- http://localhost:3000/api/health || exit 1

CMD ["node", "server.js"]