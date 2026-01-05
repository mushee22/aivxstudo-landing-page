import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions | AIVX",
    description: "Terms and Conditions governing the use of AIVX services and website.",
};

export default function TermsAndConditionsPage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl text-gray-300">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Terms and Conditions</h1>
            <p className="text-gray-400 mb-8 border-b border-gray-800 pb-8">Last updated: January 2026</p>

            <div className="mb-12">
                <p className="text-lg leading-relaxed mb-4">
                    Welcome to <strong className="text-white">AIVX</strong>. By accessing or using our website and services, you agree to be bound by these Terms and Conditions.
                </p>
                <p className="text-lg leading-relaxed">
                    If you do not agree, please do not use our services.
                </p>
            </div>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">1. Use of Services</h2>
                <p className="mb-4">AIVX provides AI-powered tools for generating jewellery product images and videos.</p>
                <p className="mb-2">You agree to:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Use the service only for lawful purposes</li>
                    <li>Not misuse or attempt to disrupt the platform</li>
                    <li>Not reverse-engineer or abuse the system</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">2. User Content</h2>
                <p className="mb-4">You retain ownership of the content you upload.</p>
                <p className="mb-4">By uploading content, you grant AIVX permission to:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Process it using AI systems</li>
                    <li>Generate images and videos</li>
                    <li>Store it for service delivery purposes</li>
                </ul>
                <p>You confirm that you have the right to upload and use the content.</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">3. Intellectual Property</h2>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>The AIVX platform, branding, and technology are owned by AIVX</li>
                    <li>You may not copy, modify, or distribute our platform without permission</li>
                </ul>
                <p>Generated outputs may be used by you according to your subscription or agreement.</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">4. Pricing & Payments</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Pricing details are available on the Pricing page</li>
                    <li>Fees are non-refundable unless stated otherwise</li>
                    <li>We may change pricing with prior notice</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">5. Service Availability</h2>
                <p className="mb-4">We aim to provide uninterrupted service but do not guarantee:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Continuous availability</li>
                    <li>Error-free operation</li>
                </ul>
                <p>Maintenance, updates, or outages may occur.</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">6. Limitation of Liability</h2>
                <p className="mb-4">AIVX is not liable for:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Indirect or consequential damages</li>
                    <li>Loss of data or business</li>
                    <li>Use of generated content beyond intended purposes</li>
                </ul>
                <p>Use of the service is at your own risk.</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">7. Termination</h2>
                <p className="mb-4">We reserve the right to suspend or terminate access if:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>These terms are violated</li>
                    <li>The service is misused</li>
                    <li>Required by law</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">8. Governing Law</h2>
                <p className="mb-4">These terms are governed by the laws of <strong className="text-white">India</strong>.</p>
                <p>Any disputes shall be subject to the jurisdiction of Indian courts.</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">9. Changes to Terms</h2>
                <p>We may update these Terms from time to time. Continued use of the service constitutes acceptance of the updated terms.</p>
            </section>

            <section className="mb-12 pt-8 border-t border-gray-800">
                <h2 className="text-2xl font-semibold mb-4 text-white">10. Contact Information</h2>
                <p className="mb-4">For questions regarding these Terms, contact us at:</p>
                <p className="mb-2">
                    <strong className="text-white">Email:</strong> <a href="mailto:support@aivx.in" className="text-blue-400 hover:text-blue-300 transition-colors">support@aivx.in</a>
                </p>
                <p>
                    <strong className="text-white">Company:</strong> AIVX
                </p>
            </section>
        </main>
    );
}
