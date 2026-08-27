'use client';

const intents = [
    "An AI fashion photography tool for clothing brands and boutiques",
    "AI jewellery photography software for rings, necklaces, earrings, and sets",
    "A way to create product photos without a studio or photographer",
    "An AI model photo generator for fashion and jewellery",
    "Jewellery photo editing and background replacement using AI",
    "A lookbook generator for Indian fashion brands",
    "Consistent product images for Etsy, Meesho, Shopify, and Amazon sellers",
    "The best AI photography software for e-commerce product shoots",
    "An easy-to-use product photography AI for online sellers",
    "Automated AI photography for cataloguing and social media",
];

export default function SearchIntent() {
    return (
        <section className="py-20 px-6 bg-dark-bg border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

                    {/* Left: Sticky heading */}
                    <div className="lg:col-span-2">
                        <p className="text-xs font-semibold text-neon-green uppercase tracking-[0.2em] mb-3">Tailored Solutions</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                            AI Fashion &amp; AI Jewellery Photography in One Place
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed">
                            If you have been searching for AI for product photography or any of the following, AIVX is built to answer those needs directly.
                        </p>
                    </div>

                    {/* Right: Numbered list */}
                    <div className="lg:col-span-3 flex flex-col divide-y divide-white/8">
                        {intents.map((intent, index) => (
                            <div
                                key={index}
                                className="group flex items-start gap-5 py-5 first:pt-0 last:pb-0"
                            >
                                <span className="text-sm font-mono text-gray-600 group-hover:text-neon-green transition-colors pt-0.5 flex-shrink-0 w-6">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <p className="text-base text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
                                    {intent}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
