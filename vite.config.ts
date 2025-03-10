import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/rpc': {
        target: 'http://143.215.130.235:8545', // Your insecure RPC server
        changeOrigin: true,
        secure: false, // Ignore self-signed SSL issues (if HTTPS is added later)
        // ws: true, // Enable WebSocket proxying if needed
        rewrite: (path) => path.replace(/^\/rpc/, ''),
      },
    },
  },
});
