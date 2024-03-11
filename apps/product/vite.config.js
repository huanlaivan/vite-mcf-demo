import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      filename: "product-mfe-entry.js",
      name: "product-mfe",
      shared: ["react", "react-dom", "zustand"],
      exposes: {
        "./App": "./src/App.jsx",
      },
      remotes: {
        "cart-mfe": "http://localhost:3002/cart-mfe/assets/cart-mfe-entry.js",
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
    port: process.env.VITE_PRODUCT_MFE_PORT || 3001,
  },
  preview: {
    port: process.env.VITE_PRODUCT_MFE_PORT || 3001,
  },
  base: "/product-mfe/",
});
