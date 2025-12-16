import { skillCategories } from '@/lib/data';
import { Monitor, Server, Database, GitBranch, Cloud, Wrench, CloudCog, Building, Code, Target, ExternalLink } from 'lucide-react';

export function Skills() {
  return (
    <section id="skills" className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mastering cutting-edge technologies to deliver exceptional results
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 hover:scale-105">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {categoryIndex === 0 ? <Monitor className="w-8 h-8 text-white" /> : 
                   categoryIndex === 1 ? <Server className="w-8 h-8 text-white" /> : 
                   categoryIndex === 2 ? <Database className="w-8 h-8 text-white" /> : 
                   categoryIndex === 3 ? <GitBranch className="w-8 h-8 text-white" /> : 
                   categoryIndex === 4 ? <Cloud className="w-8 h-8 text-white" /> : 
                   <Wrench className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-800 dark:text-gray-200 font-semibold group-hover/skill:text-primary-600 dark:group-hover/skill:text-primary-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full transition-all duration-1000 ease-out shadow-sm"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Achievements
            </h3>
            <a
              href="https://www.credly.com/users/tarek-issaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-medium"
            >
              View Verified Certifications
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AWS Cloud Developing', year: '2024', icon: CloudCog },
              { title: 'AWS Cloud Foundations', year: '2024', icon: Building },
              { title: 'Scientific Computing Python', year: '2023', icon: Code },
              { title: 'AWS Cloud Practitioner', year: '2023', icon: Target }
            ].map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-primary-100 dark:border-primary-800 hover:scale-105 transition-transform duration-300 text-center">
                <div className="mb-4 flex justify-center">
                  <cert.icon className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      

    </section>
  );
}