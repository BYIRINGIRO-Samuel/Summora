"use client";

import Link from "next/link";
import Button from "../../shared/Button";

export default function Hero() {
  return (
    <section className="bg-white flex flex-col items-center w-full min-h-screen bg-[radial-gradient(circle_at_20%_20%,#f5f7ff_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#fff5f9_0%,transparent_40%)]">
      
      {/* Navigation Headers (Integrated) */}
      <header className="flex w-full max-w-7xl items-center justify-between px-10 py-12">
        <Link href="/" className="flex items-center gap-3 text-xl font-black tracking-tight text-black">
          <div className="h-10 w-10 bg-black flex items-center justify-center rounded-sm">
            <div className="h-3 w-3 bg-white" />
          </div>
          SCRIBEAI
        </Link>
        
        <div className="flex items-center gap-12">
          <Link href="/login" className="text-sm font-bold text-black/60 hover:text-black">Sign in</Link>
          <Button href="/signup" variant="primary">
            Free Trial
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex grow flex-col items-center justify-center text-center max-w-5xl px-8 pb-32">
        <div className="mb-10 px-10 py-4 bg-neutral-100 border border-neutral-200 rounded-full text-[11px] font-black tracking-[0.4em] text-neutral-500 uppercase leading-none">
          AI Meeting Intelligence Protocol
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-black leading-[0.9] tracking-tighter mb-12 uppercase">
          Transcribe <br /> with AI Magic
        </h1>

        <p className="text-xl md:text-2xl text-neutral-400 font-medium mb-16 max-w-4xl leading-relaxed">
          Transform conversations into actionable insights effortlessly with the power of next-generation meeting intelligence.
        </p>

        {/* SEARCH HUB (Premium Redesign) */}
        <div className="w-full max-w-4xl">
           <div className="flex items-center bg-white border border-neutral-200 p-2 rounded-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] transition-all">
              <div className="pl-8 flex items-center text-neutral-400">
                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                 </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search for meetings, summaries, or insights..."
                className="w-full bg-transparent px-6 py-6 text-xl font-medium text-black outline-none placeholder:text-neutral-300"
              />
              <Button variant="primary">
                 Ask AI
              </Button>
           </div>
        </div>

        {/* SELECTION TAGS (Refined) */}
        <div className="flex flex-wrap justify-center gap-5 mt-16">
          {['Transcription', 'AI Summaries', 'Action Items'].map((tag) => (
             <button key={tag} className="px-10 py-4 bg-neutral-50 border border-neutral-100 rounded-full text-xs font-bold text-neutral-500 hover:bg-black hover:text-white hover:border-black transition-all transform hover:-translate-y-1">
                {tag}
             </button>
          ))}
        </div>
      </div>
    </section>
  );
}
