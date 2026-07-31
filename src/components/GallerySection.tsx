"use client";

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  gallery: GalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ gallery }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const primaryItems = gallery.slice(0, 5);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % gallery.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1914] tracking-tight">
            Project Gallery
          </h2>
        </div>

        {/* Gallery Mosaic Grid matching Screenshot 9 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[520px]">
          
          {/* Left Feature Column (Large photo) */}
          {primaryItems[0] && (
            <div
              onClick={() => openLightbox(0)}
              className="md:col-span-6 h-[260px] sm:h-[340px] md:h-full rounded-2xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-xl transition-all border border-[#E0D8C8] bg-slate-900"
              id="gallery-item-0"
            >
              <img
                src={primaryItems[0].image}
                alt={primaryItems[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          {/* Right 2x2 Grid Column */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4 h-[260px] sm:h-[340px] md:h-full">
            {primaryItems.slice(1, 5).map((item, idx) => {
              const actualIdx = idx + 1;
              const isLastTile = idx === 3;

              return (
                <div
                  key={item.id || idx}
                  onClick={() => openLightbox(actualIdx)}
                  className="h-full rounded-2xl overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md transition-all border border-[#E0D8C8] bg-slate-900"
                  id={`gallery-item-${actualIdx}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Tile 4 Overlay with "10+" badge matching Screenshot 9 */}
                  {isLastTile && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex items-center justify-center text-white">
                      <span className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-wider">
                        10+
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-[#CA932B] p-2 rounded-full bg-white/10 transition-colors z-50"
            aria-label="Close Lightbox"
            id="lightbox-close-btn"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-[#CA932B] p-3 rounded-full bg-white/10 transition-colors z-50"
            aria-label="Previous image"
            id="lightbox-prev-btn"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={gallery[lightboxIndex].image}
              alt={gallery[lightboxIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-[#CA932B] p-3 rounded-full bg-white/10 transition-colors z-50"
            aria-label="Next image"
            id="lightbox-next-btn"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

