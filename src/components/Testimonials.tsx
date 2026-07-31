"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Screenshot */}
        <div className="text-left mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-sans font-bold tracking-widest text-[#CA932B] uppercase block mb-3">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1914] tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Cards Carousel Container */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-8 lg:px-12">
          
          {/* 3 Columns Layout matching Screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 items-stretch">
            {testimonials.map((item, index) => {
              const isHighlight = index === activeIndex;
              const authorName = item.author || item.name || 'Vinayak Gaitonde';
              const reviewText = item.review || item.content || '';
              const reviewDate = item.date || '22 January 2025';

              return (
                <div
                  key={item.id || index}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-[2rem] p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer relative ${
                    isHighlight
                      ? 'bg-gradient-to-b from-[#C7932C] via-[#9B701D] to-[#3B2808] text-white shadow-2xl scale-105 z-10 min-h-[380px]'
                      : 'bg-white text-[#1F1914] shadow-md hover:shadow-lg min-h-[340px] my-auto'
                  }`}
                  id={`testimonial-card-${index}`}
                >
                  <div>
                    {/* Top Date aligned right */}
                    <div className="text-right mb-5">
                      <span className={`text-xs sm:text-sm font-sans font-bold ${
                        isHighlight ? 'text-white' : 'text-black'
                      }`}>
                        {reviewDate}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-sans ${
                      isHighlight ? 'text-white font-medium' : 'text-slate-900 font-bold'
                    }`}>
                      {reviewText}
                    </p>
                  </div>

                  {/* Author Avatar & Name */}
                  <div className="flex items-center space-x-3 pt-4 mt-auto">
                    <img
                      src={item.avatar}
                      alt={authorName}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white/50 shadow-sm"
                    />
                    <div>
                      <h4 className={`text-sm sm:text-base font-sans font-bold ${
                        isHighlight ? 'text-white' : 'text-slate-900'
                      }`}>
                        {authorName}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left / Right Circular Golden Arrow Nav Buttons - Positioned outside on left & right */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 sm:-left-3 lg:-left-6 w-12 h-12 rounded-full bg-[#CA932B] hover:bg-[#A3731B] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-none z-20"
            aria-label="Previous testimonial"
            id="testimonial-prev-btn"
          >
            <ChevronLeft className="w-6 h-6 text-white stroke-[2.5]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 sm:-right-3 lg:-right-6 w-12 h-12 rounded-full bg-[#CA932B] hover:bg-[#A3731B] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-none z-20"
            aria-label="Next testimonial"
            id="testimonial-next-btn"
          >
            <ChevronRight className="w-6 h-6 text-white stroke-[2.5]" />
          </button>

        </div>

      </div>
    </section>
  );
};


