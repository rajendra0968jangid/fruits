import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv';
config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  server: {  host: '0.0.0.0',port: 5173 },
  define: {
    'process.env': process.env
  }
})