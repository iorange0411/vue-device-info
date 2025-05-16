import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/**/*.ts'],
      outDir: 'dist/types',
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace(/src\//, ''),
        content
      })
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueDeviceInfo',
      fileName: (format) => `vue-device-info.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          dir: 'dist',
          entryFileNames: 'vue-device-info.es.js',
          preserveModules: true,
          preserveModulesRoot: 'src'
        },
        {
          format: 'cjs',
          dir: 'dist',
          entryFileNames: 'vue-device-info.cjs.js'
        },
        {
          format: 'umd',
          dir: 'dist',
          entryFileNames: 'vue-device-info.umd.js',
          name: 'VueDeviceInfo',
          globals: {
            vue: 'Vue'
          }
        }
      ]
    },
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
}) 