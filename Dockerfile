# syntax=docker/dockerfile:1

# --- Builder stage ---
FROM node:20-bookworm-slim AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy manifests first for better caching
COPY package.json pnpm-lock.yaml .npmrc* ./

# Install deps (full, including devDependencies)
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Generate Prisma client and build Nest (avoid migrate at build time)
RUN pnpm prisma generate && pnpm nest build

# --- Runtime stage ---
FROM node:20-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only what we need
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env* ./

# Add entrypoint script
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000

# Default command runs migrations then starts the server
ENTRYPOINT ["/entrypoint.sh"]
CMD ["node", "dist/main.js"]
