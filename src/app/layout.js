import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layers/Header";
import Footer from "@/components/layers/Footer";
import WhatsAppWidget from "@/components/layers/WhatsAppWidget";
import ApplyNowAutoPopup from "@/components/layers/ApplyNowAutoPopup";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: {
    default: "Multi-site Blog System",
    template: "%s | Multi-site Blog System",
  },
  description: "Reusable Next.js 14 blog template with Prisma, TipTap, and an admin console.",
  openGraph: {
    title: "Multi-site Blog System",
    description: "Reusable Next.js 14 blog template with Prisma, TipTap, and an admin console.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-site Blog System",
    description: "Reusable Next.js 14 blog template with Prisma, TipTap, and an admin console.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17855679185"
          strategy="beforeInteractive"
        />
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17855679185');`}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W96Q8L59');`}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} app-shell`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W96Q8L59"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="relative bg-black text-white min-h-screen">
          <Header />
          <ApplyNowAutoPopup initialDelayMs={10000} delayStepMs={5000} />
          {children}
          <Footer />
          <WhatsAppWidget />
        </div>
      </body>
    </html>
  );
}
