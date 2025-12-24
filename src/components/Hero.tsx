import Link from 'next/link';

export default function Hero() {
    // Using simplified placeholders for the marquee
    // Creating an array of 8 items to simulate the carousel content
    const items = Array.from({ length: 8 });

    return (
        <section className="relative pt-32 pb-0 px-0 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-dark-bg">

            {/* Grid Pattern Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8 mb-20">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-text-muted">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                    </span>
                    New AI Model v2.0 Live
                </div>

                {/* Removed italic, using standard sans-serif (Inter from global) */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                    Create <span className="text-neon-green inline-block border-b-4 border-neon-green/30 pr-2">Winning</span> <br />
                    Ads in Seconds
                </h1>

                <p className="text-xl text-text-muted max-w-2xl mx-auto font-normal">
                    AIVX turns product photos & market insights into high-ROAS video/image ads instantly.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <Link
                        href="/contact"
                        className="bg-neon-green text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.4)] hover:shadow-[0_0_30px_rgba(163,230,53,0.6)] hover:scale-105 cursor-pointer min-w-[180px]"
                    >
                        Book Demo
                    </Link>
                </div>
            </div>

            {/* Infinite Scroll Image Marquee using CSS Placeholders */}
            <div className="w-full relative z-10 pb-20">
                <div className="flex w-full overflow-hidden mask-gradient">
                    <div className="flex gap-6 animate-scroll whitespace-nowrap py-4 px-6 hover:[animation-play-state:paused]">
                        {/* Looping the items array twice for infinite scroll seamlessness */}
                        {[...items, ...items].map((_, i) => (
                            <div key={i} className="relative w-[280px] h-[420px] rounded-2xl overflow-hidden border border-white/10 shrink-0 group hover:border-neon-green/50 transition-colors shadow-2xl bg-dark-surface flex flex-col">
                                {/* Placeholder Graphic */}
                                <div className={`h-2/3 w-full bg-linear-to-br ${i % 4 === 0 ? 'from-purple-900 to-indigo-900' :
                                    i % 4 === 1 ? 'from-blue-900 to-cyan-900' :
                                        i % 4 === 2 ? 'from-emerald-900 to-teal-900' :
                                            'from-rose-900 to-pink-900'
                                    } p-4 relative`}>
                                    <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-neon-green border border-neon-green/20">
                                        GENERATED
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 text-xs">
                                            AI
                                        </div>
                                    </div>
                                </div>

                                {/* Placeholder Content */}
                                <div className="h-1/3 bg-black/40 p-4 space-y-3">
                                    <div className="h-4 w-3/4 bg-white/10 rounded" />
                                    <div className="h-3 w-1/2 bg-white/5 rounded" />
                                    <div className="mt-4 flex gap-2">
                                        <div className="h-2 w-2 rounded-full bg-neon-green" />
                                        <div className="h-2 w-2 rounded-full bg-white/20" />
                                        <div className="h-2 w-2 rounded-full bg-white/20" />
                                    </div>
                                </div>

                                <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-neon-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-dark-bg to-transparent z-20 pointer-events-none" />

        </section>
    );
}
