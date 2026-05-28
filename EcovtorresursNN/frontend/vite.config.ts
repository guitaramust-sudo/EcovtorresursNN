import { defineConfig } from "vite";

export default defineConfig({
  base: "./", // <-- ДОБАВЬТЕ ЭТУ СТРОКУ! Относительные пути для GitHub Pages
  server: {
    host: "0.0.0.0", // Слушаем все интерфейсы (включая VPN)
    port: 5173, // Твой порт
    strictPort: true, // Не менять порт, если занят
  },
});
