import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeProvider";
import Providers from "@/components/Providers";

// Google Font (Inter) Setup
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "1Acre Explorer | Home Page",
  description: "Seamless Property Discovery – Explore, Scroll, and Map Your Next Investment!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-gray-100 text-gray-900`}>
        <Providers>
          <ThemeProvider>
            <Suspense>
              <Navbar />
              <main className="container mx-auto p-6 min-h-screen">{children}</main>
              <Footer />
            </Suspense>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
