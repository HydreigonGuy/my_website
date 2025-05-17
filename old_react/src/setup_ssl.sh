#!/bin/sh

certbot --nginx --agree-tos --no-eff-email -m adrien.thibault@epitech.eu -d autone.app -d www.autone.app

# cat /tmp/ssl.conf > /etc/nginx/conf.d/default.conf

nginx -t && nginx -s reload

while [ 1 ]
do
  sleep 20d
  certbot certonly --force-renew -d example.com
done
