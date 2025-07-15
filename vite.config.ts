import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
  base: '/portfolio/', // GitHub Pages repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}) 
