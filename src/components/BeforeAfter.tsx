
'use client';

import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import MediaModal from './MediaModal';

export default function BeforeAfter() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const slides = [
        {
            title: "Product Studio",
            desc: "Turn simple product shots into professional marketing assets.",
            color: "from-blue-500 to-cyan-500",
            input: "https://picsum.photos/id/1/400/500",
            outputs: [
                "https://picsum.photos/id/11/400/400",
                "https://picsum.photos/id/12/400/400",
                "https://picsum.photos/id/13/400/400",
                "https://picsum.photos/id/14/400/400"
            ]
        },
        {
            title: "Lifestyle Scenes",
            desc: "Place your product in realistic AI-generated environments.",
            color: "from-purple-500 to-pink-500",
            input: "https://picsum.photos/id/20/400/500",
            outputs: [
                "https://picsum.photos/id/21/400/400",
                "https://picsum.photos/id/22/400/400",
                "https://picsum.photos/id/23/400/400",
                "https://picsum.photos/id/24/400/400"
            ]
        },
        {
            title: "Creative Concepts",
            desc: "Generate artistic and abstract concepts for brand awareness.",
            color: "from-neon-green to-emerald-500",
            input: "https://picsum.photos/id/30/400/500",
            outputs: [
                "https://picsum.photos/id/31/400/400",
                "https://picsum.photos/id/32/400/400",
                "https://picsum.photos/id/33/400/400",
                "https://picsum.photos/id/34/400/400"
            ]
        },
        {
            title: "Seasonal Promo",
            desc: "Instantly thematic backgrounds for holiday campaigns.",
            color: "from-orange-500 to-red-500",
            input: "https://picsum.photos/id/40/400/500",
            outputs: [
                "https://picsum.photos/id/41/400/400",
                "https://picsum.photos/id/42/400/400",
                "https://picsum.photos/id/43/400/400",
                "https://picsum.photos/id/44/400/400"
            ]
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="py-24 px-6 bg-dark-bg overflow-hidden">
            <MediaModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                type="image"
                src={selectedImage || ''}
            />

            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Instant Transformation</h2>
                    <p className="text-text-muted text-lg">See how AIVX transforms a single input into endless possibilities.</p>
                </div>

                <div className="relative group/slider">
                    {/* Slider Controls */}
                    <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-dark-surface border border-white/10 text-white hover:text-neon-green hover:border-neon-green transition-all shadow-lg cursor-pointer"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20">
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-dark-surface border border-white/10 text-white hover:text-neon-green hover:border-neon-green transition-all shadow-lg cursor-pointer"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Carousel Track */}
                    <div className="overflow-hidden px-4 md:px-0">
                        <div
                            className="flex gap-6 transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * 50}%)`
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className="min-w-full md:min-w-[calc(50%-12px)] bg-dark-surface border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden group shrink-0"
                                >
                                    {/* Dynamic Accent Top Border */}
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${slide.color}`} />

                                    <div className="flex flex-col gap-6">
                                        {/* Transformation Row (More Compact) */}
                                        <div className="flex items-center justify-between gap-4">
                                            {/* Input */}
                                            <div
                                                className="relative w-1/3 aspect-[3/4] bg-black/40 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center cursor-pointer hover:border-neon-green/50 transition-colors group/input"
                                                onClick={() => setSelectedImage(slide.input)}
                                            >
                                                <img src={slide.input} alt="Input" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/input:opacity-80 transition-opacity" />
                                                <div className="relative z-10 text-center p-2 bg-black/30 backdrop-blur-sm rounded-lg">
                                                    <p className="text-[10px] text-white font-bold uppercase tracking-wider">Input</p>
                                                </div>
                                                <div className="absolute top-2 right-2 text-white/50 group-hover/input:text-white transition-colors">
                                                    <Maximize2 size={12} />
                                                </div>
                                            </div>

                                            {/* Arrow */}
                                            <div className="text-neon-green shrink-0">
                                                <ArrowRight size={24} className="animate-pulse" />
                                            </div>

                                            {/* Output Grid (2x2) */}
                                            <div className="w-1/2 grid grid-cols-2 gap-2">
                                                {slide.outputs.map((imgSrc, i) => (
                                                    <div
                                                        key={i}
                                                        className="relative aspect-square bg-black/40 rounded-lg border border-white/10 overflow-hidden group-hover:border-neon-green/30 transition-colors cursor-pointer hover:scale-105 duration-200"
                                                        onClick={() => setSelectedImage(imgSrc)}
                                                    >
                                                        <img src={imgSrc} alt={`Result ${i}`} className="absolute inset-0 w-full h-full object-cover" />
                                                        <div className={`absolute inset-0 bg-linear-to-br ${slide.color} opacity-0 hover:opacity-10 transition-opacity`} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Text Info */}
                                        <div className="border-t border-white/5 pt-4">
                                            <h3 className="text-lg font-bold text-white mb-1">{slide.title}</h3>
                                            <p className="text-sm text-text-muted line-clamp-2">{slide.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`transition-all rounded-full ${idx === currentIndex ? 'w-8 h-2 bg-neon-green' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

