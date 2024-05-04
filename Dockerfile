FROM nginx:latest

COPY ./dist/index.html /usr/share/nginx/html
COPY ./dist/assets /usr/share/nginx/html/assets
COPY default /etc/nginx/sites-available/default

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]