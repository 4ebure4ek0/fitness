import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      src: "/src",
      components: "/src/components",
      store: "/src/store",
      pages: "/src/pages",
      img:"/public/img",
    }
  }
})
