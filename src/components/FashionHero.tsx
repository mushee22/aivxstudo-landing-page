'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FashionHero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const categories = [
        { src: '/image/hero/fashion/slider-image-new-six.webp', alt: "AI fashion photography of men's topwear" },
        { src: '/image/hero/fashion/slider-image-new-one.webp', alt: "AI fashion photography of men's ethnic wear kurta" },
        { src: '/image/hero/fashion/slider-image-new-two.webp', alt: "AI fashion photography of women's ethnic wear saree" },
        { src: '/image/hero/fashion/slider-image-five.webp', alt: "AI fashion photography of a flat-lay garment" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % categories.length);
                setIsAnimating(false);
            }, 700);
        }, 4000);
        return () => clearInterval(interval);
    }, [categories.length]);

    const handleViewCategories = () => {
        const section = document.getElementById('categories');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full bg-[#0A0A0A] text-white pt-32 lg:pt-40 pb-16 lg:pb-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Content */}
                <div className="space-y-8 z-10 order-2 lg:order-1">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-neon-green"></span>
                        <span className="text-neon-green font-medium tracking-widest uppercase text-xs lg:text-sm">
                            Fashion Product Shoot
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
                        AI Fashion<br />
                        <span className="text-neutral-500">Photography Studio</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg text-neutral-400 max-w-xl leading-relaxed font-light">
                        Create studio-quality fashion images and reel videos using AI on virtual models, without booking anyone.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button
                            onClick={handleViewCategories}
                            className="inline-flex cursor-pointer items-center justify-center gap-2 bg-neon-green text-black px-8 py-4 rounded-full font-bold text-base hover:bg-lime-300 transition-all shadow-lg shadow-neon-green/20 hover:-translate-y-0.5"
                        >
                            View Fashion Categories
                            <ArrowRight size={18} />
                        </button>
                        <Link
                            href="/pricing"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base border border-white/20 hover:bg-white hover:text-black transition-all"
                        >
                            Get Pricing
                        </Link>
                    </div>
                </div>

                {/* Right Visual - Three Column Slider */}
                <div className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full order-1 lg:order-2 overflow-hidden">
                    <div className="relative w-full h-full flex gap-3">

                        {/* Previous Image (Left - Small) */}
                        <div className="relative w-20 sm:w-24 md:w-28 rounded-2xl overflow-hidden opacity-40">
                            {categories.map((item, index) => (
                                <div
                                    key={`prev-${index}`}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === (currentIndex - 1 + categories.length) % categories.length
                                        ? 'opacity-100 translate-x-0'
                                        : index === (currentIndex - 2 + categories.length) % categories.length
                                            ? 'opacity-0 -translate-x-full'
                                            : 'opacity-0 translate-x-full'
                                        }`}
                                >
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-cover object-center"
                                            sizes="(max-width: 768px) 25vw, (max-width: 1280px) 10vw, 120px"
                                        />
                                        <div className="absolute inset-0 bg-black/40" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Current/Main Image (Center - Large) */}
                        <div className="relative flex-1 rounded-2xl overflow-hidden">
                            {categories.map((item, index) => (
                                <div
                                    key={`main-${index}`}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentIndex
                                        ? 'opacity-100 translate-x-0'
                                        : index === (currentIndex - 1 + categories.length) % categories.length
                                            ? 'opacity-0 -translate-x-full'
                                            : 'opacity-0 translate-x-full'
                                        }`}
                                >
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 group hover:border-neon-green/50 transition-all duration-500">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 70vw, (max-width: 1280px) 40vw, 500px"
                                            priority={index === 0}
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Next Preview Image (Right - Medium) */}
                        <div className="relative w-28 sm:w-32 md:w-36 rounded-2xl overflow-hidden opacity-50">
                            {categories.map((item, index) => (
                                <div
                                    key={`next-${index}`}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === (currentIndex + 1) % categories.length
                                        ? 'opacity-100 translate-x-0'
                                        : index === currentIndex
                                            ? 'opacity-0 -translate-x-full'
                                            : 'opacity-0 translate-x-full'
                                        }`}
                                >
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-cover object-center"
                                            sizes="(max-width: 768px) 30vw, (max-width: 1280px) 15vw, 150px"
                                        />
                                        <div className="absolute inset-0 bg-black/30" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Slider Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                        {categories.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    if (!isAnimating) {
                                        setIsAnimating(true);
                                        setTimeout(() => {
                                            setCurrentIndex(idx);
                                            setIsAnimating(false);
                                        }, 700);
                                    }
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-neon-green' : 'w-2 bg-white/30'
                                    }`}
                                aria-label={`Slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
