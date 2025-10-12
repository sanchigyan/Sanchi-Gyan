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
  title: {
    default: "Sanchi Gyan | Online Education Platform Nepal",
    template: "%s | Sanchi Gyan",
  },
  description:
    "Sanchi Gyan is Nepal&apos;s premium online education platform, empowering high school students with expert instructors, interactive courses, and modern learning tools.",
  keywords: [
    "online education Nepal",
    "Nepal high school courses",
    "digital learning Nepal",
    "Sanchi Gyan",
    "e-learning platform",
    "study online Nepal",
    "Nepal education technology",
  ],
  metadataBase: new URL("https://sanchi-gyan.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sanchi Gyan | Premium Online Learning in Nepal",
    description:
      "Learn without limits with Sanchi Gyan. Access expert-led courses, interactive tools, and a modern online education platform built for Nepalese students.",
    url: "https://sanchi-gyan.vercel.app",
    siteName: "Sanchi Gyan",
    images: [
      {
        url: "https://i.ibb.co/qSYcYYL/Screenshot-2025-10-12-025232.png",
        height: 630,
        alt: "Sanchi Gyan Online Education Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanchi Gyan | Online Education Platform Nepal",
    description:
      "Premium online education platform in Nepal. Learn from expert instructors, explore interactive courses, and excel in your studies with Sanchi Gyan.",
    images: ["https://i.ibb.co/qSYcYYL/Screenshot-2025-10-12-025232.png"], 
    creator: "@SanchiGyan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "PASTE-GOOGLE-SEARCH-CONSOLE-VERIFICATION", // optional
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
