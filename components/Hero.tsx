'use client';

import { useState } from 'react';
import { ArrowRight, MessageCircle, Eye } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';
import { ResumeModal } from './ResumeModal';

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30">
      <ParticleBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 bg-primary-50 dark:bg-primary-900/20 rounded-full text-primary-700 dark:text-primary-300 text-sm font-semibold mb-8 border border-primary-200 dark:border-primary-800">
              Available for Full-Stack Development Opportunities
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                Tarek Issaoui
              </span>
            </h1>
          </div>
          
          <div className="mb-8 animate-slide-up">
            <p className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Full-Stack Developer
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building scalable web and mobile applications with modern technologies. 
              2+ years of development experience with expertise in frontend and backend development.
            </p>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-slide-up">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">2+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Students Mentored</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Projects Delivered</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Client Satisfaction</div>
            </div>
          </div> */}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-2xl hover:from-primary-700 hover:to-purple-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-2xl hover:bg-primary-600 hover:text-white transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Let's Connect
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </a>
            <button
              onClick={openModal}
              className="group px-8 py-4 bg-gray-800 dark:bg-gray-700 text-white rounded-2xl hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                View Resume
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s' }}></div>
      
      <ResumeModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
}