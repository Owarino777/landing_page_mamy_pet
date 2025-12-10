import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inclusive_Sans } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inclusiveSans = Inclusive_Sans({ variable: "--font-inclusive-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mamipet",
  description: "Landing page Mamipet",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} ${inclusiveSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
