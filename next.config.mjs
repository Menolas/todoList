/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '1mb',
            allowedOrigins: ['http://localhost:3000'],
        },
    },
}

export default nextConfig;
