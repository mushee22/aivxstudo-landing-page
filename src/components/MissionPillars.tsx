export default function MissionPillars() {
    return (
        <section className="bg-black py-24 px-6 border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">

                    <div className="space-y-4 md:border-r border-white/10 md:pr-8 last:border-0">
                        <h3 className="text-2xl font-bold text-white tracking-tight">Jewellery-First Technology</h3>
                        <p className="text-lg text-neutral-400 font-light leading-relaxed">
                            We build AI systems trained specifically for jewellery — not generic products — ensuring realistic lighting, reflections, and detailing.
                        </p>
                    </div>

                    <div className="space-y-4 md:border-r border-white/10 md:px-8 last:border-0">
                        <h3 className="text-2xl font-bold text-white tracking-tight">Speed & Scale</h3>
                        <p className="text-lg text-neutral-400 font-light leading-relaxed">
                            We enable brands to generate visuals in minutes and scale across hundreds or thousands of products without repeated shoots.
                        </p>
                    </div>

                    <div className="space-y-4 md:pl-8">
                        <h3 className="text-2xl font-bold text-white tracking-tight">Accessibility & Cost Efficiency</h3>
                        <p className="text-lg text-neutral-400 font-light leading-relaxed">
                            We make premium jewellery visuals affordable and accessible for brands of all sizes.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
