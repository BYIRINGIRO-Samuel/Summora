"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full px-4 py-4 md:px-12 md:py-10 bg-[#f1f4f9]">
      {/* Main Container */}
      <div className="relative w-full max-w-[1440px] mx-auto bg-white rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(8,32,82,0.05)] border border-primary/5 min-h-[90vh] flex flex-col items-center">
        
        {/* BUBBLE SHADOWS (Innovative blurred blobs) */}
        <div className="absolute top-[10%] -left-20 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[20%] -right-20 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-pink-500/10 rounded-full blur-[160px] pointer-events-none" />

        {/* Navigation */}
        <nav className="w-full px-8 md:px-16 py-10 flex items-center justify-between relative z-20">
          <Link href="/" className="text-2xl font-black tracking-tighter text-black flex items-center gap-2">
             <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
             </div>
             ScribeAI
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            <Link href="#" className="text-sm font-bold text-black/60 hover:text-black transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link href="#" className="text-sm font-bold text-black/40 hover:text-black transition-colors">Features</Link>
            <Link href="#" className="text-sm font-bold text-black/40 hover:text-black transition-colors">Pricing</Link>
            <Link href="#" className="text-sm font-bold text-black/40 hover:text-black transition-colors">Enterprise</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="px-6 py-2.5 rounded-full border border-black/10 text-sm font-bold hover:bg-black/5 transition-all">Sign in</Link>
            <Link href="/signup" className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-bold hover:bg-black/80 transition-all shadow-lg">Free Trial</Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-6 relative z-20 pb-16">
          <h1 className="text-6xl md:text-[5.5rem] font-black text-black leading-[1.05] tracking-tight font-display mb-10 max-w-4xl">
            Transcribe Meetings <br /> with AI Magic
          </h1>
          
          <p className="max-w-2xl text-xl text-black/40 font-medium leading-relaxed mb-16">
            Transform conversations into actionable insights effortlessly with the <br /> power of meeting intelligence.
          </p>

          {/* SEARCH COMPONENT (Innovative UI) */}
          <div className="w-full max-w-3xl relative group">
             <div className="absolute inset-0 bg-black/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative flex items-center bg-white/40 backdrop-blur-3xl border border-white p-2.5 rounded-full shadow-[0_30px_70px_-10px_rgba(0,0,0,0.08)]">
                <div className="pl-8 flex items-center text-black/30">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                   </svg>
                </div>
                <input 
                   type="text" 
                   placeholder="Search for meetings, summaries, or insights"
                   className="w-full bg-transparent border-none outline-none px-6 py-6 text-xl font-medium text-black placeholder:text-black/20"
                />
                <button className="bg-black text-white px-12 py-5 rounded-full font-bold text-sm tracking-[0.2em] uppercase hover:bg-primary transition-all shadow-xl whitespace-nowrap">
                   Ask AI
                </button>
             </div>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap items-center justify-center gap-5 mt-12">
             {['AI', 'Fashion', 'Design', 'Dark'].map((tag) => (
                <button 
                   key={tag}
                   className="px-10 py-4 rounded-full bg-black/[0.03] border border-black/5 font-bold text-sm text-black/60 hover:bg-black hover:text-white transition-all transform hover:scale-105"
                >
                   {tag}
                </button>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}
