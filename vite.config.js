import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0', // Bind to all network interfaces
        port: process.env.PORT || 4173, // Use the PORT environment variable or default to 4173
    },
});