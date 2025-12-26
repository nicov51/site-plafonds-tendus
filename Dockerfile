# Étape 1 - Base commune
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Étape 2 - Installation des dépendances (optimisée)
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev && \
    npm cache clean --force

# Étape 3 - Build (avec purge des devDependencies)
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build && \
    rm -rf node_modules && \
    npm ci --omit=dev --prefer-offline

# Étape 4 - Runner final (ultra-léger)
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup -g 1001 -S nodejs && \
    adduser -S -u 1001 -G nodejs nextjs && \
    chown -R nextjs:nodejs /app

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
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