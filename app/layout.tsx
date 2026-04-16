import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "MeetScribe | AI Meeting Assistant & Transcription",
  description: "Transform your meetings into actionable insights. MeetScribe uses world-class AI to record, transcribe, and summarize your calls across all platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30`}>
        {children}
      </body>
    </html>
  );
}
