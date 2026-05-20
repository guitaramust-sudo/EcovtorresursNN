import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0", // Слушаем все интерфейсы (включая VPN)
    port: 5173, // Твой порт
    strictPort: true, // Не менять порт, если занят
  },
});
