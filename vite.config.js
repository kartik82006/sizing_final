import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server:{
    proxy:{
      '/type': {
        target: 'http://localhost:3000',
      },
    }
  },
  plugins: [react()],
  server: {
    host: true,          // Allows access from LAN (0.0.0.0)
    port: 5173,          // Optional: set your port
    strictPort: true,    // If port is taken, throw error instead of changing it
    watch: {
      usePolling: true,  // Optional: improves hot reload on some systems
    },
  },
})

