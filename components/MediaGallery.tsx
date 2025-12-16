'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, X, Play } from 'lucide-react';
import { ProjectMedia } from '@/types';

interface MediaGalleryProps {
  media: ProjectMedia[];
  projectTitle: string;
}

export function MediaGallery({ media, projectTitle }: MediaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const mediaCount = media?.length || 0;

  const selectedMedia = media[selectedIndex];
  const imageMedia = media.filter(item => item.type === 'image');
  const currentImageIndex = imageMedia.findIndex(item => item === selectedMedia);
  
  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % imageMedia.length;
    const nextMediaIndex = media.findIndex(item => item === imageMedia[nextIndex]);
    setSelectedIndex(nextMediaIndex);
  };
  
  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + imageMedia.length) % imageMedia.length;
    const prevMediaIndex = media.findIndex(item => item === imageMedia[prevIndex]);
    setSelectedIndex(prevMediaIndex);
  };

  return (
    <>
      <div className="mb-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 mb-4 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          Show Media ({mediaCount})
        </button>
        
        {isExpanded && mediaCount > 0 && (
          <div className="relative aspect-video bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden mb-4">
          {selectedMedia.type === 'image' ? (
            <img
              src={selectedMedia.url}
              alt={selectedMedia.alt || `${projectTitle} screenshot`}
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setIsModalOpen(true)}
            />
          ) : (
            <video
              src={selectedMedia.url}
              className="w-full h-full object-cover"
              controls
              poster={selectedMedia.alt}
            />
          )}
          </div>
        )}
        
        {isExpanded && media && media.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {media.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === selectedIndex
                    ? 'border-primary-500 scale-105'
                    : 'border-gray-200 dark:border-gray-600 hover:border-primary-300'
                }`}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.url}
                    alt={item.alt || `${projectTitle} thumbnail`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                    <Play className="w-6 h-6 text-gray-500" />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && media && selectedMedia && selectedMedia.type === 'image' && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300" 
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedMedia.url}
              alt={selectedMedia.alt || `${projectTitle} full size`}
              className="max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
            
            {imageMedia.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}