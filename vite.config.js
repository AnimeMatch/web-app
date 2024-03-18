import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import config from "./src/config";

// DESENVOLVIMENTO
const VITE_HOST = "127.0.0.1"
// PRODUÇÃO
// const VITE_HOST = "10.0.0.214"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: `http://${VITE_HOST}:8081`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/apo': {
        target: `http://${VITE_HOST}:8080`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apo/, ''),
      }
    },
    cors: true,
  },
  plugins: [react()],
});