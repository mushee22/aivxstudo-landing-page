import LocationHero from '@/components/LocationHero';
import LocationMap from '@/components/LocationMap';
import LocationDetails from '@/components/LocationDetails';

export const metadata = {
  title: 'Our Location | AIVX',
  description: 'Where AIVX Operates. We operate digitally while serving jewellery brands across India and globally.',
};

export default function LocationPage() {
    return (
        <main className="bg-black min-h-screen">
            <LocationHero />
            <LocationMap />
            <LocationDetails />
        </main>
    );
}
