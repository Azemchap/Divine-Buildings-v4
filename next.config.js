/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'], // Allow images from Sanity CDN
    },
}

// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = nextConfig
