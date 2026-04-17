"use client";

import Link from "next/link";

const features = [
  {
    title: "Real-time Transcription",
    description: "Multi-speaker identification and sub-second latency transcription in over 50 languages.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI Summarization",
    description: "Get the gist of any meeting in seconds. Action items, key decisions, and next steps automatically extracted.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Smart Search",
    description: "Search across all your meetings for specific keywords, themes, or speakers. Never lose another insight.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    gradient: "from-orange-500 to-amber-500"
  },
  {
    title: "Seamless Integration",
    description: "Connects with Zoom, Teams, Meet, and Slack. Automatically syncs summaries to your CRM or project tool.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 3 3 0 01-3 3 3 3 0 01-3-3 2 2 0 01-2-2V4a2 2 0 114 0v1a4 4 0 008 0V4a2 2 0 012-2 2 2 0 012 2v1a2 2 0 01-2 2 3 3 0 01-3 3 3 3 0 01-3-3 2 2 0 01-2-2V4z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-500"
  }
];

export default function Features() {
  return (
    <section id="features" className="section-spacing bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">How it works</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight">Everything you need to run better meetings.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">{feature.title}</h4>
              <p className="text-text-muted text-lg leading-relaxed">
                {feature.description}
              </p>
              <Link href="#" className="mt-6 text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn more 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
