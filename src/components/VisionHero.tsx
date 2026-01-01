'use client';

export default function VisionHero() {
    return (
        <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-black/90">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-purple-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-blue-900/10 to-transparent" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <span className="text-neon-green text-sm font-medium tracking-widest uppercase mb-6 block">Our Vision</span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                    Redefining How Jewellery Is Presented Online
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
                    To become the global standard for jewellery product visuals by replacing traditional photoshoots with intelligent, scalable AI-powered studios.
                </p>
            </div>
        </section>
    );
}
