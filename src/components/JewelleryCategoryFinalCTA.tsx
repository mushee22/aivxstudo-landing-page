import Link from 'next/link';

interface JewelleryCategoryFinalCTAProps {
    category: string;
}

export default function JewelleryCategoryFinalCTA({ category }: JewelleryCategoryFinalCTAProps) {
    const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);

    return (
        <section className="py-24 px-6 bg-dark-bg border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Ready to Transform Your <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
                        {displayCategory} Catalog?
                    </span>
                </h2>

                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Get studio-quality visuals at a fraction of the cost and time.
                    Book a demo or contact us for custom pricing.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/contact"
                        className="px-10 py-5 bg-neon-green text-black font-bold text-lg rounded-full hover:bg-neon-green/90 transition-all shadow-[0_0_20px_rgba(157,255,0,0.3)] hover:shadow-[0_0_30px_rgba(157,255,0,0.5)] transform hover:-translate-y-1 w-full sm:w-auto"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
