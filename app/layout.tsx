/**
 * layout.tsx — Root Layout
 * -------------------------
 * The root layout wraps every page in the application.
 * It sets up:
 *  - Inter font from Google Fonts
 *  - ThemeProvider for light/dark mode (using next-themes)
 *  - Global metadata for SEO (title, description, Open Graph)
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

/* Load Inter — the main font for the entire site */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* SEO metadata — shown in search results and social media previews */
export const metadata: Metadata = {
  title: "Mayur Jogade — Software Developer",
  description:
    "Portfolio of Mayur Jogade — a CS student who builds full-stack web applications with React, Node.js, and TypeScript.",
  openGraph: {
    title: "Mayur Jogade — Software Developer",
    description:
      "Portfolio of Mayur Jogade — a CS student who builds full-stack web applications with React, Node.js, and TypeScript.",
    url: "https://mayurjogade.dev",
    siteName: "Mayur Jogade",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body>
        {/* ThemeProvider enables light/dark toggle across the whole app */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
