import { defineConfig } from "vite";

import vue from '@vitejs/plugins-vue'
import qiankun from 'vitejs-plugin-qiankun'

const useDevMode = true 

export default defineConfig({
  lintOnSave: false,
  plugins: [
    vue(),
    qiankun("vue3App", {
      useDevMode,
    })
  ],
  base: "/",
  server: {
    port:3002
  }
})


