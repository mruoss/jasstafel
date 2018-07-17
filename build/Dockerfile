ARG CI_BUILD_REF=latest
FROM michael_ruoss/wedding/jt_build:${CI_BUILD_REF} AS build_image

FROM abiosoft/caddy

WORKDIR /app

COPY --from=build_image /app/builder/dist/ /app/
COPY --from=build_image /app/builder/public/ /app/

RUN sed -i -e "s#{version}#$(date +%s)#g" "/app/jasstafel.appcache"

COPY build/caddy/Caddyfile /etc/Caddyfile
