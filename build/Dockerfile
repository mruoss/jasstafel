# syntax = docker/dockerfile:experimental

FROM node:8.11.1-alpine as build

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

RUN --mount=type=bind,source=.,target=/app/builder,rw rm -rf node_modules && yarn install && NODE_ENV=production yarn build --output-path=/dist/

FROM abiosoft/caddy

WORKDIR /app

COPY --from=build /dist/ /app/
COPY ./public/ /app/

COPY build/caddy/Caddyfile /etc/Caddyfile
