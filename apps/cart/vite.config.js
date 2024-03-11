import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cart-mfe",
      filename: "cart-mfe-entry.js",
      shared: ["react", "react-dom", "zustand"],
      exposes: {
        "./App": "./src/App.jsx",
        "./store": "./src/store",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    port: process.env.VITE_CART_MFE_PORT || 3002,
  },
  preview: {
    port: process.env.VITE_CART_MFE_PORT || 3002,
  },
  base: "/cart-mfe/",
});
