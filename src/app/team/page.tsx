import TeamHero from '@/components/TeamHero';
import TeamGrid from '@/components/TeamGrid';
import TeamCTA from '@/components/TeamCTA';

export const metadata = {
  title: 'Our Team | AIVX',
  description: 'Meet the people behind AIVX. A focused team building the future of jewellery product visualization using AI.',
};

export default function TeamPage() {
    return (
        <main className="bg-black min-h-screen">
            <TeamHero />
            <TeamGrid />
            <TeamCTA />
        </main>
    );
}
