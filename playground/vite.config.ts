import { defineConfig } from "vite";
import path from "path";
import uni from "@dcloudio/vite-plugin-uni";
import { cpSync, existsSync, mkdirSync } from "fs";

function copyPackagesToLocal() {
  const src = path.resolve(__dirname, "../packages");
  const dest = path.resolve(__dirname, "src/.tt-ui-packages");
  if (process.env.UNI_PLATFORM && process.env.UNI_PLATFORM !== "h5") {
    mkdirSync(dest, { recursive: true });
    cpSync(src, dest, {
      recursive: true,
      filter: (s) => !s.includes("__tests__") && !s.includes("node_modules"),
    });
    return dest;
  }
  return src;
}

const pkgPath = copyPackagesToLocal();

export default defineConfig({
  base: './',
  plugins: [uni()],
  resolve: {
    alias: {
      "tt-ui": pkgPath,
      "@": path.resolve(__dirname, "src"),
    },
  },
});
