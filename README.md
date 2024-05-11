# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Run project Prod
> branch feature/docker


O primeiro passo que é necessário se atentar é adicionar ao arquivo **.env** a variavel de ambiente com o ip publico da VM com o loadbalancer das apis do backend.

```
/.env

URL_LB=10.0.0.152
```

Na raiz do projeto, há um arquivo bash que contém os comandos necessários para criar todo o ambiente na nuvem exigido para a execução do projeto.

```
bash run
```
Este comando é tudo o que é necessário para iniciar o projeto. Se ocorrer algum erro, siga os próximos comandos.<br>

### Instalação do node
Os comandos de instalação do Node estão presentes no arquivo **install_node** basta executá-lo:
```
bash install_node
```
Se houver algum erro na instalação, consulte as versões do Node e instale através do repositório.
> https://github.com/nodesource/distributions#:~:text=js%20Unofficial%20Builds-,Installation%20Instructions,-Node.js

### Compilação do projeto React
Na pasta raiz do projeto, execute os comandos com o Node instalado:
```
npm i
npm run build
```

Certifique-se de que a pasta **dist** foi criada com todos os arquivos necessários para executar o projeto com o Nginx: **index.html** e a pasta **assets**.<br>

### Instalação do Docker e Docker Compose
Os comandos de instalação do Docker e Docker Compose estão presentes no arquivo **install_docker** basta executá-lo:
```
bash install_docker
```
Se ocorrer algum erro, consulte as formas de instalação no site.
> https://docs.docker.com/compose/install/linux/
###
> https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04

**Executar container nginx do frontend**<br>
```docker compose up -d```