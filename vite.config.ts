import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/gh-turn-tracker/",
  plugins: [vue()],
  root: 'src',
  cacheDir: '../.vite/cache',
  build: {
    outDir: '../.vite/dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  }
})
