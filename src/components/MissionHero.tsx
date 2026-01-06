export default function MissionHero() {
    return (
        <section className="relative w-full pt-12 md:pt-24 flex items-center justify-center overflow-hidden bg-black/90">
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-purple-900/20 to-transparent" />
                <div className="absolute bottom-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-900/10 to-transparent" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <span className="text-neon-green text-sm font-medium tracking-widest uppercase mb-6 block">Our Mission</span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                    Making Premium Jewellery Visuals Effortless
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
                    Our mission is to help jewellery brands create studio-quality images and videos faster, smarter, and at a lower cost using AI.
                </p>
            </div>
        </section>
    );
}
