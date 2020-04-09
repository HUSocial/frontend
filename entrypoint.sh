#!/usr/bin/env bash
set -e

sed -ie "s|\$API|$API|g" /usr/share/nginx/html/assets/js/config.js

exec nginx -g "daemon off;"
