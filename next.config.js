/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.giphy.com'],
        unoptimized: true,
    },
    output: 'export',
    distDir: 'dist',
}

module.exports = nextConfig
