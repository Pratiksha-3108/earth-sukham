"use client";

import React from 'react';
import { DeveloperPartner } from '../types';

interface DeveloperPartnersProps {
  developers: DeveloperPartner[];
}

export const DeveloperPartners: React.FC<DeveloperPartnersProps> = () => {
  return (
    <section id="developer-partners" className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm font-sans font-bold tracking-widest text-[#CA932B] uppercase block mb-2">
            DEVELOPER PARTNERS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1F1914] tracking-tight">
            Earth Sukham Developer Partners
          </h2>
        </div>

        {/* Concentric Golden Arches Graphic matching Screenshot 6 */}
        <div className="relative py-8 sm:py-12 max-w-4xl mx-auto flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl aspect-[2/1] relative flex items-end justify-center">
            
            {/* 3 Golden Concentric Arches in SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Golden Arc */}
              <path
                d="M 100 360 A 300 300 0 0 1 700 360"
                stroke="#C5902B"
                strokeWidth="7"
                strokeLinecap="round"
              />
              {/* Middle Golden Arc */}
              <path
                d="M 200 360 A 200 200 0 0 1 600 360"
                stroke="#C5902B"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Inner Golden Arc */}
              <path
                d="M 290 360 A 110 110 0 0 1 510 360"
                stroke="#C5902B"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Horizontal Golden Baseline */}
              <line
                x1="40"
                y1="360"
                x2="760"
                y2="360"
                stroke="#C5902B"
                strokeWidth="1.5"
                strokeOpacity="0.8"
              />
            </svg>

            {/* Logo Badge 1 - Top Left Outer Arc (Kolte Patil) */}
            <div className="absolute top-[28%] left-[21%] transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-[#E5C16C] shadow-xl p-2 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform">
                {/* Kolte Patil Emblem SVG */}
                <svg className="w-8 h-8 sm:w-11 sm:h-11 mb-0.5" viewBox="0 0 100 100">
                  <circle cx="50" cy="45" r="35" fill="#F4B400" opacity="0.9" />
                  <path d="M 20 45 Q 50 20 80 45 Q 50 65 20 45 Z" fill="#1F1914" />
                  <path d="M 35 38 Q 45 30 55 38 Q 65 48 45 55 Z" fill="#F4B400" />
                </svg>
                <span className="font-serif font-extrabold text-[9px] sm:text-[11px] text-[#1F1914] tracking-tight leading-none uppercase">
                  KOLTE • PATIL
                </span>
                <span className="text-[6px] sm:text-[7px] text-slate-500 tracking-tighter mt-0.5">
                  Creation, not Construction
                </span>
              </div>
            </div>

            {/* Logo Badge 2 - Middle Arc Upper Right (Godrej) */}
            <div className="absolute top-[52%] left-[68%] transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-[#E5C16C] shadow-xl p-2 flex items-center justify-center text-center hover:scale-105 transition-transform">
                <span className="font-serif font-bold text-lg sm:text-2xl italic tracking-tight text-[#C0262D]">
                  Godrej
                </span>
              </div>
            </div>

            {/* Logo Badge 3 - Outer Arc Lower Right (Trade Centre) */}
            <div className="absolute top-[58%] left-[84%] transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-18 h-18 sm:w-26 sm:h-26 rounded-full bg-white border-2 border-[#E5C16C] shadow-xl p-2 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform">
                {/* Trade Centre Globes SVG */}
                <div className="flex items-center justify-center -space-x-1 mb-0.5">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#1E3A8A] flex items-center justify-center overflow-hidden">
                    <div className="w-2.5 h-2.5 bg-[#EA580C] rounded-full transform -translate-x-1" />
                  </div>
                  <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#2563EB] flex items-center justify-center overflow-hidden z-1">
                    <div className="w-3 h-3 bg-[#F97316] rounded-full" />
                  </div>
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#1E3A8A] flex items-center justify-center overflow-hidden">
                    <div className="w-2.5 h-2.5 bg-[#EA580C] rounded-full transform translate-x-1" />
                  </div>
                </div>
                <span className="font-sans font-black text-[8px] sm:text-[10px] text-[#0F172A] tracking-tighter uppercase leading-tight">
                  TRADE CENTRE
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


