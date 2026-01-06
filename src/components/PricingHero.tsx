import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PricingHero() {
    return (
        <section className="relative py-24 md:py-32 px-6 flex flex-col items-center text-center overflow-hidden border-b border-white/5 bg-dark-bg">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium backdrop-blur-md">
                    <span>Flexible Plans for Everyone</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                    Pricing <span className="text-neon-green">Plans</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Create studio-quality jewellery images and videos using AI — at a fraction of traditional photoshoot cost.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Link
                        href="/contact"
                        className="bg-neon-green text-black px-8 py-3.5 rounded-full font-bold hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] flex items-center justify-center gap-2"
                    >
                        Contact Sales
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
