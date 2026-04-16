import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/30">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="relative glass-card p-12 md:p-20 overflow-hidden text-center">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 relative z-10">
                Ready to transform your <br />
                <span className="gradient-text">meeting culture?</span>
              </h2>
              <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto relative z-10">
                Join 5,000+ teams who use MeetScribe to turn talk into action. 
                Start your 14-day free trial today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                <Link href="/signup" className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-background font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                  Get Started for Free
                </Link>
                <Link href="/demo" className="text-white font-semibold hover:underline decoration-primary underline-offset-8">
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">MeetScribe</span>
            </div>
            <p className="text-text-muted max-w-xs leading-relaxed">
              Making meetings more productive with world-class AI transcription and analysis.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Product</h5>
            <ul className="space-y-4">
              <li><Link href="#" className="text-text-muted hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="text-text-muted hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-text-muted hover:text-white transition-colors">Security</Link></li>
              <li><Link href="#" className="text-text-muted hover:text-white transition-colors">Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Company</h5>
            <ul className="space-y-4">
              <li><Link href="#" className="text-text-muted hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-text-muted hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-text-muted hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-text-muted hover:text-white transition-colors">Legal</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted font-medium">
          <p>© 2026 MeetScribe AI Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
