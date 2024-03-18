import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://10.0.0.214:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/apo': {
        target: 'http://10.0.0.214:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apo/, ''),
      }
    },
    cors: true,
  },
  plugins: [react()],
});