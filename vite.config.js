import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve} from 'path'
import path from 'path'

import url from 'url'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vite3-react-redux/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        
      },
    },
  },
})
