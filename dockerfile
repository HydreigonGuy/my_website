
FROM nginx:latest

COPY src /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY conf/nginx.conf /etc/nginx/
COPY conf/server.conf /etc/nginx/conf.d/

EXPOSE 80
