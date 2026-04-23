export default function FashionOverview() {
    return (
        <section className="bg-[#0A0A0A] py-24 px-6 border-b border-white/5">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Built for Fashion Brands &amp; Ecommerce Sellers
                </h2>

                {/* Divider */}
                <div className="w-16 h-px bg-white/20 mx-auto"></div>

                {/* Body Copy */}
                <div className="space-y-6 text-lg text-neutral-400 font-light leading-relaxed">
                    <p>
                        AIVX is an AI-powered studio designed specifically for fashion product shoots.
                    </p>
                    <p>
                        From ethnic sarees to contemporary streetwear, our system places your apparel on realistic AI models — Indian and international — without booking a single model or arranging a studio.
                    </p>
                    <p>
                        Every output is optimized for ecommerce listings, social media reels, and brand storytelling at scale.
                    </p>
                </div>
            </div>
        </section>
    );
}
