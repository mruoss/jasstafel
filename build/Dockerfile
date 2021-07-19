# syntax = docker/dockerfile:experimental

FROM node:16.5.0-alpine as build

RUN apk update && apk upgrade && apk add \
  build-base \
  alpine-sdk \
  autoconf \
  automake \
  git \
  nasm \
  libjpeg-turbo \
  libjpeg-turbo-dev \
  libpng \
  libpng-dev \
  libtool \
  libwebp \
  libwebp-dev \
  zlib \
  zlib-dev

WORKDIR /app/builder

RUN --mount=type=bind,source=.,target=/app/builder,rw NODE_ENV=production yarn build --output-path=/dist/

FROM abiosoft/caddy

WORKDIR /app

COPY --from=build /dist/ /app/
COPY ./src/assets/ /app/
COPY ./build/.well-known/ /app/.well-known/

COPY build/caddy/Caddyfile /etc/Caddyfile
