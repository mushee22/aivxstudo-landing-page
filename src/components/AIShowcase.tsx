'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Gem, Shirt, Play } from 'lucide-react';

const BeforeAfterSliderContainer = dynamic(() => import('./BeforeAfterSliderContainer'), { ssr: false });

// ─── Types ───────────────────────────────────────────────────────────────────
type Tab = 'jewellery' | 'fashion';

// ─── Data ────────────────────────────────────────────────────────────────────
const jewelleryCategories = [
    { name: 'Ring', href: '/product-shoot/jewellery/ai-ring-product-photography', image: '/theme/ring/cream-theme.jpg', alt: 'AI generated ring product photography' },
    { name: 'Earring', href: '/product-shoot/jewellery/ai-earring-product-photography', image: '/theme/earring/rose-amber-theme.png', alt: 'AI generated earring product photography' },
    { name: 'Pendant Set', href: '/product-shoot/jewellery/ai-necklace-product-photography', image: '/theme/pendant-set/navy-blue-theme.png', alt: 'AI generated pendant set product photography' },
    { name: 'Necklace', href: '/product-shoot/jewellery/ai-necklace-product-photography', image: '/theme/necklace/white-theme.png', alt: 'AI generated necklace product photography' },
    { name: 'Necklace Set', href: '/product-shoot/jewellery/ai-necklace-set-product-photography', image: '/theme/necklace-set/light-green-theme.png', alt: 'AI generated necklace set product photography' },
    { name: 'Bangle', href: '/product-shoot/jewellery/ai-bangle-product-photography', image: '/theme/bangle/brown-theme.png', alt: 'AI generated bangle product photography' },
];

const fashionCategories = [
    { name: "Men's Topwear", href: '/product-shoot/fashion', image: '/image/fashion/mens-top-wear/shot-1.jpg', alt: "AI men's topwear photography" },
    { name: "Men's Ethnic Wear", href: '/product-shoot/fashion', image: '/image/fashion/men-ethinic-wear/men-ethinic-wear.jpg', alt: "AI men's ethnic wear photography" },
    { name: "Women's Ethnic Wear", href: '/product-shoot/fashion', image: '/image/fashion/women-ethinic-wear/women-ethinic-wear.jpg', alt: "AI women's ethnic wear photography" },
];

const jewelleryVideos = [
    { id: 1, title: 'Ring Showcase', duration: '5s', src: '/theme/ring/video/ring-video-showcase.mp4', poster: '/image/ring-video-thumbnail.png' },
    { id: 2, title: 'Necklace Showcase', duration: '15s', src: '/theme/necklace/video/neklace-video-showcase.mp4', poster: '/image/necklace-video-thumbnail.png' },
    { id: 3, title: 'Pendant Set Showcase', duration: '5s', src: '/theme/pendant-set/video/pendent-set-video-showcase.mp4', poster: '/image/pendant-set-video-thumbnail.png' },
    { id: 4, title: 'Earring Showcase', duration: '15s', src: '/theme/earring/video/earring-video-showcase.mp4', poster: '/image/earring-video-thumbnail.png' },
];

const fashionOutputs = [
    { src: '/image/fashion/mens-top-wear/shot-1.jpg', label: 'Full Body Front' },
    { src: '/image/fashion/mens-top-wear/shot-6.jpg', label: 'Front Close-up Variation 1' },
    { src: '/image/fashion/mens-top-wear/shot-2.jpg', label: 'Full Body Variation 1' },
    { src: '/image/fashion/mens-top-wear/shot-7.jpg', label: 'Full Body Variation 2' },
    { src: '/image/fashion/mens-top-wear/shot-8.jpg', label: 'Full Body Variation 3' },
    { src: '/image/fashion/mens-top-wear/shot-9.jpg', label: 'Full Body Variation 4' },
    { src: '/image/fashion/mens-top-wear/shot-3.jpg', label: 'Back Close-up Variation 1' },
    { src: '/image/fashion/mens-top-wear/shot-5.jpg', label: 'Back Close-up Variation 2' },
    { src: '/image/fashion/mens-top-wear/shot-4.jpg', label: 'Back Full View 1' },
    { src: '/image/fashion/mens-top-wear/shot-back-10.jpg', label: 'Back Full View 2' },

];

