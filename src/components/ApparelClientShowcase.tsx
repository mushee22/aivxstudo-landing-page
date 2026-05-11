'use client';

import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

// ─── Data ────────────────────────────────────────────────────────────────────
const fashionCategories = [
    { name: "Men's Topwear", href: '/product-shoot/fashion/ai-mens-topwear-product-photography', image: '/image/hero/fashion/slider-image-three.webp', alt: "AI men's topwear photography" },
    { name: "Men's Ethnic Wear", href: '/product-shoot/fashion/ai-mens-ethnic-wear-product-photography', image: '/image/hero/fashion/slider-image-four.webp', alt: "AI men's ethnic wear photography" },
    { name: "Women's Ethnic Wear", href: '/product-shoot/fashion/ai-womens-ethnic-wear-product-photography', image: '/image/hero/fashion/slider-image-two.webp', alt: "AI women's ethnic wear photography" },
    { name: "Garment Only", href: '/product-shoot/fashion/ai-garment-only-product-photography', image: '/image/hero/fashion/slider-image-five.webp', alt: "AI garment only photography" },
];

const fashionVideos = [
    { id: 1, title: "Men's Top Wear", duration: '5s', src: '/image/fashion/mens-top-wear/ment-top-wear-video-showcase.mp4', poster: '/image/fashion/mens-top-wear/shot-1.jpg' },
    { id: 2, title: "Men's Ethnic Wear", duration: '5s', src: '/image/fashion/men-ethinic-wear/men-ethinic-wear-show-case.mp4', poster: '/image/fashion/men-ethinic-wear/men-ethinic-wear.jpg' },
    { id: 3, title: "Women's Ethnic Wear", duration: '5s', src: '/image/fashion/women-ethinic-wear/women-ethinic-wear-show-case.mp4', poster: '/image/fashion/women-ethinic-wear/women-ethinic-wear.jpg' },
    { id: 4, title: "Men's Top Wear V2", duration: '5s', src: '/image/fashion/mens-top-wear/video-show-case-1.mp4', poster: '/image/fashion/mens-top-wear/shot-11.jpg' },
];

const fashionOutputs = [
    { src: '/image/fashion/mens-top-wear/shot-1.jpg', label: 'Full Body Front' },
    { src: '/image/fashion/mens-top-wear/shot-6.jpg', label: 'Front Close-up V1' },
    { src: '/image/fashion/mens-top-wear/shot-2.jpg', label: 'Full Body V1' },
    { src: '/image/fashion/mens-top-wear/shot-7.jpg', label: 'Full Body V2' },
    { src: '/image/fashion/mens-top-wear/shot-8.jpg', label: 'Full Body V3' },
    { src: '/image/fashion/mens-top-wear/shot-9.jpg', label: 'Full Body V4' },
    { src: '/image/fashion/mens-top-wear/shot-3.jpg', label: 'Back Close-up V1' },
    { src: '/image/fashion/mens-top-wear/shot-5.jpg', label: 'Back Close-up V2' },
    { src: '/image/fashion/mens-top-wear/shot-4.jpg', label: 'Back Full View 1' },
    { src: '/image/fashion/mens-top-wear/shot-back-10.jpg', label: 'Back Full View 2' },
];

