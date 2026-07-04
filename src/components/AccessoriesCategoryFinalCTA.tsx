'use client';

import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import CTAbtn from './CTAbtn';

interface AccessoriesCategoryFinalCTAProps {
    category: string;
}

export default function AccessoriesCategoryFinalCTA({ category }: AccessoriesCategoryFinalCTAProps) {
    const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);

    return (
        <section className="py-12 md:py-16 px-6 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto">

                <div className="w-full h-px bg-linear-to-r from-transparent via-neon-green/30 to-transparent mb-8" />

                <div className="flex flex-col items-center text-center gap-6">
                    {/* Heading */}
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                            Scale Your {displayCategory} Brand with{' '}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-green to-emerald-400">
                                AI-Powered
                            </span>{' '}
                            Premium Visual Production
                        </h2>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <CTAbtn
                            href="https://studio.aivx.in/signup"
                            className="inline-flex items-center gap-2 bg-neon-green text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-lg shadow-neon-green/20 hover:-translate-y-1 transform duration-200"
                        >
                            Get Started Instantly
                            <ArrowRight size={20} />
                        </CTAbtn>
                    </div>

                    <p className="text-gray-400 text-sm max-w-2xl">
                        Join 1000+ brands generating premium {category} photography with AIVX — faster, better, and at 70-90% lower cost.
                    </p>
                </div>

                <div className="w-full h-px bg-linear-to-r from-transparent via-white/8 to-transparent mt-14" />

            </div>
        </section>
    );
}
