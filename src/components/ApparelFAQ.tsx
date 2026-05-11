'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function ApparelFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "What is included in each pricing plan?",
            a: "Credit-based access to AI image, regeneration, and video generation features depending on selected package."
        },
        {
            q: "Can I upgrade my plan later?",
            a: "Yes, anytime."
        },
        {
            q: "Can this replace traditional apparel shoots?",
            a: "Yes, for most ecommerce, catalogue, and ad production needs."
        },
        {
            q: "Do credits expire?",
            a: "Usage depends on selected plan terms."
        },
        {
            q: "Will I own generated visuals?",
            a: "Yes, all purchased assets support commercial use."
        },
        {
            q: "Do you offer enterprise workflows?",
            a: "Yes, including API access and custom production pipelines."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Schema.org JSON-LD for Google FAQ Snippets
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <section id="faq" className="py-24 px-6 bg-dark-bg border-t border-white/5">
            {/* Add FAQ Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-3xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-2">
                        <HelpCircle size={14} />
                        <span>Support</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h2>
                    <p className="text-gray-400 text-lg">Everything you need to know about AI apparel photography.</p>
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
                                <div className={`p-1 rounded-full border transition-all ${openIndex === i ? 'bg-neon-green text-black border-neon-green rotate-180' : 'border-white/10 text-gray-400'}`}>
                                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>

                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-8 rounded-3xl bg-linear-to-r from-dark-surface to-white/5 border border-white/10 text-center space-y-4">
                    <h3 className="text-xl font-bold text-white">Still have questions?</h3>
                    <p className="text-gray-400">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    <Link href="/contact" className="inline-block bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-neon-green transition-colors mt-2">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}
