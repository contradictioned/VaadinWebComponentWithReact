import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/vaadin-wc': {
        target: 'http://localhost:8080',
        rewrite: (path) => path.replace("/vaadin-wc", "")
      }
    }
  },
  plugins: [react()],
})
