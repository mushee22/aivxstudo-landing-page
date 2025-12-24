
'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "What file types do you support?",
            a: "We currently support JPG, PNG, and WEBP formats up to 25MB. High-quality inputs yield the best results. Animation exports are available in MP4 and GIF."
        },
        {
            q: "Do I need design skills to use this?",
            a: "Not at all. Our platform is designed for marketers and creators of all skill levels. Simply upload your image, select a theme, and let our AI handle the complex lighting and compositing work."
        },
        {
            q: "How fast is the generation process?",
            a: "Most transformations complete in under 10 seconds. 4K upscaling and video generation may take slightly longer (up to 30 seconds) depending on server load."
        },
        {
            q: "Is my data private and secure?",
            a: "Yes. Your uploaded images are processed securely on enterprise-grade encrypted servers and deleted shortly after generation. We do not use your private data to train our public models without explicit permission."
        },
        {
            q: "Can I use the images commercially?",
            a: "Absolutely. You own full commercial rights to all images and videos you generate on our paid plans, making them safe for ads, social media, and client work."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 px-6 bg-dark-bg">
            <div className="max-w-3xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-text-muted mb-2">
                        <HelpCircle size={14} />
                        <span>Support</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h2>
                    <p className="text-text-muted text-lg">Everything you need to know about the product and billing.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === i ? 'bg-white/5 border-neon-green/30 shadow-[0_0_15px_-5px_var(--neon-glow)]' : 'bg-dark-surface border-white/5 hover:border-white/10'}`}
                        >
                            <button
                                onClick={() => toggleFAQ(i)}
                                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                            >
                                <span className={`font-bold text-lg transition-colors ${openIndex === i ? 'text-white' : 'text-white/80'}`}>
                                    {faq.q}
                                </span>
                                <div className={`p-1 rounded-full border transition-all ${openIndex === i ? 'bg-neon-green text-black border-neon-green rotate-180' : 'border-white/10 text-text-muted'}`}>
                                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>

                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-text-muted leading-relaxed border-t border-white/5 mt-2">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-8 rounded-3xl bg-linear-to-r from-dark-surface to-white/5 border border-white/10 text-center space-y-4">
                    <h3 className="text-xl font-bold text-white">Still have questions?</h3>
                    <p className="text-text-muted">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    <Link href="/contact" className="inline-block bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-neon-green transition-colors mt-2">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}
