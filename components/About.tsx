import { AnimatedCounter } from './AnimatedCounter';
import { Monitor, Zap, Rocket } from 'lucide-react';

export function About() {
  const expertise = [
    { icon: Monitor, title: 'Full-Stack Development', desc: 'End-to-end web and mobile application development' },
    { icon: Zap, title: 'Modern Technologies', desc: 'React, Node.js, TypeScript, and cutting-edge tools' },
    { icon: Rocket, title: 'Solution Architecture', desc: 'Designing scalable and maintainable systems' }
  ];

  return (
    <section id="about" className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating exceptional digital solutions and building high-performing Web && Mobile applications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-bold text-primary-600">Full-Stack Developer</span> with 2+ years of experience in web and mobile development. 
                I specialize in React, Angular, Node.js, and modern JavaScript technologies to build scalable applications.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm capable of <span className="font-bold text-purple-600">designing, brainstorming, project setup, coding, and deployment</span> 
                of programming products. My expertise spans from frontend interfaces to backend APIs and database design.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My goal is to make the world better by developing useful, high-quality software products while 
                continuously learning new technologies and mentoring fellow developers.
              </p>
            </div>
            
            {/* <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="text-4xl font-black text-primary-600 dark:text-primary-400 mb-2">
                  <AnimatedCounter end={20} suffix="+" />
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Developers Mentored</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="text-4xl font-black text-purple-600 dark:text-purple-400 mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Success Rate</div>
              </div>
            </div> */}
          </div>
          
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
                <div className="text-center mb-6">
                  <div className="w-44 h-52 mx-auto mb-4 relative">
                    <img 
                      src="tarek_image.jpeg" 
                      alt="Tarek Issaoui" 
                      className="w-full h-full object-cover rounded-full shadow-lg border-4 border-gradient-to-br from-primary-500 to-purple-600"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-purple-600/20"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to Collaborate</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 dark:text-gray-300">Ready for immediate deployment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 dark:text-gray-300">Remote & on-site collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 dark:text-gray-300">Scalable enterprise solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div key={index} className="group bg-white   dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 hover:scale-105">
              <div className="mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto" />
              </div>
              <h3 className="text-xl  text-center font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 text-center dark:text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}