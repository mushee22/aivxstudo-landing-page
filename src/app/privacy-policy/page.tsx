import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | AIVX",
    description: "Privacy Policy for AIVX explaining how we collect, use, and protect user data.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl text-gray-300">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
            <p className="text-gray-400 mb-8 border-b border-gray-800 pb-8">Last updated: January 2026</p>

            <section className="mb-12">
                <p className="text-lg leading-relaxed">
                    At <strong className="text-white">AIVX</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and services.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
                <p className="mb-4">We may collect the following types of information:</p>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-medium mb-2 text-white">a. Personal Information</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Company name</li>
                            <li>Contact details (when you submit a form or contact us)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-2 text-white">b. Usage Information</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Pages visited</li>
                            <li>Time spent on the site</li>
                            <li>Device and browser type</li>
                            <li>IP address (anonymized where possible)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-2 text-white">c. Uploaded Content</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Images or files you upload for product visualization</li>
                            <li>Text prompts or configuration data used for image or video generation</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Provide and improve our services</li>
                    <li>Respond to enquiries and support requests</li>
                    <li>Generate AI-powered images and videos</li>
                    <li>Communicate updates or important information</li>
                    <li>Analyze website usage and performance</li>
                </ul>
                <p>We do <strong className="text-white">not</strong> sell your personal data to third parties.</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">3. Data Storage & Security</h2>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>We use industry-standard security measures to protect your data</li>
                    <li>Uploaded content is stored securely</li>
                    <li>Access is limited to authorized systems only</li>
                </ul>
                <p>While we take strong precautions, no system is 100% secure.</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">4. Cookies & Analytics</h2>
                <p className="mb-4">We may use cookies and analytics tools to:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Understand user behavior</li>
                    <li>Improve website experience</li>
                    <li>Measure performance</li>
                </ul>
                <p>You can control cookies through your browser settings.</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">5. Third-Party Services</h2>
                <p className="mb-4">We may use trusted third-party services for:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Hosting</li>
                    <li>Analytics</li>
                    <li>Communication tools</li>
                </ul>
                <p>These services are bound by their own privacy policies and security standards.</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">6. Data Retention</h2>
                <p className="mb-4">We retain data only as long as necessary to:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Provide services</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes</li>
                </ul>
                <p>You may request data deletion by contacting us.</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">7. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Access your personal data</li>
                    <li>Request corrections</li>
                    <li>Request deletion</li>
                    <li>Withdraw consent</li>
                </ul>
                <p>To exercise these rights, contact us at <a href="mailto:support@aivx.in" className="text-blue-400 hover:text-blue-300 transition-colors">support@aivx.in</a>.</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">8. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Updates will be reflected on this page with a revised date.</p>
            </section>

            <section className="mb-12 pt-8 border-t border-gray-800">
                <h2 className="text-2xl font-semibold mb-4 text-white">9. Contact Us</h2>
                <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
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
