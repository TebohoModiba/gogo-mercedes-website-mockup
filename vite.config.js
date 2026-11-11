
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/gogo-mercedes-website-mockup/',
  plugins: [react(), tailwindcss()],
})
