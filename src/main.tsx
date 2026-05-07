import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter, createMemoryHistory, createBrowserHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { AuthProvider } from "@/lib/auth";
import "./styles.css";

const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "") || "/";

const router = createRouter({
  routeTree,
  basepath: base === "/" ? undefined : base,
  defaultPreload: "intent",
  scrollRestoration: true,
  history: typeof window !== "undefined" ? createBrowserHistory() : createMemoryHistory(),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootEl = document.getElementById("root")!;
createRoot(rootEl).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);