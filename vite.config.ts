import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/Engineering/" : "/",
  // ...your plugins etc.
  plugins: [react(), tailwindcss()],
}));
