'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogCTA() {
    return (
        <section className="bg-neutral-900 border-t border-white/5 py-24 px-6">
            <div className="max-w-4xl mx-auto text-center space-y-10">

                {/* Headings */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        Ready to Create Studio-Quality Jewellery Visuals?
                    </h2>
                    <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Turn insights into action. Use AIVX to generate premium jewellery images and videos using AI.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Link
                        href="/contact"
                        className="group bg-neon-green text-black font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/20 flex items-center gap-2"
                    >
                        Contact Sales
                        <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
