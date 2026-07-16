import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "JCSS Indonesia — IS Audit, Cyber & Privacy Assurance for Indonesia's Regional Banks",
  description:
    "OJK-aligned IS audit, ITGC, cyber resilience and data-privacy assurance for BPR/BPRS and province-based banks. CISA-led, partner-attended.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0A0E14",
};

const themeInit = `(function(){try{var t=document.documentElement.getAttribute('data-theme');if(!t){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
