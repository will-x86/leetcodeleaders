// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    fonts: [
        {
            provider: fontProviders.local(),
            name: "Kunst Grotesk",
            cssVariable: "--font-kunst-grotesk",
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/KunstGrotesk-Light.woff2"],
                        weight: "300",
                        style: "normal",
                    },
                    {
                        src: [
                            "./src/assets/fonts/KunstGrotesk-LightItalic.woff2",
                        ],
                        weight: "300",
                        style: "italic",
                    },
                    {
                        src: ["./src/assets/fonts/KunstGrotesk-Regular.woff2"],
                        weight: "400",
                        style: "normal",
                    },
                    {
                        src: [
                            "./src/assets/fonts/KunstGrotesk-RegularItalic.woff2",
                        ],
                        weight: "400",
                        style: "italic",
                    },
                    {
                        src: ["./src/assets/fonts/KunstGrotesk-Medium.woff2"],
                        weight: "500",
                        style: "normal",
                    },
                    {
                        src: [
                            "./src/assets/fonts/KunstGrotesk-MediumItalic.woff2",
                        ],
                        weight: "500",
                        style: "italic",
                    },
                    {
                        src: ["./src/assets/fonts/KunstGrotesk-Bold.woff2"],
                        weight: "700",
                        style: "normal",
                    },
                    {
                        src: [
                            "./src/assets/fonts/KunstGrotesk-BoldItalic.woff2",
                        ],
                        weight: "700",
                        style: "italic",
                    },
                    {
                        src: ["./src/assets/fonts/KunstGrotesk-Black.woff2"],
                        weight: "900",
                        style: "normal",
                    },
                    {
                        src: [
                            "./src/assets/fonts/KunstGrotesk-BlackItalic.woff2",
                        ],
                        weight: "900",
                        style: "italic",
                    },
                ],
            },
        },
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    output: "server",
    adapter: cloudflare(),
});
