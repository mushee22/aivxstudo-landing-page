import { FaqItem } from '@/data/faqs';

interface FaqDetailProps {
    faq: FaqItem;
}

export default function FaqDetail({ faq }: FaqDetailProps) {
    return (
        <article className="max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-8">
            <div className="space-y-6 text-center md:text-left">
                <span className="inline-block text-xs font-bold text-neon-green uppercase tracking-wider bg-neon-green/10 px-3 py-1 rounded-full">
                    {faq.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    {faq.question}
                </h1>
                {faq.lastUpdated && (
                    <p className="text-sm text-neutral-500 font-mono">
                        Last updated: {faq.lastUpdated}
                    </p>
                )}
            </div>
            <div className="prose prose-invert prose-lg max-w-none text-neutral-300 font-light leading-relaxed">
                <p>{faq.answer}</p>
            </div>
        </article>
    );
}
