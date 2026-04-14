import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pkgRoot = resolve(__dirname, '../packages')

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'es2020',
    lib: {
      entry: {
        index: resolve(pkgRoot, 'index.ts'),
        'cloud-emas/index': resolve(pkgRoot, 'cloud-emas/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', '@dcloudio/uni-app'],
      output: [
        {
          format: 'es',
          dir: resolve(__dirname, '../dist/es'),
          preserveModules: true,
          preserveModulesRoot: resolve(pkgRoot),
          entryFileNames: '[name].mjs',
        },
        {
          format: 'cjs',
          dir: resolve(__dirname, '../dist/lib'),
          preserveModules: true,
          preserveModulesRoot: resolve(pkgRoot),
          entryFileNames: '[name].cjs',
          exports: 'named',
        },
      ],
    },
    cssCodeSplit: true,
    minify: false,
    emptyOutDir: false,
  },
  resolve: {
    alias: {
      'tt-ui': pkgRoot,
    },
  },
})
