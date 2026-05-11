'use client';

import { ArrowRight, Play } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const BeforeAfterSliderContainer = dynamic(() => import('./BeforeAfterSliderContainer'), { ssr: false });

// ─── Data ────────────────────────────────────────────────────────────────────
const jewelleryCategories = [
    { name: 'Ring', href: '/product-shoot/jewellery/ai-ring-product-photography', image: '/theme/ring/cream-theme.jpg', alt: 'AI generated ring product photography' },
    { name: 'Earring', href: '/product-shoot/jewellery/ai-earring-product-photography', image: '/theme/earring/rose-amber-theme.png', alt: 'AI generated earring product photography' },
    { name: 'Pendant Set', href: '/product-shoot/jewellery/ai-necklace-product-photography', image: '/theme/pendant-set/navy-blue-theme.png', alt: 'AI generated pendant set product photography' },
    { name: 'Necklace', href: '/product-shoot/jewellery/ai-necklace-product-photography', image: '/theme/necklace/white-theme.png', alt: 'AI generated necklace product photography' },
    { name: 'Necklace Set', href: '/product-shoot/jewellery/ai-necklace-set-product-photography', image: '/theme/necklace-set/light-green-theme.png', alt: 'AI generated necklace set product photography' },
    { name: 'Bangle', href: '/product-shoot/jewellery/ai-bangle-product-photography', image: '/theme/bangle/brown-theme.png', alt: 'AI generated bangle product photography' },
];

const jewelleryVideos = [
    { id: 1, title: 'Ring Showcase', duration: '5s', src: '/theme/ring/video/ring-video-showcase.mp4', poster: '/image/ring-video-thumbnail.png' },
    { id: 2, title: 'Necklace Showcase', duration: '15s', src: '/theme/necklace/video/neklace-video-showcase.mp4', poster: '/image/necklace-video-thumbnail.png' },
    { id: 3, title: 'Pendant Set Showcase', duration: '5s', src: '/theme/pendant-set/video/pendent-set-video-showcase.mp4', poster: '/image/pendant-set-video-thumbnail.png' },
    { id: 4, title: 'Earring Showcase', duration: '15s', src: '/theme/earring/video/earring-video-showcase.mp4', poster: '/image/earring-video-thumbnail.png' },
];

const jewelleryShots = [
    { src: '/theme/ring/cream-theme.jpg', label: 'Ring - Cream' },
    { src: '/theme/earring/rose-amber-theme.png', label: 'Earring - Rose' },
    { src: '/theme/pendant-set/navy-blue-theme.png', label: 'Pendant - Navy' },
    { src: '/theme/necklace/white-theme.png', label: 'Necklace - White' },
    { src: '/theme/necklace-set/light-green-theme.png', label: 'Set - Green' },
    { src: '/theme/bangle/brown-theme.png', label: 'Bangle - Brown' },
];

// ─── Category Card ────────────────────────────────────────────────────────────
function CategoryCard({ name, href, image, alt }: { name: string; href: string; image: string; alt: string }) {
    return (
        <Link href={href} className="group block relative overflow-hidden rounded-2xl bg-dark-surface border border-white/10 hover:border-neon-green/50 transition-all duration-400">
            <div className="h-52 w-full relative overflow-hidden">
                <Image src={image} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
            </div>
            <div className="p-4 bg-dark-surface group-hover:bg-white/5 transition-colors duration-300">
                <h3 className="text-base font-semibold text-white group-hover:text-neon-green transition-colors flex items-center gap-2">
                    {name}
                    <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 inline-block">→</span>
                </h3>
            </div>
        </Link>
    );
}

// ─── Video Card ───────────────────────────────────────────────────────────────
function VideoCard({ video }: { video: typeof jewelleryVideos[0] }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => { if (window.innerWidth >= 768) { videoRef.current?.play().catch(() => { }); setIsPlaying(true); } };
    const handleMouseLeave = () => { if (window.innerWidth >= 768) { if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } setIsPlaying(false); } };
    const togglePlay = () => { if (!videoRef.current) return; if (isPlaying) { videoRef.current.pause(); setIsPlaying(false); } else { videoRef.current.play().catch(() => { }); setIsPlaying(true); } };

    return (
        <div className="relative group aspect-9/16 bg-dark-surface rounded-2xl overflow-hidden border border-white/8 hover:border-neon-green/30 transition-all duration-300" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <video ref={videoRef} src={video.src} loop muted poster={video.poster} playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
            <div className={`absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent transition-opacity ${isPlaying ? 'opacity-0' : 'opacity-60'}`} />
            <div className={`absolute inset-0 flex items-center justify-center md:hidden ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-300`} onClick={togglePlay}>
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <Play size={22} fill="currentColor" className="ml-1" />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold bg-neon-green text-black px-2 py-0.5 rounded-sm uppercase tracking-wider">{video.duration}</span>
                    <span className="text-xs text-gray-300">AI Generated</span>
                </div>
                <h3 className="text-white font-bold leading-tight text-sm">{video.title}</h3>
            </div>
        </div>
    );
}

// ─── Subsection Row Header ─────────────────────────────────────────────────────
function SubsectionHeader({ title, hint, right }: { title: string; hint?: string; right?: React.ReactNode }) {
    return (
        <div className="flex items-center gap-4 mb-6">
            <h3 className="text-lg font-semibold text-white whitespace-nowrap">{title}</h3>
            {hint && <span className="text-xs text-gray-500 whitespace-nowrap">{hint}</span>}
            <div className="h-px flex-1 bg-white/5" />
            {right}
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function JewelleryClientShowcase() {
    return (
        <section className="relative w-full bg-[#0A0A0A] py-12 md:py-16 px-6 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-8 md:mb-10">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="h-px w-8 bg-neon-green"></span>
                        <span className="text-neon-green font-medium tracking-widest uppercase text-xs">
                            Client Showcases
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                        Jewellery Photography <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-green to-emerald-400">in Action</span>
                    </h2>
                    <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
                        See how AIVX transforms plain jewellery photos into studio-quality images — ready for ecommerce, ads, and social media.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-16">

                    {/* Categories */}
                    <div>
                        <SubsectionHeader
                            title="Browse Categories"
                            right={
                                <Link href="/product-shoot/jewellery" className="text-sm text-gray-500 hover:text-neon-green transition-colors whitespace-nowrap">
                                    View all →
                                </Link>
                            }
                        />
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {jewelleryCategories.map(cat => <CategoryCard key={cat.name} {...cat} />)}
                        </div>
                    </div>

                    {/* Before / After */}
                    <div>
                        <SubsectionHeader title="Before & After" hint="— Drag the slider to compare" />
                        <BeforeAfterSliderContainer />
                    </div>

                    {/* Product Shots Gallery */}
                    {/* <div>
                        <SubsectionHeader title="Studio-Quality Product Shots" />
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {jewelleryShots.map((shot, i) => (
                                <div key={i} className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-neon-green/30 transition-all duration-300">
                                    <Image src={shot.src} alt={shot.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-xs text-white font-medium">{shot.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* Videos */}
                    <div>
                        <SubsectionHeader title="Product Reel Videos" hint="— Hover to play" />
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {jewelleryVideos.map(video => <VideoCard key={video.id} video={video} />)}
                        </div>
                    </div>

                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/product-shoot/jewellery"
                        className="inline-flex items-center gap-2 bg-neon-green text-black px-8 py-4 rounded-full text-base font-bold hover:bg-lime-300 transition-all shadow-lg shadow-neon-green/20 hover:-translate-y-1"
                    >
                        Explore All Jewellery Categories
                        <ArrowRight size={18} />
                    </Link>
                </div>

            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
