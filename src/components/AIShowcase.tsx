'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Gem, Shirt, Play, ArrowRight } from 'lucide-react';

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

const fashionCategories = [
    { name: "Men's Topwear", href: '/product-shoot/fashion/ai-mens-topwear-product-photography', image: '/image/fashion/mens-top-wear/shot-new-four.webp', alt: "AI men's topwear photography" },
    { name: "Men's Ethnic Wear", href: '/product-shoot/fashion/ai-mens-ethnic-wear-product-photography', image: '/image/hero/fashion/slider-image-new-two.webp', alt: "AI men's ethnic wear photography" },
    { name: "Women's Ethnic Wear", href: '/product-shoot/fashion/ai-womens-ethnic-wear-product-photography', image: '/image/hero/fashion/slider-image-new-one.webp', alt: "AI women's ethnic wear photography" },
    { name: "Garment Only", href: '/product-shoot/fashion/ai-garment-only-product-photography', image: '/image/hero/fashion/slider-image-five.webp', alt: "AI garment only photography" },
];

const jewelleryVideos = [
    { id: 1, title: 'Ring Showcase', duration: '5s', src: '/theme/ring/video/ring-video-showcase.mp4', poster: '/image/ring-video-thumbnail.png' },
    { id: 2, title: 'Necklace Showcase', duration: '15s', src: '/theme/necklace/video/neklace-video-showcase.mp4', poster: '/image/necklace-video-thumbnail.png' },
    { id: 3, title: 'Pendant Set Showcase', duration: '5s', src: '/theme/pendant-set/video/pendent-set-video-showcase.mp4', poster: '/image/pendant-set-video-thumbnail.png' },
    { id: 4, title: 'Earring Showcase', duration: '15s', src: '/theme/earring/video/earring-video-showcase.mp4', poster: '/image/earring-video-thumbnail.png' },
];

const fashionOutputs = [
    { src: '/image/fashion/mens-top-wear/shot-new-four.webp', label: 'Full Body Front' },
    { src: '/image/fashion/mens-top-wear/shot-new-two.webp', label: 'Front Close-up V1' },
    { src: '/image/fashion/mens-top-wear/shot-new-one.webp', label: 'Full Body V1' },
    { src: '/image/fashion/mens-top-wear/shot-new-three.webp', label: 'Front Close-up V2' },
    { src: '/image/fashion/mens-top-wear/shot-new-six.webp', label: 'Back Close-up' },
    { src: '/image/fashion/mens-top-wear/shot-new-seven.webp', label: 'Back Close-up V1' },
    { src: '/image/fashion/mens-top-wear/shot-new-eight.webp', label: 'Back Close-up V2' },
    { src: '/image/fashion/mens-top-wear/shot-new-five.webp', label: 'Full Body V3' },
];

const fashionVideos = [
    { id: 1, title: "Men's Top Wear", duration: '5s', src: '/image/fashion/mens-top-wear/ment-top-wear-video-showcase.mp4', poster: '/image/fashion/mens-top-wear/shot-1.jpg' },
    { id: 2, title: "Men's Ethnic Wear", duration: '5s', src: '/image/fashion/men-ethinic-wear/men-ethinic-wear-show-case.mp4', poster: '/image/fashion/men-ethinic-wear/men-ethinic-wear.jpg' },
    { id: 3, title: "Women's Ethnic Wear", duration: '5s', src: '/image/fashion/women-ethinic-wear/women-ethinic-wear-show-case.mp4', poster: '/image/fashion/women-ethinic-wear/women-ethinic-wear.jpg' },
    { id: 4, title: "Men's Top Wear", duration: '5s', src: '/image/fashion/mens-top-wear/video-show-case-1.mp4', poster: '/image/fashion/mens-top-wear/shot-11.jpg' },
];

