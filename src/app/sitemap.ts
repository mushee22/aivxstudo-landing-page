import { MetadataRoute } from 'next';
import { fetchAllBlogs } from '@/lib/strapi';
import { faqs } from '@/data/faqs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://aivx.in';

    // 1. Static Routes
    const staticRoutes = [
        '',
        '/pricing',
        '/blog',
        '/faq',
        '/contact',
        '/about',
        '/vision',
        '/mission',
        '/team',
        '/location',
        '/product-shoot',
        '/product-shoot/fashion',
        '/product-shoot/jewellery',
        '/product-shoot/accessories',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // 2. Jewellery Categories
    const jewelleryCategories = [
        'ai-ring-product-photography',
        'ai-earring-product-photography',
        'ai-pendant-set-product-photography',
        'ai-necklace-product-photography',
        'ai-necklace-set-product-photography',
        'ai-bangle-product-photography',
    ];

    const jewelleryCategoryRoutes = jewelleryCategories.map((category) => ({
        url: `${baseUrl}/product-shoot/jewellery/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 2b. Accessories Categories
    const accessoriesCategories = [
        'ai-bag-product-photography',
        'ai-watch-product-photography',
        'ai-perfume-product-photography',
        'ai-cosmetics-product-photography',
    ];

    const accessoriesCategoryRoutes = accessoriesCategories.map((category) => ({
        url: `${baseUrl}/product-shoot/accessories/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 2c. Fashion Categories
    const fashionCategories = [
        'ai-mens-topwear-product-photography',
        'ai-mens-ethnic-wear-product-photography',
        'ai-womens-ethnic-wear-product-photography',
        'ai-garment-only-product-photography',
    ];

    const fashionCategoryRoutes = fashionCategories.map((category) => ({
        url: `${baseUrl}/product-shoot/fashion/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 3. Blog Posts
    const posts = await fetchAllBlogs();
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date), // Using post date if valid, else current
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // 4. FAQs
    const faqRoutes = faqs.map((faq) => ({
        url: `${baseUrl}/faq/${faq.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [
        ...staticRoutes,
        ...jewelleryCategoryRoutes,
        ...accessoriesCategoryRoutes,
        ...fashionCategoryRoutes,
        ...blogRoutes,
        ...faqRoutes,
    ];
}
