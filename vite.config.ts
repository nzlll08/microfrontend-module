import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

/**
 * Vite configuration for a Micro‑Frontend remote application.
 *
 * This project exposes several React components that can be
 * consumed by a host application using Module Federation.
 */
export default defineConfig({
  plugins: [
    // React compiler using SWC for faster builds
    react(),

    // Module Federation configuration
    federation({
      // Unique name of the remote application
      name: "remote_app",

      // Entry file that the host application loads
      filename: "remoteEntry.js",

      // Components exposed to the host application
      exposes: {
        "./RecentTabs": "./src/components/RecentTabs/RecentTabs.tsx",
        "./SystemList": "./src/components/SystemList/SystemList.tsx",
      },

      // Shared dependencies to avoid duplication across micro‑frontends
      shared: ["react", "react-dom", "jotai"],
    }),
  ],

  build: {
    // Disable module preload for better compatibility with federation
    modulePreload: false,

    // Target modern browsers
    target: "esnext",

    // Keep code readable for demonstration purposes
    minify: false,

    // Bundle CSS together for easier integration
    cssCodeSplit: false,
  },

  server: {
    // Enable CORS so the host application can load the remote module
    cors: true,
  },
});
