'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CTAbtn from './CTAbtn';
import { Gem, Shirt } from 'lucide-react';

// ─── Alternating sequence ──────────────────────────────────────────────────────
const SEQUENCE = [
    { src: '/image/hero/jewellery/slider-image-one.webp', industry: 'Jewellery', pos: 'object-center' },
    { src: '/image/hero/fashion/slider-image-four.webp', industry: 'Fashion', pos: 'object-top' },
    { src: '/image/hero/jewellery/slider-image-two.webp', industry: 'Jewellery', pos: 'object-center' },
    { src: '/image/hero/fashion/slider-image-one.webp', industry: 'Fashion', pos: 'object-top' },
    { src: '/image/hero/jewellery/slider-image-three.webp', industry: 'Jewellery', pos: 'object-center' },
    { src: '/image/hero/fashion/slider-image-three.webp', industry: 'Fashion', pos: 'object-top' },
    { src: '/theme/ring/cream-theme.jpg', industry: 'Jewellery', pos: 'object-center' },
    { src: '/image/hero/fashion/slider-image-two.webp', industry: 'Fashion', pos: 'object-top' },
];

const N = SEQUENCE.length;
const DURATION = 1000; // ms — total animation duration
const INTERVAL = 5000; // ms — time each pair is shown

type Phase = 'idle' | 'animating';
type SlideItem = typeof SEQUENCE[0];

// ─── Industry label pill ──────────────────────────────────────────────────────
function Label({ item, align }: { item: SlideItem; align: 'left' | 'right' }) {
    const isJewellery = item.industry === 'Jewellery';
    return (
        <div className={`absolute bottom-10 ${align === 'left' ? 'left-6' : 'right-6'} flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border ${isJewellery ? 'bg-black/55 border-neon-green/40 text-neon-green' : 'bg-black/55 border-white/25 text-gray-200'}`}>
            {isJewellery ? <Gem size={12} /> : <Shirt size={12} />}
            <span className="text-xs font-bold uppercase tracking-widest">{item.industry}</span>
        </div>
    );
}

