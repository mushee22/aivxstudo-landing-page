import AboutHero from '@/components/AboutHero';
import AboutStory from '@/components/AboutStory';
import AboutVisionMission from '@/components/AboutVisionMission';
import AboutDifferentiation from '@/components/AboutDifferentiation';
import AboutTeam from '@/components/AboutTeam';

export const metadata = {
    title: 'About AIVX | AI Jewellery & Fashion Photography Studio',
    description: 'AIVX offers AI product photography for fashion and jewellery. Studio quality images and videos, no photographer needed, built for ecommerce.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-green selection:text-black">
            <AboutHero />
            <AboutStory />
            <AboutVisionMission />
            <AboutDifferentiation />
            <AboutTeam />
        </main>
    );
}
