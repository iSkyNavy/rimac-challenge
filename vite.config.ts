import { resolve } from 'path';
import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr({ include: "**/**.svg", svgrOptions: { svgo: true } })],
  resolve: {
    //current only work for scss files
    alias: {
      "~styles": resolve(__dirname, "src/utils/styles/"),
    }
  }
})
