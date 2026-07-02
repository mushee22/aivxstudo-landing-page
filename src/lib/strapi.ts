import { marked } from 'marked';
import { BlogPost, BlogCategory, blogPosts } from '@/data/blogData';

const STRAPI_BASE_URL = "https://cms.aivx.in";

function normalizeCategory(cat: string): BlogCategory {
    const lower = cat.toLowerCase();
    if (lower.includes('jewellery') || lower.includes('jewelry')) return 'AI Jewellery';
    if (lower.includes('ecommerce') || lower.includes('e-commerce') || lower.includes('shop')) return 'Ecommerce';
    if (lower.includes('case')) return 'Case Studies';
    if (lower.includes('tutorial') || lower.includes('guide') || lower.includes('how')) return 'Tutorials';
    if (lower.includes('video')) return 'Product Videos';
    if (lower.includes('review')) return 'Product Review';
    if (lower.includes('platform') || lower.includes('aivx')) return 'AIVX Platform';
    return 'Industry Insights'; // Default fallback
}

function extractImageUrl(media: any): string | null {
    if (!media) return null;

    // Case 1: Simple string URL
    if (typeof media === 'string') return media;

    // Case 2: Direct object with url (e.g. Strapi v5 style or direct population)
    if (media.url) return media.url;

    // Case 3: Strapi v4 wrapper style: { data: { attributes: { url: '...' } } }
    if (media.data) {
        const data = media.data;
        if (Array.isArray(data)) {
            if (data.length > 0) {
                return extractImageUrl(data[0]);
            }
            return null;
        }
        if (data.attributes && data.attributes.url) {
            return data.attributes.url;
        }
        if (data.url) {
            return data.url;
        }
    }

    // Case 4: Direct attributes wrapper: { attributes: { url: '...' } }
    if (media.attributes && media.attributes.url) {
        return media.attributes.url;
    }

    // Case 5: Nested formats (checking formats if root url is missing)
    if (media.formats) {
        const formats = media.formats;
        const targetFormat = formats.large || formats.medium || formats.small || formats.thumbnail;
        if (targetFormat && targetFormat.url) {
            return targetFormat.url;
        }
    }

    return null;
}

export async function mapStrapiPost(strapiPost: any): Promise<BlogPost> {
    const fields = strapiPost.attributes || strapiPost;
    const rawContent = fields.content || '';

    // console.log(fields, "starpi fields")

    // Normalize Category
    let category: BlogCategory = 'Industry Insights';
    if (fields.category) {
        if (typeof fields.category === 'string') {
            category = normalizeCategory(fields.category);
        } else if (typeof fields.category === 'object' && fields.category.name) {
            category = normalizeCategory(fields.category.name);
        }
    } else {
        // Try parsing from raw content
        const categoryMatch = rawContent.match(/Category tag:\s*(?:set to\s*)?["']?([^"'\n\r#*]+)["']?/i);
        if (categoryMatch && categoryMatch[1]) {
            category = normalizeCategory(categoryMatch[1].trim());
        }
    }

    // Dynamic Read Time calculation
    const wordCount = rawContent.split(/\s+/).filter(Boolean).length;
    const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

    // Date formatting (e.g. "Jan 18, 2026")
    const dateObj = new Date(fields.publishedAt || fields.createdAt || new Date());
    const date = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    // Image resolving
    let image = '';
    const strapiImage = fields.thumbnail;
    // console.log(strapiImage, "strapiImage")
    const resolvedUrl = extractImageUrl(strapiImage);
    console.log(resolvedUrl, "resolvedUrl")
    if (resolvedUrl) {

        image = resolvedUrl;
    } else {
        // Fallback to first image in markdown
        const imageMatch = rawContent.match(/!\[.*?\]\((.*?)\)/);
        if (imageMatch && imageMatch[1]) {
            image = imageMatch[1];
        }
    }



    // Ensure absolute image URL if it's relative
    if (image.startsWith('/')) {
        const cleanBase = STRAPI_BASE_URL.endsWith('/') ? STRAPI_BASE_URL.slice(0, -1) : STRAPI_BASE_URL;
        image = `${cleanBase}${image}`;
    }

    console.log('image', image)

    // Convert markdown content to HTML using marked
    let htmlContent = '';
    try {
        htmlContent = await marked.parse(rawContent);
    } catch (e) {
        console.error('Error parsing markdown:', e);
        htmlContent = rawContent;
    }

    return {
        id: String(strapiPost.id || fields.documentId || Math.random()),
        slug: fields.slug,
        title: fields.title || 'Untitled Article',
        excerpt: fields.description || fields.excerpt || '',
        category,
        date: fields.live_at || date,

        readTime,
        image,
        author: fields.author || 'AIVX Team',
        content: htmlContent
    };
}

export async function fetchAllBlogs(): Promise<BlogPost[]> {
    const baseUrl = STRAPI_BASE_URL.endsWith('/') ? STRAPI_BASE_URL.slice(0, -1) : STRAPI_BASE_URL;
    try {
        const res = await fetch(`${baseUrl}/api/blogs?populate=*&pagination[pageSize]=100`, {
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.statusText}`);
        }

        const payload = await res.json();
        if (!payload || !payload.data || !Array.isArray(payload.data)) {
            throw new Error('Invalid response structure');
        }

        const mapped = await Promise.all(
            payload.data.map((item: any) => mapStrapiPost(item))
        );

        return mapped.length > 0 ? mapped : blogPosts;
    } catch (err: any) {
        console.warn('fetchAllBlogs failed, returning local blogPosts fallback:', err.message);
        return blogPosts;
    }
}

export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
    const baseUrl = STRAPI_BASE_URL.endsWith('/') ? STRAPI_BASE_URL.slice(0, -1) : STRAPI_BASE_URL;
    try {
        const res = await fetch(`${baseUrl}/api/blogs?filters[slug][$eq]=${slug}&populate=*`, {
            next: { revalidate: 3600 }
        });



        if (!res.ok) {
            console.log("failed to fetch status", res.statusText)
            throw new Error(`Failed to fetch post: ${res.statusText}`);
        }

        const payload = await res.json();

        return await mapStrapiPost(payload.data[0]);
    } catch (err: any) {
        console.warn(`fetchBlogBySlug for ${slug} failed, returning local fallback if matching:`, err.message);
        // const local = blogPosts.find(p => p.slug === slug);
        return null;
    }
}
