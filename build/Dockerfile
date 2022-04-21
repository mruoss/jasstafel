# syntax = docker/dockerfile:experimental

FROM node:18.0.0@sha256:b1530be089891889829a0f07319532206a9756f015c479e4a5cd6cd194c8711a as build

WORKDIR /app/builder

ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NODE_ENV=production

RUN --mount=type=bind,source=.,target=/app/builder,rw touch /tmp/asdf && yarn install --immutable --immutable-cache && yarn build --output-path=/dist/

FROM abiosoft/caddy@sha256:6f90597617b16108805ca30e4a7a1daaacf0a763110514560b9ca2dc3c3f4ca0

WORKDIR /app

COPY --from=build /dist/ /app/
COPY ./src/assets/ /app/
COPY ./build/.well-known/ /app/.well-known/
COPY ./build/privacy-policy.md /app/privacy-policy.md

COPY build/caddy/Caddyfile /etc/Caddyfile
