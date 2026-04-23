
import Image from 'next/image';
import Link from 'next/link';

const jewelleryCategories = [
    {
        name: 'Ring',
        href: '/product-shoot/jewellery/ai-ring-product-photography',
        image: '/theme/ring/cream-theme.jpg',
        alt: 'AI generated ring product photography'
    },
    {
        name: 'Earring',
        href: '/product-shoot/jewellery/ai-earring-product-photography',
        image: '/theme/earring/rose-amber-theme.png',
        alt: 'AI generated earring product photography'
    },
    {
        name: 'Pendant Set',
        href: '/product-shoot/jewellery/ai-necklace-product-photography',
        image: '/theme/pendant-set/navy-blue-theme.png',
        alt: 'AI generated pendant set product photography'
    },
    {
        name: 'Necklace',
        href: '/product-shoot/jewellery/ai-necklace-product-photography',
        image: '/theme/necklace/white-theme.png',
        alt: 'AI generated necklace product photography'
    },
    {
        name: 'Necklace Set',
        href: '/product-shoot/jewellery/ai-necklace-set-product-photography',
        image: '/theme/necklace-set/light-green-theme.png',
        alt: 'AI generated necklace set product photography'
    },
    {
        name: 'Bangle',
        href: '/product-shoot/jewellery/ai-bangle-product-photography',
        image: '/theme/bangle/brown-theme.png',
        alt: 'AI generated bangle product photography'
    },
];

const fashionCategories = [
    {
        name: "Men's Topwear",
        href: '/product-shoot/fashion',
        image: '/image/fashion-photography-example.png',
        alt: "AI generated men's topwear fashion photography"
    },
    {
        name: "Men's Ethnic Wear",
        href: '/product-shoot/fashion',
        image: '/image/fashion-photography-example.png',
        alt: "AI generated men's ethnic wear fashion photography"
    },
    {
        name: "Women's Ethnic Wear",
        href: '/product-shoot/fashion',
        image: '/image/fashion-photography-example.png',
        alt: "AI generated women's ethnic wear fashion photography"
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

export default function JewelleryCategories() {
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
                            Jewellery and Fashion Category
                        </h2>
                        <p className="text-gray-400 text-base md:text-right md:max-w-xs leading-relaxed">
                            One platform that covers rings to sarees, earrings to lehengas — with the same quality on every shot.
                        </p>
                    </div>
                </div>

                {/* Jewellery */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-lg font-semibold text-white">Jewellery</h3>
                        <div className="h-px flex-1 bg-white/5" />
                        <Link
                            href="/product-shoot/jewellery"
                            className="text-sm text-gray-500 hover:text-neon-green transition-colors"
                        >
                            View all →
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {jewelleryCategories.map((cat) => (
                            <CategoryCard key={cat.name} {...cat} />
                        ))}
                    </div>
                </div>

                {/* Fashion */}
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-lg font-semibold text-white">Fashion</h3>
                        <div className="h-px flex-1 bg-white/5" />
                        <Link
                            href="/product-shoot/fashion"
                            className="text-sm text-gray-500 hover:text-neon-green transition-colors"
                        >
                            View all →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {fashionCategories.map((cat) => (
                            <CategoryCard key={cat.name} {...cat} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
