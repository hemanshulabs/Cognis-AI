import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mattone = localFont({
  src: "../public/fonts/Mattone-Regular.otf",
  variable: "--font-mattone",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cognis AI",
  description:
    "AI-driven financial digital engagement engine for real-time banking moments.",
  icons: {
    icon: "/logo/logo-favicon.ico",
    shortcut: "/logo/logo-favicon.ico",
    apple: "/logo/logo-favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${mattone.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
