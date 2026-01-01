import { Metadata } from 'next';
import FaqClientWrapper from '@/components/faq/FaqClientWrapper';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
    title: 'Jewellery Product Shoot FAQs | AIVX Help Center',
    description: 'Find answers to common questions about AI jewellery product shoots, pricing, images, videos, and using the AIVX platform.',
    alternates: {
        canonical: 'https://aivx.in/faq',
    },
    openGraph: {
        title: 'Jewellery Product Shoot FAQs | AIVX Help Center',
        description: 'Answers to common questions about AI jewellery product shoots, pricing, and usage.',
        url: 'https://aivx.in/faq',
        type: 'website',
        images: [
            {
                url: '/images/jewellery-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'AIVX Help Center',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function FaqPage() {
    // Generate FAQ Schema
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <FaqClientWrapper />
        </>
    );
}
