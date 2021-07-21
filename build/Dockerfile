# syntax = docker/dockerfile:experimental

FROM node:16.5.0-slim as build

WORKDIR /app/builder

RUN --mount=type=bind,source=.,target=/app/builder,rw NODE_ENV=production yarn run webpack --mode production --env presets=serviceworker --output-path=/dist/

FROM abiosoft/caddy

WORKDIR /app

COPY --from=build /dist/ /app/
COPY ./src/assets/ /app/
COPY ./build/.well-known/ /app/.well-known/

COPY build/caddy/Caddyfile /etc/Caddyfile
