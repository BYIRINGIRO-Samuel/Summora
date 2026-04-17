import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
