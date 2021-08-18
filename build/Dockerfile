# syntax = docker/dockerfile:experimental

FROM node:16.6.2-slim as build

WORKDIR /app/builder

RUN --mount=type=bind,source=.,target=/app/builder,rw NODE_ENV=production yarn build --output-path=/dist/

FROM abiosoft/caddy

WORKDIR /app

COPY --from=build /dist/ /app/
COPY ./src/assets/ /app/
COPY ./build/.well-known/ /app/.well-known/
COPY ./build/privacy-policy.md /app/privacy-policy.md

COPY build/caddy/Caddyfile /etc/Caddyfile
