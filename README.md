# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# To run 
docker build -t teste_nginx .<br>
docker run -d -p 90:80 --name front1 teste_nginx

<!-- docker run -d -p 80:80 --name teste --env FRONT_API_HOST=127.0.0.1 teste_nginx -->

