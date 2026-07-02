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
    async redirects() {
        return [
            {
                source: '/blog/ai-jewellery-photo-editor-and-ai-image-generator-tools-for-modern-jewellery-photography',
                destination: '/blog/best-ai-tools-for-jewellery-and-fashion-photography-2026',
                permanent: true,
            },
            {
                source: '/blog/best-ai-platforms-for-fashion-and-jewellery-photoshoot-editing',
                destination: '/blog/best-ai-tools-for-jewellery-and-fashion-photography-2026',
                permanent: true,
            },
            {
                source: '/blog/best-ai-software-for-enhancing-jewellery-images',
                destination: '/blog/best-ai-tools-for-jewellery-and-fashion-photography-2026',
                permanent: true,
            },
            {
                source: '/blog/top-ai-jewellery-photography-tools-in-2026',
                destination: '/blog/best-ai-tools-for-jewellery-and-fashion-photography-2026',
                permanent: true,
            },
            {
                source: '/blog/how-ai-is-changing-jewellery-and-fashion-product-photography',
                destination: '/blog/best-ai-tools-for-jewellery-and-fashion-photography-2026',
                permanent: true,
            },
        ]
    }
};

export default nextConfig;
