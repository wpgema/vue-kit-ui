import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'VueKitUI',
            formats: ["es", "cjs"],
            fileName: (format) =>
                format === "es" ? "index.es.js" : "index.cjs.js",
        },
        sourcemap: true,
        rollupOptions: {
        external: ['vue'],
        output: {
            globals: {
            vue: 'Vue'
            }
        }
        }
    }
})
