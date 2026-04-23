'use client';

import Link from 'next/link';
import CTAbtn from './CTAbtn';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
    return (
        <section className="py-20 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                <div className="w-full h-px bg-linear-to-r from-transparent via-neon-green/30 to-transparent mb-14" />

                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
                    {/* Statement */}
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                            Start Creating Product Photos<br />
                            <span className="text-neon-green">Without a Studio</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-2">
                            Generate your first AI product image for your jewellery or fashion brand today.
                            No studio booking. No photographer. No waiting.
                        </p>
                        <p className="text-neon-green text-xs font-semibold uppercase tracking-widest">
                            Your first images are free.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-5 shrink-0">
                        <CTAbtn
                            text="Try AIVX Free"
                            className="bg-neon-green text-black px-8 py-3.5 rounded-full text-base font-bold hover:bg-lime-300 transition-all hover:scale-[1.03] active:scale-95"
                        />
                        <Link
                            href="/pricing"
                            className="group flex items-center gap-2 text-base text-gray-400 font-medium hover:text-white transition-colors"
                        >
                            See Pricing
                            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="w-full h-px bg-linear-to-r from-transparent via-white/8 to-transparent mt-14" />

            </div>
        </section>
    );
}
