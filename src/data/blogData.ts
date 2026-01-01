export type BlogCategory =
    | 'All'
    | 'AI Jewellery'
    | 'Product Shoot'
    | 'Ecommerce'
    | 'Case Studies'
    | 'Tutorials'
    | 'Industry Insights';

export const blogCategories: BlogCategory[] = [
    'All',
    'AI Jewellery',
    'Product Shoot',
    'Ecommerce',
    'Case Studies',
    'Tutorials',
    'Industry Insights'
];

// Placeholder for future Blog Post type
export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: BlogCategory;
    date: string;
    readTime: string;
    image: string;
    author: string;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'ai-transforming-jewellery-photography',
        title: 'How AI is Transforming Traditional Jewellery Photography',
        excerpt: 'Explore the shift from expensive physical shoots to AI-generated visuals that are faster, cheaper, and more consistent.',
        category: 'Industry Insights',
        date: 'Jan 12, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop',
        author: 'Sarah Chen, Gemologist',
        content: `
            <h2>The Traditional Photography Bottleneck</h2>
            <p>For decades, jewellery brands have faced the same logistical nightmare: organizing high-quality product shoots. The process involves hiring professional photographers, booking studios, sourcing models, and managing expensive insurance for the inventory. This not only incurs massive costs but also slows down the time-to-market for new collections.</p>
            
            <h3>Enter AI-Powered Generation</h3>
            <p>Artificial Intelligence is revolutionizing this workflow. By leveraging advanced computer vision and generative models trained specifically on gemology and metal physics, platforms like AIVX are enabling brands to create studio-grade visuals from simple smartphone photos.</p>
            
            <h3>Key Benefits</h3>
            <ul>
                <li><strong>Speed:</strong> specific turnaround times drop from weeks to minutes.</li>
                <li><strong>Cost:</strong> Reduction in production costs by up to 90%.</li>
                <li><strong>Consistency:</strong> Maintain a unified brand look across thousands of SKUs without worrying about lighting variations between shoot days.</li>
            </ul>
            
            <h2>Quality That Rivals Reality</h2>
            <p>Early AI attempts often struggled with the complex refraction of light through diamonds or the specific luster of gold. However, the latest generation of models has overcome these hurdles. AIVX, for example, uses a specialized physics engine alongside its neural networks to ensure that light bounces off facets exactly as it would in the real world.</p>
            
            <p>This technological leap means that customers can no longer distinguish between a photograph and an AI-generated image, allowing brands to scale their visual content without compromising on luxury aesthetics.</p>
        `
    },
    {
        id: '2',
        slug: 'optimizing-ecommerce-visuals',
        title: 'Optimizing Your Ecommerce Visuals for Higher Conversions',
        excerpt: 'Learn why high-quality, consistent product imagery is the single biggest factor in driving online jewellery sales.',
        category: 'Ecommerce',
        date: 'Jan 08, 2026',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1000&auto=format&fit=crop',
        author: 'Markus Vowles',
        content: `
            <h2>Visuals Sell</h2>
            <p>In online jewellery retail, the customer cannot touch or try on the product. The image is their only connection to the piece. Studies consistently show that high-resolution, multi-angle imagery increases conversion rates by over 40%.</p>
            
            <h3>The Importance of Consistency</h3>
            <p>A cluttered category page with different background shades, varying lighting, and inconsistent angles signals unprofessionalism. A unified visual language builds trust. AI tools allow you to standardize your entire catalog's look instantly, placing every ring on the exact same marble surface or velvet stand.</p>
            
            <h2>Context Matters</h2>
            <p>White background shots are essential for clarity, but lifestyle images drive desire. Seeing a necklace on a model helps a customer visualize size and styling. Traditionally, on-model shoots are the most expensive type of content to produce. With AIVX, you can generate on-model views without booking a single model.</p>
        `
    },
    {
        id: '3',
        slug: 'guide-perfect-product-shoot',
        title: 'The Ultimate Guide to a Perfect AI Product Shoot',
        excerpt: 'A step-by-step tutorial on how to prepare your input images to get the best possible results from the AIVX platform.',
        category: 'Tutorials',
        date: 'Dec 28, 2025',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1000&auto=format&fit=crop',
        author: 'AIVX Support Team',
        content: `
            <h2>Garbage In, Garbage Out? Not Quite, but...</h2>
            <p>While AIVX is powerful enough to fix lighting and background issues, the better your input photo, the more stunning your result. Here is how to snap the perfect reference shot in seconds.</p>
            
            <h3>1. Focus is King</h3>
            <p>Ensure your jewellery piece is in sharp focus. If the camera blurs the details of the setting or the cut of the stone, the AI has to "guess" those details, which can lead to inaccuracies. Tap to focus on the main gemstone.</p>
            
            <h3>2. Neutral Lighting</h3>
            <p>Avoid strong colored lights or harsh shadows. Soft, diffused daylight (like near a window) is ideal. This helps the AI understand the true color of the metal and stones.</p>
            
            <h3>3. Simple Angle</h3>
            <p>Take the photo from the angle you want the final result to be in. If you want a front-facing ring shot, photograph it from the front.</p>
        `
    },
    {
        id: '4',
        slug: 'case-study-luxe-gems',
        title: 'Case Study: How Luxe Gems Scaled Catalog Production by 10x',
        excerpt: 'See how a boutique jewellery brand used AIVX to launch a new collection in 48 hours instead of 4 weeks.',
        category: 'Case Studies',
        date: 'Dec 15, 2025',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop',
        author: 'Elena Ross',
        content: `
            <h2>The Challenge</h2>
            <p>Luxe Gems needed to launch their "Winter Solstice" collection of 50 new pieces before the holiday rush. Their usual photographer was booked out, and they had only 3 days to get product shots live.</p>
            
            <h2>The Solution</h2>
            <p>They turned to AIVX. Using just an iPhone, the team photographed the entire collection in 2 hours. They uploaded the images to the AIVX platform and selected a "Frost & Velvet" theme.</p>
            
            <h2>The Result</h2>
            <p>By the next morning, they had 200 studio-quality images ready. They launched the collection on time, and the consistent, high-end visuals contributed to their best opening week sales on record.</p>
        `
    },
    {
        id: '5',
        slug: 'understanding-metal-reflections',
        title: 'Understanding Metal Reflections in AI Generation',
        excerpt: 'A technical deep dive into how AIVX simulates realistic light interaction with gold, silver, and platinum.',
        category: 'AI Jewellery',
        date: 'Dec 02, 2025',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1617038224558-28ad08c32bad?q=80&w=1000&auto=format&fit=crop',
        author: 'Dr. Alan Turing (AI Dept)',
        content: `
            <h2>The Physics of Shine</h2>
            <p>Metals are defined by their high reflectance and unique spectral properties. Gold reflects yellow and red wavelengths while absorbing blues; silver reflects almost the entire visible spectrum equally.</p>
            
            <p>AIVX uses physically-based rendering (PBR) principles within its generation pipeline. It doesn't just "paint" yellow; it simulates how a gold surface interacts with the environmental map of the scene.</p>
            
            <h3>Micro-Surface Details</h3>
            <p>Real jewellery is rarely perfect. It has microscopic scratches and polish marks that diffuse light. Our AI adds these subtle imperfections to avoid the "canned CGI" look, creating a result that feels organic and tangible.</p>
        `
    },
    {
        id: '6',
        slug: 'future-of-virtual-try-on',
        title: 'The Future of Virtual Try-On for Jewellery',
        excerpt: 'Predicting the next big trends in augmented reality and AI for the online luxury shopping experience.',
        category: 'Industry Insights',
        date: 'Nov 20, 2025',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop',
        author: 'Future Trends Team',
        content: `
            <h2>Beyond Static Images</h2>
            <p>The next frontier is interaction. Customers want to see how a ring looks on *their* hand, not a model's. AI is bridging this gap with real-time generative overlays.</p>
            
            <p>We are moving towards a web experience where a user uploads a photo of their hand, and the jewellery is virtually "placed" on their finger with perfect sizing, occlusion, and lighting integration. This is not just a sticker overlay; it's a lighting simulation.</p>
            
            <p>At AIVX, we are integrating these capabilities to helping brands offer the next level of immersive shopping.</p>
        `
    }
];
