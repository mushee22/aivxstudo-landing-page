'use client';

import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface JewelleryCategoryVideoGalleryProps {
    category: string;
    videos?: {
        id: number;
        src: string;
        poster: string;
        duration: string;
    }[];
}

export default function JewelleryCategoryVideoGallery({ category, videos = [] }: JewelleryCategoryVideoGalleryProps) {
    const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);

    // Placeholder video data (using standard sample videos cropped to vertical)
    // const videos = [
    //     {
    //         id: 1,
    //         src: "https://videos.pexels.com/video-files/5350324/5350324-uhd_2160_3840_25fps.mp4", // Jewellery related if possible or generic vertical
    //         poster: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop",
    //         duration: "5s"
    //     },
    //     {
    //         id: 2,
    //         src: "https://videos.pexels.com/video-files/5350324/5350324-uhd_2160_3840_25fps.mp4",
    //         poster: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop",
    //         duration: "15s"
    //     },
    //     {
    //         id: 3,
    //         src: "https://videos.pexels.com/video-files/5350324/5350324-uhd_2160_3840_25fps.mp4",
    //         poster: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=600&auto=format&fit=crop",
    //         duration: "15s"
    //     },
    //     {
    //         id: 4,
    //         src: "https://videos.pexels.com/video-files/5350324/5350324-uhd_2160_3840_25fps.mp4",
    //         poster: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=600&auto=format&fit=crop",
    //         duration: "5s"
    //     }
    // ];

    return (
        <section className="py-24 px-6 bg-black border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Video Gallery
                    </h2>
                    <p className="text-gray-400 text-lg">
                        High-quality 5s and 15s AI-generated videos designed for reels, ads, and ecommerce.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function VideoCard({ video }: { video: any }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoRef.current?.play().catch(() => { });
                    setIsPlaying(true);
                } else {
                    videoRef.current?.pause();
                    setIsPlaying(false);
                }
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-dark-bg border border-white/10 group shadow-lg">
            <video
                ref={videoRef}
                src={video.src}
                poster={video.poster}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60 opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Duration Badge */}
            <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-xs font-bold text-white border border-white/10">
                {video.duration}
            </div>

            {/* Play Icon (Visual indicator) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Play size={20} fill="white" className="text-white ml-1" />
                </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-6 left-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-medium text-sm">AI Generated Reel</p>
            </div>
        </div>
    );
}
