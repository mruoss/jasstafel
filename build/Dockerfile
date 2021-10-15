# syntax = docker/dockerfile:experimental

FROM node:16.11.1-slim@sha256:a49f003fbc2439e20601ed466a2cbc80699f238b56bb78ccb934bb3d92a23d53 as build

WORKDIR /app/builder

RUN --mount=type=bind,source=.,target=/app/builder,rw NODE_ENV=production yarn build --output-path=/dist/

FROM abiosoft/caddy@sha256:6f90597617b16108805ca30e4a7a1daaacf0a763110514560b9ca2dc3c3f4ca0

WORKDIR /app

COPY --from=build /dist/ /app/
COPY ./src/assets/ /app/
COPY ./build/.well-known/ /app/.well-known/
COPY ./build/privacy-policy.md /app/privacy-policy.md

COPY build/caddy/Caddyfile /etc/Caddyfile
