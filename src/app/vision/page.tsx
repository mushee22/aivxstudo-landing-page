import VisionHero from '@/components/VisionHero';
import VisionStatement from '@/components/VisionStatement';
import VisionPillars from '@/components/VisionPillars';

export const metadata = {
  title: 'Our Vision | AIVX',
  description: 'Redefining How Jewellery Is Presented Online. AIVX aims to be the global standard for intelligent, scalable AI-powered jewellery product visuals.',
};

export default function VisionPage() {
    return (
        <main className="bg-black min-h-screen">
            <VisionHero />
            <VisionStatement />
            <VisionPillars />
        </main>
    );
}
