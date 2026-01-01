
'use client';

import AboutHero from '@/components/AboutHero';
import AboutStory from '@/components/AboutStory';
import AboutVisionMission from '@/components/AboutVisionMission';
import AboutDifferentiation from '@/components/AboutDifferentiation';
import AboutTeam from '@/components/AboutTeam';

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
