import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const libOptions = {
  build: {
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, 'src/upload/index.js'),
      name: 'vue-upload',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'kuan-vue-photoswipe'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  ...(process.env.BUILD_LIB ? libOptions : {}),
})
