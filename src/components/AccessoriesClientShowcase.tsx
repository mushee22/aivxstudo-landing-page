'use client';

import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const AccessoriesBeforeAfterSliderContainer = dynamic(() => import('./AccessoriesBeforeAfterSliderContainer'), { ssr: false });

// ─── Data ────────────────────────────────────────────────────────────────────
const accessoriesCategories = [
    { name: 'Bag', href: '/product-shoot/accessories/ai-bag-product-photography', image: '/image/hero/accessories/bag-3.jpg', alt: 'AI generated handbag product photography' },
    { name: 'Watch', href: '/product-shoot/accessories/ai-watch-product-photography', image: '/image/hero/accessories/watch-4.jpg', alt: 'AI generated watch product photography' },
    { name: 'Perfume', href: '/product-shoot/accessories/ai-perfume-product-photography', image: '/image/hero/accessories/perfume-4.jpg', alt: 'AI generated perfume product photography' },
    { name: 'Cosmetics', href: '/product-shoot/accessories/ai-cosmetics-product-photography', image: '/image/hero/accessories/cosmetic-1.jpg', alt: 'AI generated cosmetics product photography' },
];

const accessoriesShots = [
    { src: '/image/hero/accessories/bag-3.jpg', label: 'Olive Ribbed Atelier' },
    { src: '/image/hero/accessories/watch-4.jpg', label: 'Cognac Leather Atelier' },
    { src: '/image/hero/accessories/perfume-4.jpg', label: 'Sunlit Plaster, Stone & Driftwood Minimalism' },
    { src: '/image/hero/accessories/bag-2.jpg', label: 'Burgundy Checkerboard Editorial Still Life' },
    { src: '/image/hero/accessories/watch-2.jpg', label: 'Scarlet Spotlight Cyclorama' },
    { src: '/image/hero/accessories/perfume-2.jpg', label: 'Olive Moss Basalt Zen' },
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
export default function AccessoriesClientShowcase() {
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
                        Accessories Photography <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-green to-emerald-400">in Action</span>
                    </h2>
                    <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
                        See how AIVX transforms plain accessory photos into studio-quality images — ready for ecommerce, ads, and social media.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-16">

                    {/* Categories */}
                    <div>
                        <SubsectionHeader
                            title="Browse Categories"
                            right={
                                <Link href="/product-shoot" className="text-sm text-gray-500 hover:text-neon-green transition-colors whitespace-nowrap">
                                    View all →
                                </Link>
                            }
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                            {accessoriesCategories.map(cat => <CategoryCard key={cat.name} {...cat} />)}
                        </div>
                    </div>

                    {/* Before / After */}
                    <div>
                        <SubsectionHeader title="Before & After" hint="— Drag the slider to compare" />
                        <AccessoriesBeforeAfterSliderContainer />
                    </div>

                    {/* Product Shots Gallery */}
                    <div>
                        <SubsectionHeader title="Studio-Quality Product Shots" />
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {accessoriesShots.map((shot, i) => (
                                <div key={i} className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-neon-green/30 transition-all duration-300">
                                    <Image src={shot.src} alt={shot.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-xs text-white font-medium">{shot.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-neon-green text-black px-8 py-4 rounded-full text-base font-bold hover:bg-lime-300 transition-all shadow-lg shadow-neon-green/20 hover:-translate-y-1"
                    >
                        Explore Accessories Options
                        <ArrowRight size={18} />
                    </Link>
                </div>

            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
