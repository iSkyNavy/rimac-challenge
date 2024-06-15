/// <reference types="vitest"/>

import { resolve } from 'path';
import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr({ include: "**/**.svg", svgrOptions: { svgo: true } })],
  resolve: {
    alias: {
      "~styles": resolve(__dirname, "src/utils/styles/"),
    }
  },
  test: {
    root: '.',
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    coverage: {
      provider: 'v8',
      exclude: [
        "node_modules",
        "src/utils/enums/*"
      ]
      //#endregion
    }
  },
})
