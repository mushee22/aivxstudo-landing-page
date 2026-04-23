'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function ContactFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "How quickly does AIVX respond to enquiries?",
            a: "AIVX responds to all enquiries within one business day. For urgent requests, WhatsApp is the fastest way to reach the team at +91 90720 20601."
        },
        {
            q: "Can I use AIVX for both jewellery and fashion photography?",
            a: "Yes. AIVX supports both jewellery and fashion product photography under one account. Jewellery categories include rings, earrings, necklaces, bangles, and pendant sets. Fashion categories include sarees, kurtas, lehengas, Western wear, and accessories. There is no separate subscription for each category."
        },
        {
            q: "Does AIVX offer custom pricing for large catalogues or agencies?",
            a: "Yes. AIVX has an Enterprise Plan for brands with high monthly image volumes, agencies managing multiple clients, and businesses with custom production requirements. Contact the team directly at aivxproductions@gmail.com or through the form on this page to discuss your volume and get a tailored plan."
        },
        {
            q: "Can agencies use AIVX for multiple clients?",
            a: "Yes. Agencies can use AIVX to generate product images for multiple clients across both jewellery and fashion categories. The Enterprise Plan includes team access, custom credit volumes, and dedicated support. Contact the AIVX team to arrange an agency setup."
        },
        {
            q: "Does AIVX work for Indian ethnic wear like sarees and kurtas?",
            a: "Yes. AIVX's fashion photography category is specifically built to handle Indian ethnic wear including sarees, kurtas, lehengas, salwar suits, and dupattas. It supports AI model placement with both Indian and international models, which is particularly useful for brands selling on Meesho, Nykaa Fashion, and Instagram."
        },
        {
            q: "Is AIVX based in India?",
            a: "Yes. AIVX is based in Kozhikode, Kerala, India. The office is at 2nd Floor, UL Cyberpark, Nellikode, Kozhikode, Kerala 673016. The team works with brands across India and internationally."
        },
        {
            q: "What information should I include in my message?",
            a: "The most helpful details to include are: your product category (jewellery, fashion, or both), the approximate number of products in your catalogue, which platforms you sell on (Shopify, Etsy, Amazon, Meesho, Instagram), and what you are currently using for product photography. This helps the AIVX team give you a relevant, specific reply on the first response."
        },
        {
            q: "Can I try AIVX before contacting the team?",
            a: "Yes. AIVX has a free trial available at studio.aivx.in/signup. You can generate your first product images immediately without needing to speak to the team. The contact form is best for custom requirements, agency setups, or if you have questions before signing up."
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
        <section id="faq" className="py-24 px-6 bg-black border-t border-white/5">
            {/* Add FAQ Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        <HelpCircle size={14} />
                        <span>FAQ</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h2>
                    <p className="text-gray-400 text-lg">Common questions about AIVX and our professional services.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === i ? 'bg-white/5 border-neon-green/30 shadow-[0_0_15px_-5px_var(--neon-green-glow)]' : 'bg-dark-surface border-white/5 hover:border-white/10'}`}
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
            </div>
        </section>
    );
}
