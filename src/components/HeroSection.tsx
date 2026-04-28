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
const DURATION = 950;   // slide animation ms
const INTERVAL = 4500;  // time between slides ms

type SlideItem = typeof SEQUENCE[0];
type Phase = 'idle' | 'ready' | 'animating';

// ─── Icon helper ──────────────────────────────────────────────────────────────
function IndustryIcon({ industry, size = 12 }: { industry: string; size?: number }) {
    return industry === 'Jewellery' ? <Gem size={size} /> : <Shirt size={size} />;
}

// ─── Industry label pill ──────────────────────────────────────────────────────
function Label({ item, align }: { item: SlideItem; align: 'left' | 'right' }) {
    const isJewellery = item.industry === 'Jewellery';
    return (
        <div className={`absolute bottom-10 ${align === 'left' ? 'left-6' : 'right-6'} flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-500 ${isJewellery ? 'bg-black/55 border-neon-green/40 text-neon-green' : 'bg-black/55 border-white/25 text-gray-200'}`}>
            <IndustryIcon industry={item.industry} size={12} />
            <span className="text-xs font-bold uppercase tracking-widest">{item.industry}</span>
        </div>
    );
}

// ─── Main Hero ─────────────────────────────────────────────────────────────────
export default function HeroSection() {
    // ── Single source of truth: pairIdx ───────────────────────────────────────
    // leftImg  = SEQUENCE[pairIdx % N]
    // rightImg = SEQUENCE[(pairIdx + 1) % N]
    // incoming = SEQUENCE[(pairIdx + 2) % N]
    // This guarantees left ≠ right at all times.
    const [pairIdx, setPairIdx] = useState(0);
    const [phase, setPhase] = useState<Phase>('idle');
    const [mobileIdx, setMobileIdx] = useState(0);
    const [paused, setPaused] = useState(false);
    const phaseRef = useRef<Phase>('idle'); // stable ref so interval never resets

    // Derived — never stale, never duplicated
    const leftImg    = SEQUENCE[pairIdx % N];
    const rightImg   = SEQUENCE[(pairIdx + 1) % N];
    const incomingImg = SEQUENCE[(pairIdx + 2) % N];

    // Keep ref in sync with state
    useEffect(() => { phaseRef.current = phase; }, [phase]);

    // ── Stable advance (uses ref, not phase state) ─────────────────────────────
    const advance = useCallback(() => {
        if (phaseRef.current !== 'idle') return;
        setPhase('ready');
    }, []);

    // 'ready' → one rAF → 'animating' (gives browser one frame to paint incoming off-screen)
    useEffect(() => {
        if (phase !== 'ready') return;
        const raf = requestAnimationFrame(() => setPhase('animating'));
        return () => cancelAnimationFrame(raf);
    }, [phase]);

    // After animation completes → advance pair index, back to idle
    useEffect(() => {
        if (phase !== 'animating') return;
        const t = setTimeout(() => {
            setPairIdx(prev => prev + 1);
            setPhase('idle');
        }, DURATION);
        return () => clearTimeout(t);
    }, [phase]);

    // ── Mobile: crossfade cycle ────────────────────────────────────────────────
    useEffect(() => {
        if (paused) return;
        const t = setInterval(() => setMobileIdx(prev => (prev + 1) % N), INTERVAL);
        return () => clearInterval(t);
    }, [paused]);

    // ── Desktop auto-advance — stable interval (advance never changes) ─────────
    useEffect(() => {
        if (paused) return;
        const t = setInterval(advance, INTERVAL);
        return () => clearInterval(t);
    }, [advance, paused]);

    const isAnimating   = phase === 'animating';
    const showIncoming  = phase === 'ready' || phase === 'animating';
    const slideEasing   = `transform ${DURATION}ms cubic-bezier(0.76, 0, 0.24, 1)`;
    const fadeEasing    = `opacity ${DURATION}ms ease-in-out`;

    return (
        <section
            className="relative w-full min-h-screen flex items-center overflow-hidden bg-dark-bg"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* ══════════════ DESKTOP LAYOUT ══════════════ */}
            <div className="absolute inset-0 z-0 hidden md:block overflow-hidden">

                {/* ── Left panel (background behind text, static) ── */}
                <div className="absolute top-0 left-0 w-1/2 h-full" style={{ zIndex: 1 }}>
                    <Image
                        src={leftImg.src}
                        alt={`AI ${leftImg.industry} product photography`}
                        fill
                        className={`object-cover ${leftImg.pos}`}
                        sizes="50vw"
                        priority
                    />
                    <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-dark-bg to-transparent" />
                    <Label item={leftImg} align="left" />
                </div>

                {/* ── Right panel → slides+fades to left position on advance ── */}
                <div
                    className="absolute top-0 w-1/2 h-full"
                    style={{
                        left: '50%',
                        zIndex: 3,
                        transform: isAnimating ? 'translateX(-100%)' : 'translateX(0)',
                        opacity: isAnimating ? 0.75 : 1,
                        transition: isAnimating ? `${slideEasing}, ${fadeEasing}` : 'none',
                    }}
                >
                    <Image
                        src={rightImg.src}
                        alt={`AI ${rightImg.industry} product photography`}
                        fill
                        className={`object-cover ${rightImg.pos}`}
                        sizes="50vw"
                        priority
                    />
                    <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-dark-bg to-transparent" />
                    {/* Label follows the panel */}
                    <div
                        className="absolute bottom-10 transition-all duration-500"
                        style={{ right: isAnimating ? 'auto' : '24px', left: isAnimating ? '24px' : 'auto' }}
                    >
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border ${rightImg.industry === 'Jewellery' ? 'bg-black/55 border-neon-green/40 text-neon-green' : 'bg-black/55 border-white/25 text-gray-200'}`}>
                            <IndustryIcon industry={rightImg.industry} size={12} />
                            <span className="text-xs font-bold uppercase tracking-widest">{rightImg.industry}</span>
                        </div>
                    </div>
                </div>

                {/* ── Incoming panel → fades in + slides from right ── */}
                {showIncoming && (
                    <div
                        className="absolute top-0 w-1/2 h-full"
                        style={{
                            left: '50%',
                            zIndex: 2,
                            transform: isAnimating ? 'translateX(0)' : 'translateX(100%)',
                            opacity: isAnimating ? 1 : 0,
                            transition: isAnimating ? `${slideEasing}, ${fadeEasing}` : 'none',
                        }}
                    >
                        <Image
                            src={incomingImg.src}
                            alt={`AI ${incomingImg.industry} product photography`}
                            fill
                            className={`object-cover ${incomingImg.pos}`}
                            sizes="50vw"
                        />
                        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-dark-bg to-transparent" />
                        <Label item={incomingImg} align="right" />
                    </div>
                )}

                {/* ── Fixed text-legibility gradient overlay (left half) ── */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        zIndex: 4,
                        background: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.15) 55%, transparent 75%)',
                    }}
                />

                {/* ── Center divider ── */}
                <div
                    className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px pointer-events-none"
                    style={{
                        zIndex: 5,
                        background: 'linear-gradient(to bottom, transparent 5%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.15) 70%, transparent 95%)',
                        boxShadow: isAnimating ? '0 0 16px rgba(255,255,255,0.2)' : 'none',
                        transition: 'box-shadow 300ms',
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
                {/* Mobile gradient - dark left/top for text */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-dark-bg" />
                {/* Mobile bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
            </div>

            {/* ══════════════ TEXT CONTENT (both layouts) ══════════════ */}
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

                    {/* Subheading */}
                    <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                        Create product photos, AI model images, and lookbooks without booking a studio — for fashion brands and jewellery businesses.
                    </p>

                    {/* CTAs */}
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

                    {/* Supporting text */}
                    <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
                        From sarees and kurtas to rings and necklaces — generate clean, realistic product images ready for your website, ads, and online marketplaces.
                    </p>

                    {/* Trust */}
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
