import Image from 'next/image';
import Link from 'next/link';

const accessoriesCategories = [
    {
        name: 'Bag',
        href: '/product-shoot/accessories/ai-bag-product-photography',
        image: '/image/hero/accessories/bag-3.jpg',
        alt: 'AI generated bag product photography'
    },
    {
        name: 'Watch',
        href: '/product-shoot/accessories/ai-watch-product-photography',
        image: '/image/hero/accessories/watch-4.jpg',
        alt: 'AI generated watch product photography'
    },
    {
        name: 'Perfume',
        href: '/product-shoot/accessories/ai-perfume-product-photography',
        image: '/image/hero/accessories/perfume-4.jpg',
        alt: 'AI generated perfume product photography'
    },
    {
        name: 'Cosmetics',
        href: '/product-shoot/accessories/ai-cosmetics-product-photography',
        image: '/image/hero/accessories/cosmetic-1.jpg',
        alt: 'AI generated cosmetics product photography'
    },
];

function CategoryCard({ name, href, image, alt }: { name: string; href: string; image: string; alt: string }) {
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
            </div>
        </Link>
    );
}

export default function AccessoriesCategories() {
    return (
        <section id="categories" className="py-20 px-6 bg-dark-bg border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-14">
                    <p className="text-xs font-semibold text-neon-green uppercase tracking-[0.2em] mb-3">
                        Product Categories
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            AI Photography for Every<br />
                            Accessory Category
                        </h2>
                        <p className="text-gray-400 text-base md:text-right md:max-w-xs leading-relaxed font-sans">
                            One platform covering handbags to luxury chronographs, transparent perfumes to cosmetic styling — consistent premium quality.
                        </p>
                    </div>
                </div>

                {/* Accessories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {accessoriesCategories.map((cat) => (
                        <CategoryCard key={cat.name} {...cat} />
                    ))}
                </div>
            </div>
        </section>
    );
}
