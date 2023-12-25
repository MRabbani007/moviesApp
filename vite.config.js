import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8000/",
  //       changeOrigin: true,
  //       secure: false,
  //       ws: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  plugins: [react()],
  base: "/moviesApp/",
});
