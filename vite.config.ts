import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: './src/lib/index.ts',
            name: 'logger',
            formats: ['es', 'cjs', 'umd', 'iife'],
            fileName: (format) => `logger.${format}.js`
        },
    }
})