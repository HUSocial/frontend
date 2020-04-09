FROM nginx

ENV API=""
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

COPY src/      /usr/share/nginx/html/
COPY config.js /usr/share/nginx/html/assets/js/config.js
