import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://aivx.in'),
  title: "AIVX Studio | AI Jewelry Product Photography Software",
  description: "AI-powered jewelry photography software for rings, necklaces, and more. Create professional product images instantly without physical photoshoots with AIVX Studio",
  keywords: 'AI jewelry photography, jewelry product shoot software, AI jewelry images, ring photography software, bracelet photography AI, necklace product photography, earring photography AI, jewelry photoshoot automation',
  icons: {
    icon: '/logo.jpg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-dark-bg text-white`}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6XT7PG56LG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6XT7PG56LG');
          `}
        </Script>
      </body>
    </html>
  );
}
