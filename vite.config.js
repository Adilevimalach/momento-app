import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    historyApiFallback: true,
    allowedHosts: [
      '81c5-2a0d-6fc0-292f-1b00-7875-a7dc-250c-9e23.ngrok-free.app'
    ]
  }
});
