import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans_JP,
  Cinzel_Decorative,
  Alice,
  Lato,
  Abril_Fatface,
} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const alice = Alice({
  variable: "--font-alice",
  subsets: ["latin"],
  weight: ["400"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const abrilFatface = Abril_Fatface({
  variable: "--font-abril-fatface",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} ${cinzelDecorative.variable} ${alice.variable} ${lato.variable} ${abrilFatface.variable} antialiased`}
        style={{ "Cinzel Decorative": "Mamelon, serif" } as React.CSSProperties}
      >
        <div className="w-full min-h-screen flex justify-center">
          <div className="shadow-2xl max-w-[1200px] w-full">
            <Navigation />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
