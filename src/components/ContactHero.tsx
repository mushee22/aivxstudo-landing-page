'use client';

import { ArrowDown } from 'lucide-react';

export default function ContactHero() {
    const handleScrollToForm = () => {
        const contactSection = document.getElementById('contact-section');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative w-full h-[60vh] min-h-[500px] bg-dark-bg flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <span className="text-neon-green font-medium tracking-widest text-sm mb-6 uppercase inline-block">
                    Contact Us
                </span>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Get in Touch with <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-green to-white">
                        AIVX Studio
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Have questions about AI jewellery product shoots, pricing, or custom requirements?
                    Our team is here to help you scale your visual content.
                </p>

                <button
                    onClick={handleScrollToForm}
                    className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-neon-green transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.2)] mx-auto group cursor-pointer"
                >
                    Send a Message
                    <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                </button>
            </div>
        </section>
    );
}
