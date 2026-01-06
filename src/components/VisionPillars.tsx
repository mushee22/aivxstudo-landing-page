export default function VisionPillars() {
    return (
        <section className="bg-black py-24 px-6 border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">

                    {/* Pillar 1 */}
                    <div className="space-y-4 md:border-r border-white/10 md:pr-8 last:border-0">
                        <h3 className="text-2xl font-bold text-white tracking-tight">Accessibility</h3>
                        <p className="text-lg text-neutral-400 font-light leading-relaxed">
                            Premium visuals without traditional barriers. We democratize studio quality for startups and enterprises alike.
                        </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="space-y-4 md:border-r border-white/10 md:px-8 last:border-0">
                        <h3 className="text-2xl font-bold text-white tracking-tight">Innovation</h3>
                        <p className="text-lg text-neutral-400 font-light leading-relaxed">
                            AI-first approach tailored for jewellery. We solve precise domain challenges like metal reflection and gem refractions.
                        </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="space-y-4 md:pl-8">
                        <h3 className="text-2xl font-bold text-white tracking-tight">Global Reach</h3>
                        <p className="text-lg text-neutral-400 font-light leading-relaxed">
                            Designed for brands selling anywhere in the world. Speed to market is our universal currency.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
