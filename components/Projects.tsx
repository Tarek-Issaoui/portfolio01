import { projects } from '@/lib/data';
import { MediaGallery } from './MediaGallery';

export function Projects() {
  return (
    <section id="projects" className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing real-world applications that demonstrate technical excellence and user-centered design
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={project.id} className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700">
              {/* Project Header */}
              <div className="relative p-8 pb-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{project.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                  {project.description}
                </p>
                
                {/* Media Gallery */}
                <MediaGallery media={project.media || []} projectTitle={project.title} />
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold border border-primary-200 dark:border-primary-700 hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Actions */}
              <div className="px-8 pb-8">
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="group/btn flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-2xl hover:from-primary-700 hover:to-purple-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Live Demo</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="group/btn flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-2xl hover:bg-primary-600 hover:text-white transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Source Code</span>
                    <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-xl mb-8 opacity-90">Let's collaborate on your next project and create exceptional digital experiences together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-primary-600 rounded-2xl hover:bg-gray-100 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start a Project
            </a>
            <a
              href="mailto:Tarek9.9issaoui@gmail.com"
              className="px-8 py-4 border-2 border-white text-white rounded-2xl hover:bg-white hover:text-primary-600 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Discuss Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}