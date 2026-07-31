"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface NewlyLaunchedProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const NewlyLaunched: React.FC<NewlyLaunchedProps> = ({ projects, onSelectProject }) => {
  // Define the 5 specific items with matching imagery for screenshot 7
  const displayCards = [
    {
      id: 'card-1',
      name: 'Godrej Highrise',
      typology: '2 & 3 Bed Residences',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      projectRef: projects[0] || projects[1],
    },
    {
      id: 'card-2',
      name: 'Green Expressway',
      typology: 'Township Plots',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      projectRef: projects[1] || projects[0],
    },
    {
      id: 'card-3', // Center featured card
      name: 'GODREJ TOWNSHIP',
      typology: '2 & 3 Bed Residences',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      isCenter: true,
      projectRef: projects[0],
    },
    {
      id: 'card-4',
      name: 'Godrej Highrise',
      typology: '2 & 3 Bed Residences',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      projectRef: projects[2] || projects[0],
    },
    {
      id: 'card-5',
      name: 'Green Expressway',
      typology: 'Township Plots',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      projectRef: projects[3] || projects[0],
    },
  ];

  return (
    <section id="newly-launched" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-sans font-bold tracking-widest text-[#CA932B] uppercase block mb-2">
            NEW PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1F1914] tracking-tight">
            Newly Launched Projects
          </h2>
        </div>

        {/* 5 Card Grid matching Screenshot 7 (12-column grid: 2-2-4-2-2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
          {displayCards.map((card, idx) => {
            const isCenter = card.isCenter;
            const colSpanClass = isCenter ? 'lg:col-span-4' : 'lg:col-span-2';

            return (
              <div
                key={`${card.id}-${idx}`}
                onClick={() => card.projectRef && onSelectProject(card.projectRef)}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-[420px] sm:h-[460px] bg-slate-800 ${colSpanClass}`}
                id={`new-project-card-${idx}`}
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Top-Right Arrow Badge (Translucent circle with white arrow) */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-sm group-hover:bg-[#CA932B] group-hover:border-[#CA932B] transition-all z-10">
                  <ArrowUpRight className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Bottom Banner - If Center card, solid mustard banner like screenshot 7 */}
                {isCenter ? (
                  <div className="absolute bottom-0 left-0 right-0 bg-[#856317] p-5 text-white">
                    <h3 className="text-lg font-serif font-bold tracking-wider text-white uppercase">
                      {card.name}
                    </h3>
                    <p className="text-xs font-sans text-slate-100 mt-1">
                      {card.typology}
                    </p>
                    <div className="w-full h-[1px] bg-white/50 mt-3" />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                    <h3 className="text-sm font-serif font-bold text-white uppercase">
                      {card.name}
                    </h3>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


