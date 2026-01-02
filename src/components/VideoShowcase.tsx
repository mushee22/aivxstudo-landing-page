'use client';

import { Play } from 'lucide-react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

const videos = [
    {
        id: 1,
        title: "Diamond Ring Showcase",
        duration: "5s",
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", // Sample video
        poster: "https://placehold.co/720x1280/1a1a1a/ffffff?text=Ring+Preview"
    },
    {
        id: 2,
        title: "Gold Necklace Reveal",
        duration: "15s",
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        poster: "https://placehold.co/720x1280/1a1a1a/ffffff?text=Necklace+Preview"
    },
    {
        id: 3,
        title: "Bangle 360 View",
        duration: "10s",
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        poster: "https://placehold.co/720x1280/1a1a1a/ffffff?text=Bangle+Preview"
    },
    {
        id: 4,
        title: "Earring Model Shoot",
        duration: "15s",
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        poster: "https://placehold.co/720x1280/1a1a1a/ffffff?text=Earring+Preview"
    }
];

function VideoCard({ video }: { video: typeof videos[0] }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Intersection Observer to play/pause when in viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current?.play().catch(() => { });
                    } else {
                        videoRef.current?.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative group aspect-[9/16] bg-dark-surface rounded-2xl overflow-hidden border border-white/5 hover:border-neon-green/30 transition-all duration-300 shadow-xl">
            {/* Video Element */}
            <video
                ref={videoRef}
                src={video.src}
                poster={video.poster}
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Play Button Indicator (Center) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <Play size={20} fill="currentColor" />
                </div>
            </div>

            {/* Content Info (Bottom) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold bg-neon-green text-black px-2 py-0.5 rounded-sm uppercase tracking-wider">
                        {video.duration}
                    </span>
                    <span className="text-xs text-gray-300">AI Generated</span>
                </div>
                <h3 className="text-white font-bold leading-tight line-clamp-2">
                    {video.title}
                </h3>
            </div>
        </div>
    );
}

export default function VideoShowcase() {
    return (
        <section className="py-24 px-6 bg-dark-bg border-t border-white/5 relative">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Product Reel Videos</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        High-quality 5s and 15s AI-generated jewellery videos for reels, ads, and ecommerce.
                    </p>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/product-shoot/jewellery"
                        className="inline-flex items-center gap-2 text-white border-b border-neon-green/50 pb-1 hover:text-neon-green hover:border-neon-green transition-all font-medium group"
                    >
                        View More
                        <Play size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
