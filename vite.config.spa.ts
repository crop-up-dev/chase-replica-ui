import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "node:path";

function getBasePath() {
  if (process.env.VITE_BASE_PATH) return process.env.VITE_BASE_PATH;

  const repository = process.env.GITHUB_REPOSITORY;
  const owner = process.env.GITHUB_REPOSITORY_OWNER;
  const repo = repository?.split("/")[1];

  if (owner && repo && repo !== `${owner}.github.io`) {
    return `/${repo}/`;
  }

  return "/";
}

// Static SPA build for GitHub Pages. Does NOT use TanStack Start / SSR.
export default defineConfig({
  base: getBasePath(),
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackRouter({ target: "react", autoCodeSplitting: true, routesDirectory: "./src/routes", generatedRouteTree: "./src/routeTree.gen.ts" }),
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
