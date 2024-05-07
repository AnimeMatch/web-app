FROM nginx:latest

COPY ./dist/index.html /usr/share/nginx/html
COPY ./dist/assets /usr/share/nginx/html/assets
COPY ./templates /etc/nginx/templates
ENV URL_LB=34.235.166.76

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]