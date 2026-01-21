import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // <-- Esto arregla los paths para GitHub Pages
  base: mode === "development" ? "/" : "/PortfolioTemplate/", // <--- reemplaza con el nombre exacto de tu repo

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    // Descomenta la siguiente línea solo si quieres usar componentTagger en dev
    // mode === 'development' && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