// ─── Category Card ────────────────────────────────────────────────────────────
function CategoryCard({ name, href, image, alt, accentHover = 'neon-green' }: {
    name: string; href: string; image: string; alt: string; accentHover?: string;
}) {
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
function VideoCard({ video }: { video: typeof jewelleryVideos[0] }) {
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
            {hint && <span className="text-xs text-gray-600 whitespace-nowrap">{hint}</span>}
            <div className="h-px flex-1 bg-white/5" />
            {right}
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AIShowcase() {
    return (
        <section id="categories" className="bg-dark-bg border-t border-white/5">

            {/* ══ TOP: Shared Section Intro ══ */}
            <div className="py-16 px-6 text-center border-b border-white/5">
                <div className="max-w-2xl mx-auto">
                    <p className="text-xs font-semibold text-neon-green uppercase tracking-[0.2em] mb-4">Product Categories</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        AI Photography<br />in Action
                    </h2>
                    <p className="text-gray-400 text-base leading-relaxed">
                        See how AIVX transforms your plain product photos into studio-quality images — for both Jewellery and Fashion brands.
                    </p>
                    {/* Quick Jump Links */}
                    <div className="flex items-center justify-center gap-3 mt-8">
                        <a
                            href="#jewellery-showcase"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neon-green/10 border border-neon-green/30 text-neon-green text-sm font-semibold hover:bg-neon-green hover:text-black transition-all duration-300"
                        >
                            <Gem size={14} />
                            Jewellery
                        </a>
                        <a
                            href="#fashion-showcase"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold hover:bg-white/10 hover:text-white transition-all duration-300"
                        >
                            <Shirt size={14} />
                            Fashion
                        </a>
                    </div>
                </div>
            </div>

            {/* ══ JEWELLERY SECTION ══ */}
            <div id="jewellery-showcase" className="scroll-mt-20">

                {/* Industry Banner */}
                <div className="px-6 py-12 border-b border-neon-green/10" style={{ background: 'linear-gradient(135deg, rgba(0,255,136,0.04) 0%, transparent 60%)' }}>
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-neon-green/10 border border-neon-green/25 flex items-center justify-center">
                                <Gem size={20} className="text-neon-green" />
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-neon-green uppercase tracking-[0.25em] mb-0.5">Section 01</p>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Jewellery Photography</h2>
                                <p className="text-gray-400 text-sm mt-1">Rings, bangles, necklaces — studio-quality without a studio.</p>
                            </div>
                        </div>
                        <Link
                            href="/product-shoot/jewellery"
                            className="self-start sm:self-auto flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neon-green/30 text-sm font-semibold text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 group whitespace-nowrap"
                        >
                            Explore All
                            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 py-16 max-w-7xl mx-auto space-y-16">

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

                    {/* Videos */}
                    <div>
                        <SubsectionHeader title="Product Reel Videos" hint="— Hover to play" />
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {jewelleryVideos.map(video => <VideoCard key={video.id} video={video} />)}
                        </div>
                    </div>

                </div>
            </div>

            {/* ══ SECTION BREAK ══ */}
            <div className="px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="relative flex items-center gap-6 py-2">
                        <div className="h-px flex-1 bg-white/8" />
                        <div className="flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-dark-surface">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                            <span className="text-[11px] text-gray-500 uppercase tracking-[0.2em] font-medium">Next: Fashion</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                        </div>
                        <div className="h-px flex-1 bg-white/8" />
                    </div>
                </div>
            </div>

            {/* ══ FASHION SECTION ══ */}
            <div id="fashion-showcase" className="scroll-mt-20">

                {/* Industry Banner */}
                <div className="px-6 py-12 border-t border-white/5 border-b border-white/5" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 60%)' }}>
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/12 flex items-center justify-center">
                                <Shirt size={20} className="text-gray-300" />
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.25em] mb-0.5">Section 02</p>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Fashion Photography</h2>
                                <p className="text-gray-400 text-sm mt-1">One upload, ten model shots — no studio, no model booking.</p>
                            </div>
                        </div>
                        <Link
                            href="/product-shoot/fashion"
                            className="self-start sm:self-auto flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 text-sm font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 group whitespace-nowrap"
                        >
                            Explore All
                            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 py-16 max-w-7xl mx-auto space-y-16">

                    {/* Categories */}
                    <div>
                        <SubsectionHeader
                            title="Browse Categories"
                            right={
                                <Link href="/product-shoot/fashion" className="text-sm text-gray-500 hover:text-white transition-colors whitespace-nowrap">
                                    View all →
                                </Link>
                            }
                        />
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                                <div className="relative aspect-3/4 rounded-2xl overflow-hidden border border-white/10 bg-dark-surface">
                                    <Image src="/image/fashion/mens-top-wear/raw-upload.webp" alt="Raw fashion product upload" fill className="" />
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
                                            <Image src={output.src} alt={output.label} fill className="transition-transform duration-500 group-hover:scale-105" />
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
            </div>

        </section>
    );
}
