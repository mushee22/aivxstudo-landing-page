import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
            {
                protocol: 'https',
                hostname: 'cms.aivx.in'
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '1337',
                pathname: '/uploads/**',
            },
            {
                protocol: 'http',
                hostname: '**', // This wildcard matches ANY hostname or local IP address
                port: '1337',
                pathname: '/uploads/**',
            },
        ],
    },
};

export default nextConfig;
