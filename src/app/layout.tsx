import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://aivx.in'),
  title: "AI Product Photography for Fashion and Jewellery | AIVX",
  description: "Create fashion and jewellery product photos without a studio. Generate AI model photos, lookbooks, and marketplace-ready images for your brand — faster and for less cost than a traditional shoot.",
  keywords: 'AI jewellery photography · AI fashion photography · product photos without studio · AI model photos · jewellery photo editing · fashion lookbook generator',
  icons: {
    icon: '/logo.jpg',
  },
  verification: {
    other: {
      'facebook-domain-verification': ['r951zgn7b009eko58bkc9626jmq54a'],
    },
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
