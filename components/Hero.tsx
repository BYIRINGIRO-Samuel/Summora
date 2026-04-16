"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-primary mb-8 animate-float">
          <span className="flex h-2 w-2 rounded-full bg-primary" />
          Powered by GPT-4 Omni
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Focus on the meeting, <br />
          <span className="gradient-text">We&apos;ll handle the notes.</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-text-muted mb-10 leading-relaxed">
          The AI meeting assistant that records, transcribes, and summarizes your calls 
          into actionable insights. Seamlessly integrates with Zoom, Google Meet, and Teams.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link href="/signup" className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all transform hover:scale-105 active:scale-95">
            Start free trial
          </Link>
          <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all">
            See how it works
          </a>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="relative w-full max-w-5xl mx-auto glass-card p-2 animate-float">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl pointer-events-none" />
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
             <div className="bg-surface/80 p-6 flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-4 text-xs font-mono text-text-muted">meeting_notes_internal_q3.ms</span>
                  </div>
                  <div className="px-3 py-1 bg-primary/20 rounded-md text-[10px] text-primary font-bold uppercase tracking-wider">
                    Transcribing...
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 flex flex-col gap-4">
                    <div className="h-4 w-1/3 bg-white/5 rounded" />
                    <div className="h-3 w-full bg-white/5 rounded" />
                    <div className="h-3 w-full bg-white/5 rounded" />
                    <div className="h-3 w-2/3 bg-white/5 rounded" />
                    <div className="mt-4 flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3 w-1/4 bg-white/10 rounded" />
                        <div className="h-2 w-full bg-white/5 rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-1 flex flex-col gap-4 border-l border-white/5 pl-6">
                    <span className="text-xs font-bold text-white uppercase opacity-40">AI Key Insights</span>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex gap-3">
                          <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
