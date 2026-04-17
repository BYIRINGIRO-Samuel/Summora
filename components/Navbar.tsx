"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl py-6 border-b border-primary/5">
      <div className="container mx-auto px-12 md:px-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group transition-transform hover:scale-105 active:scale-95">
          <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tight text-primary font-display">BLUE SCRIBE</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-14">
          <Link href="#pricing" className="text-base font-bold text-primary/60 hover:text-primary transition-colors font-sans">Pricing</Link>
          <Link href="#features" className="text-base font-bold text-primary/60 hover:text-primary transition-colors font-sans">Features</Link>
          <Link href="#blog" className="text-base font-bold text-primary/60 hover:text-primary transition-colors font-sans">Blog</Link>
        </div>

        <div className="flex items-center gap-10">
          <Link href="/login" className="text-base font-bold text-primary/80 hover:text-primary transition-colors font-display tracking-tight">Log in</Link>
          <Link 
            href="/signup" 
            className="px-8 py-3.5 rounded-2xl border-[3px] border-primary text-primary text-base font-black hover:bg-primary hover:text-white transition-all transform hover:translate-y-[-2px] hover:shadow-xl active:translate-y-0 font-display tracking-tight"
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </nav>
  );
}