// ─── Category Card ────────────────────────────────────────────────────────────
function CategoryCard({ name, href, image, alt }: { name: string; href: string; image: string; alt: string }) {
    return (
        <Link href={href} className="group block relative overflow-hidden rounded-2xl bg-dark-surface border border-white/10 hover:border-white/25 transition-all duration-400">
            <div className="aspect-[3/4] w-full relative overflow-hidden">
                <Image src={image} alt={alt} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
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
function VideoCard({ video }: { video: typeof fashionVideos[0] }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => { if (window.innerWidth >= 768) { videoRef.current?.play().catch(() => { }); setIsPlaying(true); } };
    const handleMouseLeave = () => { if (window.innerWidth >= 768) { if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } setIsPlaying(false); } };
    const togglePlay = () => { if (!videoRef.current) return; if (isPlaying) { videoRef.current.pause(); setIsPlaying(false); } else { videoRef.current.play().catch(() => { }); setIsPlaying(true); } };

    return (
        <div className="relative group aspect-9/16 bg-dark-surface rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
export default function ApparelClientShowcase() {
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
                        Apparel Photography <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-green to-emerald-400">in Action</span>
                    </h2>
                    <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
                        See how AIVX transforms plain apparel photos into professional model shots — ready for ecommerce, ads, and social media.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-16">

                    {/* Categories */}
                    <div>
                        <SubsectionHeader
                            title="Browse Categories"
                            right={
                                <Link href="/product-shoot/fashion" className="text-sm text-gray-500 hover:text-neon-green transition-colors whitespace-nowrap">
                                    View all →
                                </Link>
                            }
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                            {fashionCategories.map(cat => <CategoryCard key={cat.name} {...cat} />)}
                        </div>
                    </div>

                    {/* One Upload → Ten Shots */}
                    <div>
                        <div className="mb-8">
                            <SubsectionHeader title="One Upload. Ten Ready-to-Use Shots." />
                            <p className="text-gray-400 text-sm max-w-lg -mt-2">
                                Upload one flat-lay or hanger photo and get 10 professional model shots at different angles, backgrounds, and styles — instantly.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
                            {/* Input */}
                            <div className="lg:col-span-1 flex flex-col gap-3">
                                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-dark-surface">
                                    <Image src="/image/fashion/mens-top-wear/raw-upload.jpg" alt="Raw fashion product upload" fill className="object-cover" />
                                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full">
                                        <span className="text-xs font-semibold text-gray-300">Your Upload</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600 text-center">1 plain product photo</p>
                                <div className="hidden lg:flex flex-col items-center gap-1 py-2">
                                    <div className="w-px h-6 bg-white/10" />
                                    <span className="text-neon-green text-xl leading-none">↓</span>
                                    <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">AI shots</p>
                                </div>
                                <div className="flex lg:hidden items-center gap-3 -my-1">
                                    <div className="h-px flex-1 bg-white/10" />
                                    <span className="text-neon-green text-xl">→</span>
                                    <p className="text-[10px] text-gray-600 uppercase tracking-widest">AI shots</p>
                                    <div className="h-px flex-1 bg-white/10" />
                                </div>
                            </div>
                            {/* Output grid */}
                            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                                {fashionOutputs.map((output, i) => (
                                    <div key={i} className="group flex flex-col gap-1.5">
                                        <div className="relative aspect-9/16 w-full rounded-xl overflow-hidden border border-white/8 bg-dark-surface hover:border-white/20 transition-colors duration-300">
                                            <Image src={output.src} alt={output.label} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                                            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                                                <span className="text-[10px] font-bold text-white">{i + 1}</span>
                                            </div>
                                        </div>
                                        <p className="text-[10px] text-gray-600 text-center leading-tight">{output.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6 flex items-center gap-3">
                            <div className="h-px flex-1 bg-white/5" />
                            <p className="text-xs text-gray-600 text-center px-4">All shots generated from a single product photo · No model booking · No studio required</p>
                            <div className="h-px flex-1 bg-white/5" />
                        </div>
                    </div>

                    {/* Videos */}
                    <div>
                        <SubsectionHeader title="Product Reel Videos" hint="— Hover to play" />
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {fashionVideos.map(video => <VideoCard key={video.id} video={video} />)}
                        </div>
                    </div>

                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/product-shoot/fashion"
                        className="inline-flex items-center gap-2 bg-neon-green text-black px-8 py-4 rounded-full text-base font-bold hover:bg-lime-300 transition-all shadow-lg shadow-neon-green/20 hover:-translate-y-1"
                    >
                        Explore All Fashion Categories
                        <ArrowRight size={18} />
                    </Link>
                </div>

            </div>

            {/* Background Decorative Elements */}
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
