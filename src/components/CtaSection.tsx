"use client";

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CtaSectionProps {
  onContactClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onContactClick }) => {
  return (
    <section className="relative py-20 sm:py-28 bg-slate-950 text-white overflow-hidden">
      {/* Background Image with Dark Skyscraper Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Modern Skyscraper Architecture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 lg:gap-16">
          
          {/* Left Headline */}
          <div className="md:w-1/2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Start Your Property <br />
              Journey Today
            </h2>
          </div>

          {/* Right Text and Button */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-sm sm:text-base text-slate-200 font-sans font-normal leading-relaxed max-w-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing.
            </p>

            <div>
              <button
                onClick={onContactClick}
                className="bg-gradient-to-b from-[#D8A73C] via-[#C39327] to-[#8C6412] hover:from-[#E3B346] hover:to-[#9B7016] text-white px-7 py-3 rounded-lg text-base font-serif font-bold shadow-lg transition-all transform hover:-translate-y-0.5 inline-flex items-center space-x-2"
                id="cta-contact-btn"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

