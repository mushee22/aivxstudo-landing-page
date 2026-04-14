import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://aivx.in'),
  title: "AIVX Studio | AI Jewelry Product Photography Software",
  description: "AI jewellery photography software for rings, necklaces, and more. Create studio-quality product images instantly without traditional photoshoots using AIVX Studio",
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
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NCXTFRTW');
            `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NCXTFRTW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

      </body>
    </html>
  );
}
