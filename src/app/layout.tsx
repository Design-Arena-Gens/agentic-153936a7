import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cake Atelier – 10 Irresistible Recipes",
  description:
    "A beautifully curated digital cake cookbook featuring ten artisanal recipes complete with tips, techniques, and stunning imagery.",
  keywords: [
    "cake recipes",
    "baking ebook",
    "dessert inspiration",
    "pastry techniques",
    "digital cookbook",
  ],
  authors: [{ name: "Cake Atelier" }],
  metadataBase: new URL("https://agentic-153936a7.vercel.app"),
  openGraph: {
    title: "Cake Atelier — 10 Irresistible Cake Recipes",
    description:
      "Explore ten artisan cake recipes with step-by-step guidance, pro tips, and mouthwatering photography.",
    url: "https://agentic-153936a7.vercel.app",
    siteName: "Cake Atelier",
    images: [
      {
        url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 800,
        alt: "A layered vanilla cake with berries on top.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cake Atelier — 10 Irresistible Cake Recipes",
    description:
      "Bake like a pro with our curated collection of ten luxurious cake recipes.",
    images: [
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
