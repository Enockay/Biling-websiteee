# syntax=docker/dockerfile:1

# ── Stage 1: build ──────────────────────────────────────────────────────────
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# ── Stage 2: serve with Nginx ────────────────────────────────────────────────
FROM nginx:1.27-alpine AS production

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/billing.conf

# Copy built static assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
