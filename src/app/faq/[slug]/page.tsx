import { faqs } from '@/data/faqs';
import FaqDetail from '@/components/faq/FaqDetail';
import FaqNavigation from '@/components/faq/FaqNavigation';
import FaqRelated from '@/components/faq/FaqRelated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface FaqPageProps {
    params: {
        slug: string;
    };
}

// 1. Generate Static Params at Build Time
export async function generateStaticParams() {
    return faqs.map((faq) => ({
        slug: faq.slug,
    }));
}

// 2. Generate Metadata
export async function generateMetadata({ params }: FaqPageProps): Promise<Metadata> {
    const { slug } = await params;

    const faq = faqs.find((f) => f.slug === slug);

    if (!faq) {
        return {
            title: 'FAQ Not Found | AIVX',
        };
    }

    return {
        title: `${faq.question} | AIVX FAQ`,
        description: faq.answer.slice(0, 160) + '...',
        alternates: {
            canonical: `https://aivx.in/faq/${faq.slug}`,
        },
        openGraph: {
            title: `${faq.question} | AIVX FAQ`,
            description: faq.answer.slice(0, 160) + '...',
            url: `https://aivx.in/faq/${faq.slug}`,
            type: 'article',
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

// 3. Page Component
export default async function FaqDetailPage({ params }: FaqPageProps) {
    const { slug } = await params;
    const faq = faqs.find((f) => f.slug === slug);

    if (!faq) {
        notFound();
    }

    // Get related FAQs: Same category, exclude current, limit to 3
    const relatedFaqs = faqs
        .filter((f) => f.category === faq.category && f.id !== faq.id)
        .slice(0, 3);

    // Schema for single FAQ
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            },
        ],
    };

    return (
        <main className="bg-black min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="pt-24 pb-24">
                <FaqNavigation />
                <FaqDetail faq={faq} />
            </div>

            <FaqRelated relatedFaqs={relatedFaqs} />
        </main>
    );
}
