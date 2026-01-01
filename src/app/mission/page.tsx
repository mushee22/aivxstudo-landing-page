import MissionHero from '@/components/MissionHero';
import MissionCore from '@/components/MissionCore';
import MissionPillars from '@/components/MissionPillars';
import MissionCTA from '@/components/MissionCTA';

export const metadata = {
    title: 'Our Mission | AIVX',
    description: 'Making Premium Jewellery Visuals Effortless. Our mission is to help jewellery brands create studio-quality images and videos faster, smarter, and at a lower cost using AI.',
};

export default function MissionPage() {
    return (
        <main className="bg-black min-h-screen">
            <MissionHero />
            <MissionCore />
            <MissionPillars />
            <MissionCTA />
        </main>
    );
}
