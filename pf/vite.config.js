import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts:
      ['saif-portfolio-luge.onrender.com'],
  },
})
