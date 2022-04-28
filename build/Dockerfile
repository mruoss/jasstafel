# syntax = docker/dockerfile:experimental

FROM node:18.0.0@sha256:e5b7b349d517159246070bf14242027a9e220ffa8bd98a67ba1495d969c06c01 as build

WORKDIR /app/builder

ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NODE_ENV=production

RUN --mount=type=bind,source=.,target=/app/builder,rw touch /tmp/asdf && yarn install --immutable && yarn build:ci

FROM abiosoft/caddy@sha256:6f90597617b16108805ca30e4a7a1daaacf0a763110514560b9ca2dc3c3f4ca0

WORKDIR /app

COPY --from=build /dist/ /app/
COPY ./src/assets/ /app/
COPY ./build/.well-known/ /app/.well-known/
COPY ./build/privacy-policy.md /app/privacy-policy.md

COPY build/caddy/Caddyfile /etc/Caddyfile
