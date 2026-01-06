

export default function AboutVisionMission() {
    return (
        <section className="bg-dark-bg text-white border-b border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Vision Panel */}
                <div className="p-12 lg:p-24 bg-dark-surface border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center min-h-[500px] relative overflow-hidden group">
                    {/* Subtle Abstract Bg */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-neon-green/10 transition-colors duration-700" />

                    <div className="relative z-10">
                        <span className="text-neon-green font-medium tracking-widest text-xs uppercase mb-6 block">
                            Our Vision
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Redefine How Jewellery Is <span className="text-gray-400 block mt-2">Presented Online</span>
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed max-w-md font-light">
                            To become the global standard for jewellery product visuals by replacing traditional photoshoots with intelligent, scalable AI-powered studios.
                        </p>
                    </div>
                </div>

                {/* Mission Panel */}
                <div className="p-12 lg:p-24 bg-dark-bg flex flex-col justify-center min-h-[500px] relative overflow-hidden group">
                    {/* Subtle Abstract Bg */}
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-purple-900/20 transition-colors duration-700" />

                    <div className="relative z-10">
                        <span className="text-purple-400 font-medium tracking-widest text-xs uppercase mb-6 block">
                            Our Mission
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Make Premium Jewellery <span className="text-gray-400 block mt-2">Visuals Accessible</span>
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed max-w-md font-light">
                            To empower jewellery brands of all sizes with studio-quality images and videos that are faster to create, cost-effective, and ready for ecommerce and marketing.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
