'use client';

export default function FaqHero() {
    return (
        <section className="bg-black py-20 px-6 text-center border-b border-white/5">
            <div className="max-w-4xl mx-auto space-y-6">
                <span className="text-neon-green text-sm font-medium tracking-widest uppercase block">
                    Help Center
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                    Frequently Asked Questions
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto">
                    Find answers about AIVX, jewellery product shoots, pricing, and usage.
                </p>
            </div>
        </section>
    );
}
