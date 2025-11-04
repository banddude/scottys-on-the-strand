import type { Metadata } from "next";
import { Playfair_Display, Inter } from 'next/font/google';
import "./globals.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Scotty's on the Strand - Oceanfront Dining in Hermosa Beach",
  description: "Experience sophisticated oceanfront dining at Scotty's on the Strand. Serving exceptional breakfast, lunch, and dinner daily with breathtaking ocean views in Hermosa Beach, CA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased flex flex-col min-h-screen bg-sand font-sans">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navigation />
          <Header />
        </div>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
