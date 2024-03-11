import * as path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  return {
    plugins: [
      react(),
      federation({
        name: "root-app",
        filename: "root-app-entry.js",
        shared: ["react", "react-dom", "react-router-dom", "zustand"],
        remotes: {
          "product-mfe":
            "http://localhost:3001/product-mfe/assets/product-mfe-entry.js",
          "cart-mfe": "http://localhost:3002/cart-mfe/assets/cart-mfe-entry.js",
          "about-mfe":
            "http://localhost:4001/about-mfe/assets/about-mfe-entry.js",
        },
      }),
    ],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
    server: {
      port: process.env.VITE_ROOT_APP_PORT || 3000,
    },
    preview: {
      port: process.env.VITE_ROOT_APP_PORT || 3000,
    },
    base: "/",
  };
});
