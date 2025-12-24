
'use client';

import { Palette, Zap, Layers, Share2, Maximize, Copy, Sparkles, Wand2 } from 'lucide-react';
import { useRef, useState } from 'react';

const features = [
    {
        icon: Palette,
        title: "AI-Driven Themes",
        desc: "Transform simple photos into artistic masterpieces automatically.",
        accent: "text-purple-400"
    },
    {
        icon: Sparkles,
        title: "Smart Fill",
        desc: "Intelligently expand backgrounds with context-aware generation.",
        accent: "text-neon-green"
    },
    {
        icon: Layers,
        title: "Multi-Format",
        desc: "Export for Stories, Posts, and Ads instantly from one source.",
        accent: "text-pink-400"
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        desc: "Generate professional results in seconds, not hours.",
        accent: "text-amber-400"
    },
    {
        icon: Maximize,
        title: "4K Upscaling",
        desc: "Crystal clear professional resolution for print and web.",
        accent: "text-blue-400"
    },
    {
        icon: Copy,
        title: "Batch Create",
        desc: "Process 100+ images at once with consistent style settings.",
        accent: "text-cyan-400"
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 px-6 bg-dark-bg relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neon-green mb-2">
                        <Wand2 size={14} />
                        <span>Core Capabilities</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Powering Next-Gen Creativity</h2>
                    <p className="text-text-muted text-lg">
                        Our AI engine isn't just a filter. It's a complete creative studio packaged into a simple API.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <SpotlightCard key={index} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SpotlightCard({ feature }: { feature: any }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-dark-surface p-8 group"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />

            {/* Border Spotlight */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 z-10"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(163, 230, 53, 0.1), transparent 40%)`,
                }}
            />

            <div className="relative z-20 flex flex-col items-start gap-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={32} className={`${feature.accent}`} strokeWidth={1.5} />
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">{feature.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{feature.desc}</p>
                </div>
            </div>
        </div>
    );
}
