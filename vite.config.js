import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/configuration-tests.js',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/components/Banner.jsx', 'src/components/Collapse.jsx'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
})
