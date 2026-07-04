'use client';

import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import CTAbtn from './CTAbtn';

export default function AccessoriesFinalCTA() {
    return (
        <section className="py-12 md:py-16 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                <div className="w-full h-px bg-linear-to-r from-transparent via-neon-green/30 to-transparent mb-8" />

                <div className="flex flex-col items-center text-center gap-6">
                    {/* Heading */}
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                            Scale Your Accessories Brand with{' '}
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
                            Purchase Package Plan
                            <ArrowRight size={20} />
                        </CTAbtn>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-1"
                        >
                            Contact Sales
                        </Link>

                        <a
                            href="https://wa.me/919072020601"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-white border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all hover:-translate-y-1"
                        >
                            <Phone size={20} />
                            WhatsApp Us
                        </a>
                    </div>

                    <p className="text-gray-400 text-sm max-w-2xl">
                        Join 1000+ accessories brands creating premium product photography with AI — faster, better, and at 70-90% lower cost.
                    </p>
                </div>

                <div className="w-full h-px bg-linear-to-r from-transparent via-white/8 to-transparent mt-14" />

            </div>
        </section>
    );
}
