FROM nginx:latest

COPY ./dist/index.html /usr/share/nginx/html
COPY ./dist/assets /usr/share/nginx/html/assets
COPY ./templates /etc/nginx/templates
ENV URL_LB=10.0.0.214

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]