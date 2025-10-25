import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { 
    allowedHosts: ['arduinotest.onrender.com']
  },
  
  // == THÊM ĐOẠN NÀY VÀO ==
  build: {
    sourcemap: false
  }
  // ========================
})
