export type FaqCategory = 'General' | 'Product Shoot' | 'Pricing' | 'Jewellery' | 'Images & Videos' | 'Account & Usage';

export interface FaqItem {
    id: string;
    slug: string;
    question: string;
    answer: string;
    category: FaqCategory;
    lastUpdated?: string;
}

export const faqs: FaqItem[] = [
    {
        id: '1',
        slug: 'what-is-aivx',
        question: 'What is AIVX?',
        answer: 'AIVX is an AI-powered studio built specifically for jewellery brands. It allows you to generate studio-quality images and videos of your jewellery products without the need for physical photoshoots, models, or expensive equipment. We use advanced AI models trained on gemology and metal physics to ensure realistic results.',
        category: 'General',
        lastUpdated: 'October 2024'
    },
    {
        id: '2',
        slug: 'how-does-product-shoot-work',
        question: 'How does the Product Shoot feature work?',
        answer: 'You simply upload a basic photo of your jewellery piece. Our AI analyzes the product, identifies the metal and gemstones, and then places it into a premium setting of your choice. You can choose from various themes, lighting conditions, and backgrounds to match your brand aesthetic.',
        category: 'Product Shoot',
        lastUpdated: 'October 2024'
    },
    {
        id: '3',
        slug: 'pricing-plans-explained',
        question: 'How does AIVX pricing work?',
        answer: 'AIVX operates on a credit-based system. You purchase credits which are then used to generate images and videos. We offer a "Starter" plan for occasional use, a "Growth" plan for scaling brands, and an "Enterprise" plan for high-volume needs. You only pay for what you generate.',
        category: 'Pricing',
        lastUpdated: 'January 2025'
    },
    {
        id: '4',
        slug: 'supported-jewellery-types',
        question: 'What types of jewellery do you support?',
        answer: 'We support all major categories including rings, earrings, necklaces, pendants, bracelets, and bangles. Our AI is trained to recognize and accurately render various metals (gold, silver, platinum, rose gold) and gemstones (diamonds, rubies, emeralds, sapphires, etc.).',
        category: 'Jewellery',
        lastUpdated: 'October 2024'
    },
    {
        id: '5',
        slug: 'image-video-resolution',
        question: 'What is the resolution of the generated images and videos?',
        answer: 'Images are generated in high resolution suitable for ecommerce zoom (up to 4K). Videos are generated in 1080p HD, optimized for social media (Reels, TikTok) and website listings.',
        category: 'Images & Videos',
        lastUpdated: 'October 2024'
    },
    {
        id: '6',
        slug: 'commercial-usage-rights',
        question: 'Do I own the rights to the generated images?',
        answer: 'Yes. Once you generate an image or video using AIVX, you have full commercial ownership rights to use them for your website, marketing materials, social media, and advertising.',
        category: 'Account & Usage',
        lastUpdated: 'October 2024'
    },
    {
        id: '8',
        slug: 'can-i-use-phone-photos',
        question: 'Can I use photos taken with my phone?',
        answer: 'Absolutely. AIVX is designed to take simple input photos—even those taken on a smartphone—and transform them into professional studio-quality visuals. Ensure your product is in focus and well-lit for the best results.',
        category: 'Product Shoot',
        lastUpdated: 'October 2024'
    }
];

export const faqCategories: FaqCategory[] = [
    'General',
    'Product Shoot',
    'Pricing',
    'Jewellery',
    'Images & Videos',
    'Account & Usage'
];