const fashionVideos = [
    { id: 1, title: 'Men\'s Top Wear', duration: '5s', src: '/image/fashion/mens-top-wear/ment-top-wear-video-showcase.mp4', poster: '/image/fashion/mens-top-wear/shot-1.jpg' },
    { id: 2, title: 'Men\'s Ethnic Wear', duration: '5s', src: '/image/fashion/men-ethinic-wear/men-ethinic-wear-show-case.mp4', poster: '/image/fashion/men-ethinic-wear/men-ethinic-wear.jpg' },
    { id: 3, title: 'Women\'s Ethnic Wear', duration: '5s', src: '/image/fashion/women-ethinic-wear/women-ethinic-wear-show-case.mp4', poster: '/image/fashion/women-ethinic-wear/women-ethinic-wear.jpg' },
    { id: 4, title: 'Men\'s Top Wear', duration: '5s', src: '/image/fashion/mens-top-wear/video-show-case-1.mp4', poster: '/image/fashion/mens-top-wear/shot-11.jpg' },
    // { id: 5, title: 'Men\'s Ethnic Wear', duration: '5s', src: '/image/fashion/mens-top-wear/video-show-case-2.mp4', poster: '/image/fashion/mens-top-wear/shot-1.jpg' },
];

// ─── Mini Components ──────────────────────────────────────────────────────────
function CategoryCard({ name, href, image, alt }: { name: string; href: string; image: string; alt: string }) {
    return (
        <Link href={href} className="group block relative overflow-hidden rounded-2xl bg-dark-surface border border-white/10 hover:border-neon-green/40 transition-all duration-400">
            <div className="h-52 w-full relative overflow-hidden">
                <Image src={image} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
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

// ─── Panel wrapper with fade+slide transition ─────────────────────────────────
function Panel({ children, show }: { children: React.ReactNode; show: boolean }) {
    return (
        <div className={`transition-all duration-400 ${show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none absolute inset-0'}`}>
            {children}
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AIShowcase() {
    const [activeTab, setActiveTab] = useState<Tab>('jewellery');
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const jewRef = useRef<HTMLButtonElement>(null);
    const fashRef = useRef<HTMLButtonElement>(null);

    const updateIndicator = useCallback(() => {
        const btn = activeTab === 'jewellery' ? jewRef.current : fashRef.current;
        if (btn) {
            const parent = btn.parentElement;
            if (parent) {
                const parentRect = parent.getBoundingClientRect();
                const btnRect = btn.getBoundingClientRect();
                setIndicatorStyle({ left: btnRect.left - parentRect.left, width: btnRect.width });
            }
        }
    }, [activeTab]);

    useEffect(() => { updateIndicator(); }, [updateIndicator]);

    return (
        <section id="categories" className="py-20 px-6 bg-dark-bg border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* ── Shared Header with animated switcher ── */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
                    <div>
                        <p className="text-xs font-semibold text-neon-green uppercase tracking-[0.2em] mb-3">Product Categories</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            AI Photography<br />in Action
                        </h2>
                    </div>

                    {/* Pill Switcher */}
                    <div
                        className="relative flex items-center p-1 rounded-2xl border border-white/10 bg-dark-surface gap-0 self-start sm:self-auto"
                        style={{ isolation: 'isolate' }}
                    >
                        {/* Animated sliding background */}
                        <div
                            className="absolute top-1 bottom-1 rounded-xl bg-neon-green transition-all duration-300 ease-out z-0"
                            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
                        />

                        <button
                            ref={jewRef}
                            onClick={() => setActiveTab('jewellery')}
                            className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 ${activeTab === 'jewellery' ? 'text-black' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <Gem size={15} />
                            Jewellery
                        </button>

                        <button
                            ref={fashRef}
                            onClick={() => setActiveTab('fashion')}
                            className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 ${activeTab === 'fashion' ? 'text-black' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <Shirt size={15} />
                            Fashion
                        </button>
                    </div>
                </div>

                {/* ── Content Area ── */}
                <div className="relative">

                    {/* ─ JEWELLERY content ─ */}
                    <div className={`transition-all duration-400 ease-out ${activeTab === 'jewellery' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 absolute inset-0 pointer-events-none'}`}>
                        <div className="space-y-16">

                            {/* 1. Categories */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-lg font-semibold text-white whitespace-nowrap">Browse Categories</h3>
                                    <div className="h-px flex-1 bg-white/5" />
                                    <Link href="/product-shoot/jewellery" className="text-sm text-gray-500 hover:text-neon-green transition-colors whitespace-nowrap">View all →</Link>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                                    {jewelleryCategories.map(cat => <CategoryCard key={cat.name} {...cat} />)}
                                </div>
                            </div>

                            {/* 2. Before / After Slider */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-lg font-semibold text-white whitespace-nowrap">Before &amp; After</h3>
                                    <div className="h-px flex-1 bg-white/5" />
                                    <span className="text-xs text-gray-600">Drag the slider</span>
                                </div>
                                <BeforeAfterSliderContainer />
                            </div>

                            {/* 3. Video Reels */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-lg font-semibold text-white whitespace-nowrap">Product Reel Videos</h3>
                                    <div className="h-px flex-1 bg-white/5" />
                                    <span className="text-xs text-gray-600">Hover to play</span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                    {jewelleryVideos.map(video => <VideoCard key={video.id} video={video} />)}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ─ FASHION content ─ */}
                    <div className={`transition-all duration-400 ease-out ${activeTab === 'fashion' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 absolute inset-0 pointer-events-none'}`}>
                        <div className="space-y-16">

                            {/* 1. Categories */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-lg font-semibold text-white whitespace-nowrap">Browse Categories</h3>
                                    <div className="h-px flex-1 bg-white/5" />
                                    <Link href="/product-shoot/fashion" className="text-sm text-gray-500 hover:text-neon-green transition-colors whitespace-nowrap">View all →</Link>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                                    {fashionCategories.map(cat => <CategoryCard key={cat.name} {...cat} />)}
                                </div>
                            </div>

                            {/* 2. One Upload → Ten Shots */}
                            <div>
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">One Upload. Ten Ready-to-Use Shots.</h3>
                                        <p className="text-gray-400 text-base max-w-md">Upload one flat-lay or hanger photo and get 10 professional model shots at different angles, backgrounds, and styles — instantly.</p>
                                    </div>
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
                                                <div className="relative aspect-9/16 w-full rounded-xl overflow-hidden border border-white/8 bg-dark-surface hover:border-neon-green/30 transition-colors duration-300">
                                                    <Image
                                                        src={output.src}
                                                        alt={output.label}
                                                        fill
                                                        className=" transition-transform duration-500 group-hover:scale-105"
                                                    />
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

                            {/* 3. Fashion video placeholder */}
                            {/* <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-lg font-semibold text-white whitespace-nowrap">Product Reel Videos</h3>
                                    <div className="h-px flex-1 bg-white/5" />
                                </div>
                                <div className="flex items-center justify-center py-16 rounded-2xl border border-white/5 bg-dark-surface text-center">
                                    <div className="space-y-2">
                                        <p className="text-gray-500 text-sm">Fashion reel videos coming soon.</p>
                                        <p className="text-gray-700 text-xs">We're adding AI fashion video generation — check back shortly.</p>
                                    </div>
                                </div>
                            </div> */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-lg font-semibold text-white whitespace-nowrap">Product Reel Videos</h3>
                                    <div className="h-px flex-1 bg-white/5" />
                                    <span className="text-xs text-gray-600">Hover to play</span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                    {fashionVideos.map(video => <VideoCard key={video.id} video={video} />)}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
