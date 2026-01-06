

export default function AboutHero() {
    return (
        <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden bg-dark-bg border-b border-white/5">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Eyebrow */}
                <span className="text-neon-green font-medium tracking-widest text-sm mb-6 uppercase inline-block">
                    About AIVX
                </span>

                {/* H1 Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                    Reimagining Jewellery <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
                        Product Shoots with AI
                    </span>
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    AIVX is an AI-powered studio built to help jewellery brands create studio-quality images and videos faster, smarter, and at a lower cost.
                </p>
            </div>
        </section>
    );
}
