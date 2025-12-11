import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users, ExternalLink, Github, Layers, X } from 'lucide-react';
import { PROJECTS } from '../data/projects';

const Projects = () => {
  const [imageIndexes, setImageIndexes] = useState<{ [key: string]: number }>(
    PROJECTS.reduce((acc, p) => ({ ...acc, [p.id]: 0 }), {})
  );

  const [lightboxState, setLightboxState] = useState<{ projectId: string; index: number } | null>(null);

  const nextImage = (id: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setImageIndexes(prev => ({ ...prev, [id]: (prev[id] + 1) % total }));
  };

  const prevImage = (id: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setImageIndexes(prev => ({ ...prev, [id]: prev[id] === 0 ? total - 1 : prev[id] - 1 }));
  };

  // --- FIX START ---
  // We check for both activeProject AND lightboxState to satisfy TypeScript
  const activeProject = lightboxState ? PROJECTS.find(p => p.id === lightboxState.projectId) : null;
  const activeImage = activeProject && lightboxState ? activeProject.images[lightboxState.index] : null;
  // --- FIX END ---

  const handleLightboxNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeProject || !lightboxState) return;
    
    const nextIndex = (lightboxState.index + 1) % activeProject.images.length;
    setLightboxState({ ...lightboxState, index: nextIndex });
    
    // Sync the background grid too
    setImageIndexes(prev => ({ ...prev, [activeProject.id]: nextIndex }));
  }, [activeProject, lightboxState]);

  const handleLightboxPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeProject || !lightboxState) return;

    const prevIndex = lightboxState.index === 0 
      ? activeProject.images.length - 1 
      : lightboxState.index - 1;
      
    setLightboxState({ ...lightboxState, index: prevIndex });
    
    // Sync the background grid too
    setImageIndexes(prev => ({ ...prev, [activeProject.id]: prevIndex }));
  }, [activeProject, lightboxState]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxState) return;
      
      switch (e.key) {
        case 'Escape': setLightboxState(null); break;
        case 'ArrowRight': handleLightboxNext(); break;
        case 'ArrowLeft': handleLightboxPrev(); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState, handleLightboxNext, handleLightboxPrev]);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
            <Layers size={14} />
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-400 max-w-2xl">
            A collection of applications demonstrating my full-stack capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PROJECTS.map((project) => {
            const currentIndex = imageIndexes[project.id];
            
            return (
              <article
                key={project.id}
                className="group flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="relative aspect-[16/10] bg-gray-100 dark:bg-slate-950 overflow-hidden group/image transition-all duration-300 hover:opacity-95 cursor-zoom-in"
                  onClick={() => setLightboxState({ projectId: project.id, index: currentIndex })}
                >
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img.url}
                      alt={img.alt || project.title}
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
                        i === currentIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}

                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => prevImage(project.id, project.images.length, e)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 dark:bg-black/50 text-gray-800 dark:text-white backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black z-10"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={(e) => nextImage(project.id, project.images.length, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 dark:bg-black/50 text-gray-800 dark:text-white backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black z-10"
                      >
                        <ChevronRight size={20} />
                      </button>

                      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                        {project.images.map((_, i) => (
                          <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              i === currentIndex
                                ? 'w-4 bg-white dark:bg-blue-500 shadow-sm'
                                : 'w-1.5 bg-white/50 dark:bg-white/30'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub Repository">
                          <Github size={20} />
                        </a>
                      )}
                      {project.livePreview && (
                        <a href={project.livePreview} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Live Preview">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Users size={14} />
                      {project.role}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {project.timeline}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-600 dark:bg-slate-700/50 dark:text-slate-300 border border-gray-200 dark:border-slate-600">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-slate-700">
                      <ul className="space-y-1.5">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-500 dark:text-slate-400">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {/* Added `&& lightboxState` check below to satisfy TS */}
      {activeProject && activeImage && lightboxState && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLightboxState(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            onClick={() => setLightboxState(null)}
          >
            <X size={24} />
          </button>

          {activeProject.images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
                onClick={handleLightboxPrev}
              >
                <ChevronLeft size={32} />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
                onClick={handleLightboxNext}
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <div className="relative max-w-7xl w-full max-h-screen flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeImage.url}
              alt={activeImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {activeProject.images.map((_, i) => (
                   <div 
                     key={i}
                     className={`h-2 rounded-full transition-all duration-300 ${
                        i === lightboxState.index 
                          ? 'w-6 bg-white shadow-lg' 
                          : 'w-2 bg-white/30 hover:bg-white/50 cursor-pointer'
                     }`}
                     onClick={() => {
                        setLightboxState({ ...lightboxState, index: i });
                        setImageIndexes(prev => ({ ...prev, [activeProject.id]: i }));
                     }}
                   />
                ))}
            </div>
            <p className="mt-4 text-white/80 font-medium text-lg">
                {activeProject.title} <span className="text-white/40 text-sm mx-2">|</span> <span className="text-sm font-normal text-white/60">{activeImage.alt}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;