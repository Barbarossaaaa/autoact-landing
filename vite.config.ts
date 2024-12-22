import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '!rawloader!': '',
        },
    },
});
