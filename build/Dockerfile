# syntax = docker/dockerfile:experimental

FROM node:17.6.0-slim@sha256:a39ca586a55aceb1f9152c1b02f9a329b4f65352c81b88cd634470a845f19c05 as build

WORKDIR /app/builder

RUN --mount=type=bind,source=.,target=/app/builder,rw NODE_OPTIONS=--openssl-legacy-provider NODE_ENV=production yarn build --output-path=/dist/

FROM abiosoft/caddy@sha256:6f90597617b16108805ca30e4a7a1daaacf0a763110514560b9ca2dc3c3f4ca0

WORKDIR /app

COPY --from=build /dist/ /app/
COPY ./src/assets/ /app/
COPY ./build/.well-known/ /app/.well-known/
COPY ./build/privacy-policy.md /app/privacy-policy.md

COPY build/caddy/Caddyfile /etc/Caddyfile
