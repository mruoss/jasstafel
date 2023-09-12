FROM abiosoft/caddy:2.7.4-alpine

WORKDIR /app

COPY ./dist/ /app/
COPY ./build/.well-known/ /app/.well-known/
COPY ./build/privacy-policy.md /app/privacy-policy.md

COPY build/caddy/Caddyfile /etc/Caddyfile
