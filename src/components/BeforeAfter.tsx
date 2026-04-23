'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import { Gem, Shirt } from 'lucide-react';

const BeforeAfterSliderContainer = dynamic(() => import('./BeforeAfterSliderContainer'), { ssr: false });

const fashionOutputs = [
    { src: '/image/fashion-gen-1.png', label: 'Front · White Studio' },
    { src: '/image/fashion-gen-2.png', label: 'Close-up · Detail' },
    { src: '/image/fashion-gen-3.png', label: 'Upper Body · Grey BG' },
    { src: '/image/fashion-gen-4.png', label: 'Full Body · Studio' },
    { src: '/image/fashion-gen-5.png', label: 'Side View · Light BG' },
    { src: '/image/fashion-gen-6.png', label: 'Close-up · Embroidery' },
    { src: '/image/fashion-gen-7.png', label: 'Three-quarter · Studio' },
    { src: '/image/fashion-gen-8.png', label: 'Upper Body · Outdoor' },
    { src: '/image/fashion-gen-9.png', label: 'Full Body · Lifestyle' },
    { src: '/image/fashion-gen-10.png', label: 'Editorial · Heritage' },
];

type Tab = 'jewellery' | 'fashion';

export default function BeforeAfter() {
    const [activeTab, setActiveTab] = useState<Tab>('jewellery');

    return (
        <section className="py-20 px-6 bg-dark-bg border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* ── Header + Switcher ── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <p className="text-xs font-semibold text-neon-green uppercase tracking-[0.2em] mb-3">Before & After</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            See AIVX in Action
                        </h2>
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex items-center p-1 rounded-xl bg-dark-surface border border-white/10 gap-1 self-start md:self-auto">
                        <button
                            onClick={() => setActiveTab('jewellery')}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                activeTab === 'jewellery'
                                    ? 'bg-neon-green text-black shadow-sm'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            <Gem size={15} />
                            Jewellery
                        </button>
                        <button
                            onClick={() => setActiveTab('fashion')}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                activeTab === 'fashion'
                                    ? 'bg-neon-green text-black shadow-sm'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            <Shirt size={15} />
                            Fashion
                        </button>
                    </div>
                </div>

                {/* ── Jewellery Panel ── */}
                {activeTab === 'jewellery' && (
                    <div>
                        <p className="text-gray-400 text-base mb-8 max-w-xl">
                            Drag the slider to see how AIVX transforms a plain smartphone photo into a studio-quality jewellery product image.
                        </p>
                        <BeforeAfterSliderContainer />
                    </div>
                )}

                {/* ── Fashion Panel ── */}
                {activeTab === 'fashion' && (
                    <div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">One Upload. Ten Ready-to-Use Shots.</h3>
                                <p className="text-gray-400 text-base max-w-md">
                                    Upload one flat-lay or hanger photo and get 10 professional model shots — different angles, backgrounds, and styles — instantly.
                                </p>
                            </div>
                        </div>

                        {/* Layout: Input + Arrow + Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">

                            {/* Input image */}
                            <div className="lg:col-span-1 flex flex-col gap-3">
                                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-dark-surface">
                                    <Image
                                        src="/image/fashion-raw-upload.png"
                                        alt="Raw fashion product upload"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full">
                                        <span className="text-xs font-semibold text-gray-300">Your Upload</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600 text-center">1 plain product photo</p>

                                {/* Desktop arrow */}
                                <div className="hidden lg:flex flex-col items-center gap-1 py-2">
                                    <div className="w-px h-6 bg-white/10" />
                                    <span className="text-neon-green text-xl leading-none">↓</span>
                                    <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">10 AI shots</p>
                                </div>
                            </div>

                            {/* Mobile arrow */}
                            <div className="flex lg:hidden items-center gap-3 -my-1">
                                <div className="h-px flex-1 bg-white/10" />
                                <span className="text-neon-green text-xl">→</span>
                                <p className="text-[10px] text-gray-600 uppercase tracking-widest">10 AI shots</p>
                                <div className="h-px flex-1 bg-white/10" />
                            </div>

                            {/* Output grid */}
                            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                                {fashionOutputs.map((output, index) => (
                                    <div key={index} className="group flex flex-col gap-1.5">
                                        <div className="relative aspect-square rounded-xl overflow-hidden border border-white/8 bg-dark-surface hover:border-neon-green/30 transition-colors duration-300">
                                            <Image
                                                src={output.src}
                                                alt={output.label}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                                                <span className="text-[10px] font-bold text-white">{index + 1}</span>
                                            </div>
                                        </div>
                                        <p className="text-[10px] text-gray-600 text-center leading-tight">{output.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom note */}
                        <div className="mt-6 flex items-center gap-3">
                            <div className="h-px flex-1 bg-white/5" />
                            <p className="text-xs text-gray-600 text-center px-4">
                                All 10 shots generated from a single product image · No model booking · No studio required
                            </p>
                            <div className="h-px flex-1 bg-white/5" />
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
