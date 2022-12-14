import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "prompt",
            manifest: {
                name: "Squeeze",
                short_name: "Squeeze",
                description: "Get optimized JPEGs!",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: "android-chrome-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
            workbox: {
                globPatterns: ["**/*.{js,css,html,ico,svf,woff,woff2,wasm}"],
            },
        }),
    ],
    appType: "spa",
    base: "/squeeze/",
    build: {
        target: "es2020",
    },
    worker: {
        format: "es",
    },
    optimizeDeps: {
        esbuildOptions: {
            target: "es2020",
        },
    },
});
