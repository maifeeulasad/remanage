import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import ViteVisualizer from "rollup-plugin-visualizer";

// https://stackoverflow.com/a/15802301
const headCommitHash = require('child_process')
    .execSync('git rev-parse HEAD')
    .toString();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __HEAD_COMMIT_HASH__: JSON.stringify(headCommitHash),
  },
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "./build",
    rollupOptions: {
      output:{
          manualChunks(id) {
              if (id.includes('node_modules') && !id.endsWith('.css')) {
                  return id.toString().split('node_modules/')[1].split('/')[0].toString();
              }
          }
      }
    }
  },
  base: "./",
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
    // last one is the visualizer
    ViteVisualizer({
      filename: "./build/report-rollup-plugin-visualizer.html",
      brotliSize: true,
    }),
  ],
});