import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import CookieBanner from "../components/CookieBanner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fundex — Crypto Loans Platform",
  description:
    "Landing page concept inspired by Outcrowd design. Built with Next.js + Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* CookieYes integration (set NEXT_PUBLIC_COOKIEYES_ID in .env.local) */}
        {process.env.NEXT_PUBLIC_COOKIEYES_ID ? (
          <Script
            id="cookieyes"
            strategy="afterInteractive"
            src={`https://cdn-cookieyes.com/client_data/${process.env.NEXT_PUBLIC_COOKIEYES_ID}/script.js`}
          />
        ) : (
          <CookieBanner />
        )}
        {children}
      </body>
    </html>
  );
}
