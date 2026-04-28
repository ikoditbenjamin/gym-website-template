import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import TopBanner from "@/components/top-banner";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SchemaMarkup from "@/components/schema-markup";
import { AuthProvider } from "@/context/auth-context";
import { ThemeProvider } from "@/context/theme-context";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Troygym - Premium Fitness & Gym Club | Expert Personal Training",
  description:
    "Transform your fitness journey with Troygym. Expert trainers, state-of-the-art equipment, diverse classes, and personalized training programs. Located in Los Angeles.",
  keywords: [
    "gym",
    "fitness",
    "personal training",
    "fitness classes",
    "wellness",
    "Kampala",
    "Troygym",
  ],
  authors: [{ name: "Troygym Fitness" }],
  creator: "Troygym",
  publisher: "Troygym Fitness",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://troygym.com",
    siteName: "Troygym Fitness",
    title: "Troygym - Premium Fitness & Gym Club",
    description:
      "Transform your fitness journey with expert trainers and state-of-the-art facilities",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Troygym Fitness Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Troygym - Premium Fitness & Gym Club",
    description:
      "Transform your fitness journey with expert trainers and state-of-the-art facilities",
    creator: "@troygym",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://troygym.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <head>
        <meta
          name="theme-color"
          content="#8B0000"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#DC143C"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="canonical" href="https://troygym.com" />
      </head>
      <body className="font-sans antialiased bg-black">
        <SchemaMarkup />
        <ThemeProvider>
          <AuthProvider>
            <TopBanner />
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
