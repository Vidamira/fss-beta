import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      cachedChecks: false,
    },
  },
  // Define Environment Variables
  define: {
    'process.env.REACT_APP_BASE_URL': process.env.VITE_APP_BASE_URL,
    
  },
});