// ─── Main Hero ─────────────────────────────────────────────────────────────────
export default function HeroSection() {
    const [pairIdx, setPairIdx] = useState(0);
    const [phase, setPhase] = useState<Phase>('idle');
    const [isAnimating, setIsAnimating] = useState(false);
    const [mobileIdx, setMobileIdx] = useState(0);
    const [paused, setPaused] = useState(false);

    // Sync ref — updated synchronously to prevent race conditions in production
    const animatingRef = useRef(false);
    const mountedRef = useRef(true);
    useEffect(() => { mountedRef.current = true; return () => { mountedRef.current = false; }; }, []);

    // Derived images — index-based, can never show duplicates
    const leftImg = SEQUENCE[pairIdx % N];
    const rightImg = SEQUENCE[(pairIdx + 1) % N];
    const nextLeftImg = SEQUENCE[(pairIdx + 1) % N]; // rises into left panel
    const nextRightImg = SEQUENCE[(pairIdx + 2) % N]; // drops into right panel

    // Self-contained advance: guards + timing all live here, no useEffect chain
    const advance = useCallback(() => {
        if (animatingRef.current) return;   // synchronous guard — no race window
        animatingRef.current = true;        // lock immediately
        setIsAnimating(true);

        setTimeout(() => {
            if (!mountedRef.current) return;
            setPairIdx(prev => prev + 1);
            setIsAnimating(false);
            animatingRef.current = false;   // unlock
        }, DURATION);
    }, []);

    // Auto-advance desktop (advance is stable — interval never resets)
    useEffect(() => {
        if (paused) return;
        const t = setInterval(advance, INTERVAL);
        return () => clearInterval(t);
    }, [advance, paused]);

    // Mobile crossfade cycle
    useEffect(() => {
        if (paused) return;
        const t = setInterval(() => setMobileIdx(prev => (prev + 1) % N), INTERVAL);
        return () => clearInterval(t);
    }, [paused]);

    // Easing strings
    const slide = `transform ${DURATION}ms cubic-bezier(0.76, 0, 0.24, 1)`;
    const fade = `opacity ${Math.round(DURATION * 0.55)}ms ease`;
    const both = `${slide}, ${fade}`;

    return (
        <section
            className="relative w-full min-h-screen flex items-center overflow-hidden bg-dark-bg"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* ══════════════ DESKTOP LAYOUT ══════════════ */}
            <div className="absolute inset-0 z-0 hidden md:flex">

                {/* ── LEFT PANEL ─────────────────────────────────────────────── */}
                {/* Old left image fades out. New left image (= old right) rises from below. */}
                <div className="relative w-1/2 h-full overflow-hidden" style={{ zIndex: 1 }}>

                    {/* Layer A — current leftImg: fades out */}
                    <div
                        className="absolute inset-0"
                        style={{
                            opacity: isAnimating ? 0 : 1,
                            transition: isAnimating ? `opacity ${Math.round(DURATION * 0.5)}ms ease` : 'none',
                        }}
                    >
                        <Image src={leftImg.src} alt={`AI ${leftImg.industry} photography`} fill className={`object-cover ${leftImg.pos}`} sizes="50vw" priority />
                        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-dark-bg to-transparent" />
                        <Label item={leftImg} align="left" />
                    </div>

                    {/* Layer B — nextLeftImg: rises UP from below (preloaded: always in DOM) */}
                    <div
                        className="absolute inset-0"
                        style={{
                            transform: isAnimating ? 'translateY(0%)' : 'translateY(110%)',
                            opacity: isAnimating ? 1 : 0,
                            transition: isAnimating ? both : 'none',
                        }}
                    >
                        <Image src={nextLeftImg.src} alt={`AI ${nextLeftImg.industry} photography`} fill className={`object-cover ${nextLeftImg.pos}`} sizes="50vw" />
                        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-dark-bg to-transparent" />
                        <Label item={nextLeftImg} align="left" />
                    </div>

                </div>

                {/* ── CENTER DIVIDER ─────────────────────────────────────────── */}
                <div
                    className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px pointer-events-none"
                    style={{
                        zIndex: 5,
                        background: 'linear-gradient(to bottom, transparent 5%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.15) 70%, transparent 95%)',
                        boxShadow: isAnimating ? '0 0 20px rgba(255,255,255,0.25)' : 'none',
                        transition: 'box-shadow 400ms',
                    }}
                />

                {/* ── RIGHT PANEL ────────────────────────────────────────────── */}
                {/* Old right image falls DOWN. New image drops in from TOP. */}
                <div className="relative w-1/2 h-full overflow-hidden" style={{ zIndex: 1 }}>

                    {/* Layer A — current rightImg: falls DOWN and exits */}
                    <div
                        className="absolute inset-0"
                        style={{
                            transform: isAnimating ? 'translateY(110%)' : 'translateY(0%)',
                            opacity: isAnimating ? 0 : 1,
                            transition: isAnimating ? both : 'none',
                        }}
                    >
                        <Image src={rightImg.src} alt={`AI ${rightImg.industry} photography`} fill className={`object-cover ${rightImg.pos}`} sizes="50vw" priority />
                        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-dark-bg to-transparent" />
                        <Label item={rightImg} align="right" />
                    </div>

                    {/* Layer B — nextRightImg: drops IN from TOP (preloaded: always in DOM) */}
                    <div
                        className="absolute inset-0"
                        style={{
                            transform: isAnimating ? 'translateY(0%)' : 'translateY(-110%)',
                            opacity: isAnimating ? 1 : 0,
                            transition: isAnimating ? both : 'none',
                        }}
                    >
                        <Image src={nextRightImg.src} alt={`AI ${nextRightImg.industry} photography`} fill className={`object-cover ${nextRightImg.pos}`} sizes="50vw" />
                        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-dark-bg to-transparent" />
                        <Label item={nextRightImg} align="right" />
                    </div>

                </div>

                {/* ── Fixed text-legibility gradient (left half) ── */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        zIndex: 4,
                        background: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.15) 55%, transparent 75%)',
                    }}
                />

                {/* ── Bottom global fade ── */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" style={{ zIndex: 6 }} />
            </div>

            {/* ══════════════ MOBILE LAYOUT (full-bleed crossfade) ══════════════ */}
            <div className="absolute inset-0 z-0 md:hidden">
                {SEQUENCE.map((slide, i) => (
                    <div
                        key={slide.src}
                        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                        style={{ opacity: i === mobileIdx ? 1 : 0 }}
                    >
                        <Image
                            src={slide.src}
                            alt={`AI ${slide.industry} product photography`}
                            fill
                            className={`object-cover ${slide.pos}`}
                            sizes="100vw"
                            priority={i === 0}
                        />
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-dark-bg" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
            </div>

            {/* ══════════════ TEXT CONTENT ══════════════ */}
            <div className="relative w-full max-w-7xl mx-auto px-6 pt-28 pb-28" style={{ zIndex: 10 }}>
                <div className="max-w-xl space-y-7 animate-in fade-in slide-in-from-bottom-5 duration-1000">

                    {/* Industry chips */}
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neon-green bg-neon-green/10 border border-neon-green/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                            <Gem size={11} /> Jewellery
                        </span>
                        <span className="text-gray-500 text-xs font-bold">+</span>
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 bg-white/8 border border-white/15 px-3 py-1.5 rounded-full backdrop-blur-sm">
                            <Shirt size={11} /> Fashion
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                        AI Product Photography for{' '}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-green to-emerald-400">
                            Fashion
                        </span>{' '}
                        and{' '}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-green to-emerald-400">
                            Jewellery
                        </span>
                    </h1>

                    <p className="sr-only">
                        Create product photos, AI model images, and lookbooks without booking a studio. Built for fashion brands and jewellery businesses.
                    </p>

                    <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                        Create product photos, AI model images, and lookbooks without booking a studio — for fashion brands and jewellery businesses.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                        <CTAbtn
                            text="Try for free"
                            className="w-full sm:w-auto text-center bg-neon-green text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-lg shadow-neon-green/20 hover:shadow-neon-green/40 hover:-translate-y-1 transform duration-200"
                        />
                        <Link
                            href="/pricing"
                            className="w-full sm:w-auto text-center px-8 py-4 rounded-full text-lg font-bold text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-1"
                        >
                            Get Pricing
                        </Link>
                    </div>

                    <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
                        From sarees and kurtas to rings and necklaces — generate clean, realistic product images ready for your website, ads, and online marketplaces.
                    </p>

                    <div className="flex items-center gap-3 text-sm text-gray-400">
                        <div className="flex -space-x-2">
                            {['/theme/ring/cream-theme.jpg', '/theme/bangle/brown-theme.png', '/image/fashion/mens-top-wear/shot-1.jpg'].map((src, i) => (
                                <div key={i} className="w-7 h-7 rounded-full border-2 border-dark-bg overflow-hidden relative">
                                    <Image src={src} alt="Brand" fill className="object-cover" sizes="28px" />
                                </div>
                            ))}
                        </div>
                        <span>Trusted by <strong className="text-white">100+</strong> brands</span>
                    </div>
                </div>
            </div>

            {/* ══════════════ MOBILE PROGRESS DOTS ══════════════ */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 md:hidden">
                {SEQUENCE.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => { setMobileIdx(i); setPaused(true); setTimeout(() => setPaused(false), 6000); }}
                        aria-label={`Slide ${i + 1}`}
                        className="rounded-full transition-all duration-300"
                        style={{
                            width: i === mobileIdx ? 28 : 8,
                            height: 8,
                            background: i === mobileIdx ? '#00ff88' : 'rgba(255,255,255,0.25)',
                        }}
                    />
                ))}
            </div>

        </section>
    );
}
