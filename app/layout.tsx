import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/BaseComponents/BaseNavbar";
import Footer from "@/components/BaseComponents/BaseFooter";
import ReduxProvider from "@/slicer/provider";
import CartHydrator from "@/components/CartHydrator";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "E-comm | Best Online Store",
    template: "%s - E-comm",
  },
  description: "Buy premium products online with fast shipping.",
  manifest: "/manifest.json",
  openGraph: {
    title: "E-comm | Best Online Store",
    description: "Buy premium products online with fast shipping.",
    url: "https://next-js-e-comm.vercel.app/",
    siteName: "E-comm",
    type: "website",
    images :['/og-image.png']
  },
  twitter: {
    card: "summary_large_image",
    title: "E-comm | Best Online Store",
    description: "Buy premium products online with fast shipping.",
    images :['/og-image.png']
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <CartHydrator/>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
