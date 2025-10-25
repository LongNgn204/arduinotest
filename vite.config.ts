import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'arduino-learning-hub' with the name of your GitHub repository.
  base: '/arduinotest/', 
})
