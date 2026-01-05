'use client';

import Image from 'next/image';
import Link from 'next/link';

const categories = [
    {
        name: 'Ring',
        href: '/product-shoot/jewellery/ring',
        image: '/theme/ring/cream-theme.jpg',
        color: 'from-rose-500/20 to-orange-500/20'
    },
    {
        name: 'Ear Ring',
        href: '/product-shoot/jewellery/ear-ring',
        image: '/theme/earring/rose-amber-theme.png',
        color: 'from-purple-500/20 to-indigo-500/20'
    },
    {
        name: 'Pendant Set',
        href: '/product-shoot/jewellery/pendant-set',
        image: '/theme/pendant-set/navy-blue-theme.png',
        color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        name: 'Necklace',
        href: '/product-shoot/jewellery/necklace',
        image: '/theme/necklace/white-theme.png',
        color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
        name: 'Necklace Set',
        href: '/product-shoot/jewellery/necklace-set',
        image: '/theme/necklace-set/light-green-theme.png',
        color: 'from-amber-500/20 to-yellow-500/20'
    },
    {
        name: 'Bangle',
        href: '/product-shoot/jewellery/bangle',
        image: '/theme/bangle/brown-theme.png',
        color: 'from-pink-500/20 to-rose-500/20'
    },
];

export default function JewelleryCategories() {
    return (
        <section id="categories" className="py-24 px-6 bg-dark-bg border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Jewellery Categories</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore AI-powered product shoots for every jewellery type.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            href={category.href}
                            className="group block relative overflow-hidden rounded-2xl bg-dark-surface border border-white/10 hover:border-neon-green/50 transition-all duration-500"
                        >
                            {/* Image Placeholder Area */}
                            <div
                                className={`h-64 w-full bg-linear-to-br ${category.color} flex items-center justify-center relative overflow-hidden`}
                            >
                                {/* Decorative elements for premium feel */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.5),transparent)]" />
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover"
                                />

                                <span className="text-white/20 font-bold text-6xl opacity-20 group-hover:scale-110 transition-transform duration-700 select-none">
                                    {category.name.charAt(0)}
                                </span>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                            </div>

                            {/* Text Content */}
                            <div className="p-6 text-center relative z-10 bg-dark-surface group-hover:bg-white/5 transition-colors duration-300">
                                <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors flex items-center justify-center gap-2">
                                    {category.name}
                                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                        →
                                    </span>
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
