import { defineConfig } from "vite";
import path from "path";
import uni from "@dcloudio/vite-plugin-uni";

export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      "tt-ui": path.resolve(__dirname, "../packages"),
    },
  },
});
