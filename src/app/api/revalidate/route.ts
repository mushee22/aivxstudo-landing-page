import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

const REVALIDATION_SECRET = "c6be701c-931b-4419-a6a2-f77a5b3c1025"

export async function POST(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const secret = searchParams.get('secret');

        if (secret !== REVALIDATION_SECRET) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json().catch(() => ({}));

        // Extract slug from Strapi webhook entry or payload
        const slug = body.entry?.slug;
        const model = body.model; // e.g. "article" or "blog"

        console.log(`Revalidation triggered by Strapi webhook. Event: ${body.event}, Model: ${model}, Slug: ${slug}`);

        // Always revalidate the home page and the blog listing page since they display latest lists of blogs
        revalidatePath('/');
        revalidatePath('/blog');
        revalidatePath('/sitemap.xml');

        // Revalidate the specific post page if slug is provided
        if (slug) {
            revalidatePath(`/blog/${slug}`);
            return NextResponse.json({ revalidated: true, slug, now: Date.now() });
        }

        return NextResponse.json({ revalidated: true, message: 'General paths revalidated', now: Date.now() });
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const secret = searchParams.get('secret');
        const slug = searchParams.get('slug');

        if (secret !== process.env.REVALIDATION_SECRET) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        // Revalidate general pages
        revalidatePath('/');
        revalidatePath('/blog');
        revalidatePath('/sitemap.xml');

        if (slug) {
            revalidatePath(`/blog/${slug}`);
            return NextResponse.json({ revalidated: true, slug, now: Date.now() });
        }

        return NextResponse.json({ revalidated: true, message: 'General paths revalidated via GET', now: Date.now() });
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
