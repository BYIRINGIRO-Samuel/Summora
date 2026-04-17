"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white flex flex-col items-center w-full min-h-screen bg-[radial-gradient(circle_at_20%_20%,#f5f7ff_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#fff5f9_0%,transparent_40%)]">
      
      {/* Navigation - Pushed to Top (Zero top margin/padding on parent) */}
      <header className="flex w-full max-w-7xl items-center justify-between px-10 py-10">
        <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-tight text-black">
          <div className="h-8 w-8 bg-black flex items-center justify-center rounded-sm">
            <div className="h-2 w-2 bg-white" />
          </div>
          SCRIBEAI
        </Link>
        
        <div className="flex items-center gap-10">
          <Link href="/login" className="text-sm font-bold text-black/60 hover:text-black">Sign in</Link>
          {/* Note: Standardized padding for better reliability. py-78 was a non-standard class. */}
          <Link 
            href="/signup" 
            className="rounded-full bg-black px-12 py-5 text-sm font-bold text-white hover:bg-neutral-800 transition-all hover:scale-[1.05]"
          >
            Free Trial
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex grow flex-col items-center justify-center text-center max-w-4xl px-6">
        <div className="mb-8 px-5 py-2 bg-neutral-50 border border-neutral-100 rounded-full text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase">
          AI Meeting Intelligence
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-black leading-tight tracking-tight mb-8">
          Transcribe Meetings <br /> with AI Magic
        </h1>

        <p className="text-lg md:text-xl text-neutral-500 font-medium mb-16 max-w-2xl leading-relaxed">
          Transform conversations into actionable insights effortlessly with the power of next-generation meeting intelligence.
        </p>

        {/* Search Interface */}
        <div className="w-full flex items-center bg-white border border-neutral-200 p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all">
          <div className="pl-6 flex items-center text-neutral-300">
             <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
             </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search for meetings or insights..."
            className="w-full bg-transparent px-6 py-5 text-[1.25rem] font-medium text-black outline-none placeholder:text-neutral-300"
          />
          <button className="bg-black text-white px-12 py-5 rounded-full text-sm font-bold hover:bg-neutral-800 transition-all whitespace-nowrap mr-1">
             Ask AI
          </button>
        </div>

        {/* System States / Tags */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {['Transcription', 'Summary', 'Actions'].map((tag) => (
             <span key={tag} className="px-8 py-3 bg-neutral-50 border border-neutral-100 rounded-full text-xs font-bold text-neutral-400">
                {tag}
             </span>
          ))}
        </div>
      </div>

    </section>
  );
}
