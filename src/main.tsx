import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { worker } from "./mocks/browser.ts";

declare global {
  interface Window {
    PLAYWRIGHT_TEST_MODE?: boolean;
  }
}

const queryClient = new QueryClient({});

if (import.meta.env.DEV && window?.PLAYWRIGHT_TEST_MODE) {
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
