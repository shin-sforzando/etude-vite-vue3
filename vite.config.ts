import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/etude-vite-vue3/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [vue()],
})
