
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        
        {/* About / Bio Section */}
        <section id="about" className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-indigo-600/10 blur-[120px] rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                alt="Shiva - Solution Architect" 
                className="relative z-10 w-full aspect-[4/5] object-cover rounded-[48px] border border-white/10 shadow-2xl transition-all duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute -bottom-8 -left-8 glass p-10 rounded-3xl z-20 hidden md:block border border-white/10 shadow-2xl backdrop-blur-xl">
                 <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-600/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">50+</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Systems Deployed</div>
                      </div>
                    </div>
                    <div className="h-px bg-white/5 w-full"></div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">100%</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Reliability Target</div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-6 px-4 py-1 glass inline-block rounded-full border border-white/5">The Architect</h2>
              <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Bridging Vision with <span className="text-gradient">Performance</span>.</h3>
              <div className="space-y-6 text-slate-400 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  As a <span className="text-white font-medium">Solution Architect</span>, I don't just write code—I design the blueprints for business success. My expertise lies in evaluating complex operational needs and translating them into robust, decoupled architectures.
                </p>
                <p>
                  With nearly a decade of experience across fintech, logistics, and AI sectors, I've mastered the art of balancing high-speed delivery with long-term system stability and security.
                </p>
                <p>
                  I am a firm believer in <span className="text-white font-medium">Infrastructure as Code</span> and <span className="text-white font-medium">AI-first workflows</span>, ensuring that modern engineering practices are deeply embedded in every layer of the stack.
                </p>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all">
                  Book Architecture Review
                </a>
                <a href="https://github.com/shiva-programming" target="_blank" className="px-8 py-4 glass border border-white/10 rounded-xl text-white font-bold hover:bg-white/5 transition-all">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
