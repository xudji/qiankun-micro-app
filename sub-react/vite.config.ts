import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

const useDevMode = true;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react(),
    qiankun("reactApp", {
      useDevMode,
    }),
  ],
  base: "/",
  server: {
    port: 3000,
    host: "localhost",
  },
});
