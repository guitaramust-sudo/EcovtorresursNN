import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Теперь пути в билд-файлах будут начинаться с ./ и искать файлы рядом
});
