# syntax = docker/dockerfile:experimental

FROM node:17.7.1@sha256:7ea83bd8925a184a789b5ef2a4c0e674d66e31830ed18744d3e130e83d99c272 as build

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
