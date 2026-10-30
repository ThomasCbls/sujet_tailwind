import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const root = resolve(import.meta.dirname, 'sujet')

export default defineConfig({
  root,
  plugins: [tailwindcss()],
  build: {
    outDir: resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        menu: resolve(root, 'menu.html'),
        contact: resolve(root, 'contact.html'),
      },
    },
  },
})
