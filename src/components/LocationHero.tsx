'use client';

export default function LocationHero() {
    return (
        <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-black/90">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-neutral-900 to-transparent" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <span className="text-neon-green text-sm font-medium tracking-widest uppercase mb-6 block">Our Location</span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Where AIVX Operates
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
                    We operate digitally while serving jewellery brands across India and globally.
                </p>
            </div>
        </section>
    );
}
