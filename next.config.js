/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // Pattern for image URLs from Sanity
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '', // Leave empty for default
                pathname: '/**', // This allows all paths
            },
            // You can add more patterns here if needed
        ],
    },
}

// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = nextConfig
