# Este documento pode criar uma imagem node que realize o papel
# de executar "npm run build" sem que seja necessário instalar node na maquina 
# (ou caso não seja possivel instala-lo)

FROM node:latest as front-project
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=front-project /app/dist/index.html /usr/share/nginx/html
COPY --from=front-project /app/dist/assets /usr/share/nginx/html/assets
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]