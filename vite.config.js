import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // 이 줄도 꼭 필요합니다!

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
