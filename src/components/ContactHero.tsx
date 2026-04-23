export default function ContactHero() {

    return (
        <section className="relative w-full pt-12 md:pt-20 bg-dark-bg flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <span className="text-neon-green font-medium tracking-widest text-sm mb-6 uppercase inline-block">
                    Contact Us
                </span>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Need Better Product Photos Without a Studio? Contact AIVX.
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Our team helps jewellery brands, fashion labels, ecommerce sellers, and agencies create professional product images without booking a studio or photographer.
                </p>
            </div>
        </section>
    );
}
