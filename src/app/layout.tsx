import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://aivx.in'),
  title: "AIVX Studio – AI Jewelry Product Photography Software for Rings, Necklaces, Earrings & More",
  description: "AIVX Studio is an AI-powered jewelry product shoot software for rings, bracelets, bangles, necklaces, pendant sets, and earrings. Create professional jewelry images instantly without physical photoshoots",
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
      </body>
    </html>
  );
}
