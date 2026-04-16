"use client";

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
    <section id="features" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Core Technology</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Unlock the power of your conversations.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-3xl bg-surface/40 border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-primary">{feature.title}</h4>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
