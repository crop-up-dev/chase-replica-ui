import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "node:path";

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/chase-replica-ui/",
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackRouter({ 
      target: "react", 
      autoCodeSplitting: true, 
      routesDirectory: "./src/routes", 
      generatedRouteTree: "./src/routeTree.gen.ts" 
    }),
    react(),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
