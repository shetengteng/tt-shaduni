import { defineConfig } from "vite";
import path from "path";
import uni from "@dcloudio/vite-plugin-uni";

export default defineConfig({
  base: './',
  plugins: [uni()],
  resolve: {
    alias: {
      "tt-ui": path.resolve(__dirname, "../packages"),
      "@": path.resolve(__dirname, "src"),
    },
  },
});
