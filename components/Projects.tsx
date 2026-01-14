
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">Selected Works</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h3>
          </div>
          <p className="text-slate-400 max-w-md">
            A curated selection of applications focusing on solve complex problems with clean code and robust design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => {
            // Determine the repository link
            const repoLink = project.githubUrl || (project.link.includes('github.com') ? project.link : null);

            return (
              <div 
                key={project.id} 
                className="group relative glass rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col h-full"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <a 
                      href={project.link} 
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors"
                    >
                      View Case Study
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    
                    {repoLink && (
                      <a 
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 glass rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-indigo-500/50"
                        title="View GitHub Repository"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
