
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-medium text-indigo-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Strategizing Enterprise-Grade Solutions
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-[1.05] mb-8 tracking-tighter">
            Architecting <span className="text-gradient">Scalable</span> Digital Systems.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-3xl">
            I'm Shiva—a <span className="text-white font-semibold">Solution Architect</span> and Engineer. I transform complex business requirements into robust, high-performance technical architectures that drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
            >
              Explore Portfolio
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 glass border border-white/10 text-white rounded-xl font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              Request Consultation
            </a>
          </div>
          
          <div className="mt-20 flex flex-wrap items-center gap-12 grayscale opacity-40">
             {['AWS Certified', 'Kubernetes', 'Kafka', 'PostgreSQL', 'Terraform', 'Distributed Systems'].map(tech => (
               <span key={tech} className="text-xs font-bold tracking-[0.2em] uppercase">{tech}</span>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
