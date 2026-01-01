import ContactHero from '@/components/ContactHero';
import ContactOptions from '@/components/ContactOptions';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: 'Contact AIVX Studio | AI Product Photography',
    description: 'Get in touch with AIVX Studio for custom AI jewellery photography, pricing inquiries, and enterprise solutions.',
};

export default function ContactPage() {
    return (
        <main className="bg-black min-h-screen">
            <ContactHero />
            <section id="contact-section" className="py-24 px-6 bg-dark-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        {/* Left Side: Contact Options & Info */}
                        <div className="lg:sticky lg:top-32">
                            <ContactOptions />
                        </div>

                        {/* Right Side: Contact Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
