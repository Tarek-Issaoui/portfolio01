const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Daleelteq',
    period: 'Mar 2024 — Present',
    description: 'Building end-to-end web applications using Angular, React, Tailwind, and Spring Boot. Focused on secure architectures with RBAC and JWT authentication, and close collaboration with cross-functional teams to deliver scalable, production-ready solutions.',
    technologies: ['Angular', 'React && React Native','TailwindCSS', 'SpringBoot','Django REST Framework', 'TypeScript', 'PostgreSQL']
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    period: 'Jan 2023 — Present',
    description: 'Delivering custom web and Desktop solutions for various clients. Specialized in React, Angular, and Node.js development with focus on scalable architecture and user experience.',
    technologies: ['React', 'Angular', 'Node.js', 'MongoDB', 'TypeScript', 'TailwindCSS']
  },
  {
    title: 'Frontend Developer (Part-Time)',
    company: 'Dar Masarat | دار مسارات',
    period: 'Feb 2025 — May 2025',
    description: 'Developed high-performance single-page applications using React, Hooks, and Redux, with secure JWT/OAuth authentication and real-time WebSocket integrations. Focused on responsive, mobile-first UI, performance optimization, and clean, maintainable frontend architecture.',
    technologies: ['TypeScript','React', 'Redux', 'Django', 'PostgreSQL',  'SCSS/SASS', 'WebSocket']
  },
  {
    title: 'Full Stack JavaScript Developer/Instructor',
    company: 'ReBootKamp (RBK)',
    period: 'Sep 2023 — Feb 2024',
    description: 'Delivered interactive workshops and mentored 20+ students through full-stack JavaScript projects. Enhanced teamwork, problem-solving, and provided debugging assistance.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL']
  }
];

export function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in full-stack development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
            
            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Mobile layout */}
                  <div className="md:hidden">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4">
                        {exp.company}
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:flex items-start">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900 relative z-10">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                              {exp.title}
                            </h3>
                            <p className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                              {exp.company}
                            </p>
                          </div>
                          <div className="mt-2 lg:mt-0">
                            <span className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                              {exp.period}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}