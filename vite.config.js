import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { resolve} from 'path'
// import {__dirname} from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/vite3-react-redux/',
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, "index.html"),
        
  //     },
  //   },
  // },
})
