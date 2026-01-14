
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-20 mb-20">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to <span className="text-gradient">scale</span>?</h2>
            <p className="text-slate-400 text-lg mb-8">
              I specialize in taking systems from zero to enterprise-scale. Let's discuss your next architectural challenge.
            </p>
            <div className="space-y-6">
              <a href="mailto:shiva@shivaprogramming.com" className="group flex items-center gap-4 text-white hover:text-indigo-400 transition-colors">
                <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">shiva@shivaprogramming.com</span>
              </a>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-medium">San Francisco, California</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 glass p-10 rounded-3xl border border-white/10 shadow-xl">
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              alert("In a real app, this would send an email! Your architecture request has been received.");
            }}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="e.g. Alex Rivera" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Professional Email</label>
                  <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="alex@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Project Brief</label>
                <textarea required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 h-40 resize-none" placeholder="Describe the system architecture or development needs..."></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all transform hover:scale-[1.01] active:scale-[0.99]">
                Initiate Consultation
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">SP</div>
             <span className="text-white font-bold tracking-tight">Shiva<span className="text-indigo-400">Programming</span></span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Shiva. All architectural designs reserved.</p>
          <div className="flex gap-10">
            {[
              { label: 'GitHub', url: 'https://github.com/shiva-programming' },
              { label: 'LinkedIn', url: 'https://linkedin.com/in/shiva-programming' },
              { label: 'X', url: 'https://twitter.com/shiva_codes' }
            ].map(social => (
              <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">{social.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
