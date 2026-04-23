import ContactHero from '@/components/ContactHero';
import ContactOptions from '@/components/ContactOptions';
import ContactForm from '@/components/ContactForm';
import ContactExtraInfo from '@/components/ContactExtraInfo';
import ContactFAQ from '@/components/ContactFAQ';

export const metadata = {
    title: 'Contact AIVX | AI Jewellery & Fashion Photography Support',
    description: 'Contact AIVX for AI jewellery photography and AI fashion photography. Get help with pricing, model photo shoots, ecommerce catalogue images, and custom solutions for your brand.',
};

export default function ContactPage() {
    return (
        <main className="bg-black min-h-screen">
            <ContactHero />
            <section id="contact-section" className=" pt-16 pb-20 px-6 bg-dark-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        <div className="lg:sticky lg:top-32 font-sans">
                            <ContactOptions />
                        </div>
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <ContactExtraInfo />
            <ContactFAQ />
        </main>
    );
}
