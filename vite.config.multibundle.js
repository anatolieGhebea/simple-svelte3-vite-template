import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        module1: 'src_multi/module1/main.js', // entry point for module 1
        module2: 'src_multi/module2/main.js'  // entry point for module 2
        // Add more modules here as needed
      },
      output: {
        dir: './dist',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  server: {
    host: '0.0.0.0'
  }
});  