export default function JewelleryOverview() {
    return (
        <section className="bg-[#0A0A0A] py-24 px-6 border-b border-white/5">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Built Exclusively for Jewellery Product Shoots
                </h2>

                {/* Divider */}
                <div className="w-16 h-px bg-white/20 mx-auto"></div>

                {/* Body Copy */}
                <div className="space-y-6 text-lg text-neutral-400 font-light leading-relaxed">
                    <p>
                        AIVX is an AI-powered studio designed specifically for jewellery product shoots.
                    </p>
                    <p>
                        From intricate rings to detailed bangles, our system understands reflections,
                        materials, lighting, and proportions — delivering studio-quality images and
                        short videos without the need for physical setups.
                    </p>
                    <p>
                        Every output is optimized for ecommerce, marketing, and brand storytelling.
                    </p>
                </div>
            </div>
        </section>
    );
}
