import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jacob Tax Solutions - Expert Tax Services for Indian-Americans",
  description: "Jacob Tax Solutions provides professional tax services for Indian-Americans with 22+ years of experience. 100% online service, free draft in 24 hours.",
  keywords: [
    "Jacob Tax Solutions",
    "USA tax filing services",
    "IRS tax help",
    "Business tax preparation USA",
    "Tax accountant near me USA",
    "ITIN application assistance",
    "EIN application services",
    "Federal tax filing services",
    "State tax filing USA",
    "Affordable tax preparation USA",
    "Self-employed tax filing USA",
    "Indian-American tax services",
    "tax preparation services",
    "tax consultant",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
