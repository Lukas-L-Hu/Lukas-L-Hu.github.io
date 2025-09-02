import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lukas-hu/',
  optimizeDeps: {
    include: ['framer-motion'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
