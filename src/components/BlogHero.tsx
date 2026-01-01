'use client';

export default function BlogHero() {
    return (
        <section className="bg-black py-24 px-6 md:py-32 border-b border-white/5">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <span className="text-neon-green text-sm font-medium tracking-widest uppercase block">
                    Blog
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                    Insights on AI, Jewellery & Ecommerce
                </h1>
                <div className="w-24 h-px bg-white/10 mx-auto my-8" />
                <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Articles, guides, and case studies on AI-powered jewellery product shoots, ecommerce visuals, and brand growth.
                </p>
            </div>
        </section>
    );
}
