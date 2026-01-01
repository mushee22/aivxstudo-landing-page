import ProductShootHero from '@/components/ProductShootHero';
import ProductShootProblems from '@/components/ProductShootProblems';
import ProductShootSolution from '@/components/ProductShootSolution';
import ProductShootHowItWorks from '@/components/ProductShootHowItWorks';
import ProductShootUseCases from '@/components/ProductShootUseCases';
import ProductShootComparison from '@/components/ProductShootComparison';

export const metadata = {
    title: 'AI Jewellery Product Shoot | AIVX',
    description: 'Create studio-quality jewellery images and videos using AI. Low cost, fast delivery, and premium results for jewellery brands.',
};

export default function ProductShootPage() {
    return (
        <main className="min-h-screen bg-dark-bg text-white font-sans">
            <ProductShootHero />

            <ProductShootProblems />

            <ProductShootSolution />

            <ProductShootHowItWorks />

            <ProductShootUseCases />

            <ProductShootComparison />
        </main>
    );
}
