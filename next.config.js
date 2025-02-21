/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.giphy.com'],
        unoptimized: true,
    },
    output: 'export',
    distDir: 'dist',

    publicRuntimeConfig: {
        pageTitle: "Cai Plank | Portfolio",
        pageDescription: "Cai Plank's game programming portfolio website.",
    }
}

module.exports = nextConfig
