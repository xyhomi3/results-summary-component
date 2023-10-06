import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/',
  resolve:{
    alias:{
      '@src' : path.resolve(__dirname, '/src')
    }
  }
})
