'use client';

import { useState, useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-5xl h-[90vh] sm:h-[95vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-700 animate-slide-up my-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tarek Issaoui</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Developer </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href="https://devly.pro/tarek-issaoui-dec-2025.pdf"
              download="Tarek_Issaoui_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
            
            <button
              type="button"
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              title="Close resume modal"
              aria-label="Close resume modal"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 relative bg-gray-50 dark:bg-gray-800 rounded-b-2xl overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-10">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Loading resume...</p>
              </div>
            </div>
          )}
          
          <iframe
            src="https://devly.pro/tarek-issaoui-dec-2025.pdf#toolbar=1&navpanes=0&scrollbar=1"
            className="w-full h-full border-0 rounded-b-2xl"
            title="Tarek Issaoui Resume"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}