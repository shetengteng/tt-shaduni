import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            ['view', 'text', 'image', 'scroll-view', 'swiper', 'swiper-item'].includes(tag),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      'tt-ui': path.resolve(__dirname, 'packages'),
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['packages/**/__tests__/*.test.ts'],
    setupFiles: ['./test-setup.ts'],
  },
})
