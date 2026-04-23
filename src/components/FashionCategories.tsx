
import Image from 'next/image';
import Link from 'next/link';

const fashionCategories = [
    {
        name: "Men's Topwear",
        href: '/product-shoot/fashion/ai-mens-topwear-product-photography',
        image: '/image/fashion/mens-top-wear/shot-1.jpg',
        alt: "AI generated men's topwear product photography",
        description: 'T-shirts, shirts, polos & more'
    },
    {
        name: "Men's Ethnic Wear",
        href: '/product-shoot/fashion/ai-mens-ethnic-wear-product-photography',
        image: '/image/fashion/men-ethinic-wear/men-ethinic-wear.jpg',
        alt: "AI generated men's ethnic wear product photography",
        description: 'Kurtas, sherwanis, dhoti sets'
    },
    {
        name: "Women's Ethnic Wear",
        href: '/product-shoot/fashion/ai-womens-ethnic-wear-product-photography',
        image: '/image/fashion/women-ethinic-wear/women-ethinic-wear.jpg',
        alt: "AI generated women's ethnic wear product photography",
        description: 'Sarees, lehengas, salwar suits'
    },
];

function CategoryCard({ name, href, image, alt, description }: {
    name: string;
    href: string;
    image: string;
    alt: string;
    description: string;
}) {
    return (
        <Link
            href={href}
            className="group block relative overflow-hidden rounded-2xl bg-dark-surface border border-white/10 hover:border-neon-green/50 transition-all duration-500"
        >
            <div className="h-56 w-full relative overflow-hidden">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>
            <div className="p-5 bg-dark-surface group-hover:bg-white/5 transition-colors duration-300">
                <h3 className="text-base font-semibold text-white group-hover:text-neon-green transition-colors flex items-center gap-2">
                    {name}
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 inline-block">
                        →
                    </span>
                </h3>
                <p className="text-xs text-neutral-500 mt-1">{description}</p>
            </div>
        </Link>
    );
}

export default function FashionCategories() {
    return (
        <section id="categories" className="py-20 px-6 bg-dark-bg border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-14">
                    <p className="text-xs font-semibold text-neon-green uppercase tracking-[0.2em] mb-3">
                        Fashion Categories
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            AI Photography for Every<br />
                            Fashion Category
                        </h2>
                        <p className="text-gray-400 text-base md:text-right md:max-w-xs leading-relaxed">
                            From men's topwear to women's ethnic wear — consistent, studio-quality AI product photos on virtual models.
                        </p>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {fashionCategories.map((cat) => (
                        <CategoryCard key={cat.name} {...cat} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-neutral-500 text-sm mb-4">
                        Can&apos;t find your category? We support a wide range of fashion types.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-all"
                    >
                        Talk to us →
                    </Link>
                </div>

            </div>
        </section>
    );
}
