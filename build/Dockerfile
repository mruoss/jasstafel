# syntax = docker/dockerfile:experimental

FROM node:16.10.0-slim@sha256:283d85e5a64183046abad478f5f98428720c1b30a72cc11d0cd1cedc1cb53493 as build

WORKDIR /app/builder

RUN --mount=type=bind,source=.,target=/app/builder,rw NODE_ENV=production yarn build --output-path=/dist/

FROM abiosoft/caddy@sha256:6f90597617b16108805ca30e4a7a1daaacf0a763110514560b9ca2dc3c3f4ca0

WORKDIR /app

COPY --from=build /dist/ /app/
COPY ./src/assets/ /app/
COPY ./build/.well-known/ /app/.well-known/
COPY ./build/privacy-policy.md /app/privacy-policy.md

COPY build/caddy/Caddyfile /etc/Caddyfile
