"use client";

import React from 'react';
import { MapPin } from 'lucide-react';
import { LocationItem } from '../types';

interface ExploreLocationsProps {
  locations: LocationItem[];
  onSelectLocation: (locationName: string) => void;
}

export const ExploreLocations: React.FC<ExploreLocationsProps> = ({ locations, onSelectLocation }) => {
  return (
    <section id="explore-locations" className="py-20 sm:py-28 bg-[#8B671B] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight">
            Explore by Location
          </h2>
        </div>

        {/* 6 Location Cards Grid matching screenshot 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {locations.map((loc, index) => (
            <div
              key={loc.id || index}
              onClick={() => onSelectLocation(loc.name)}
              className="group bg-white/10 hover:bg-white/20 border border-white/25 rounded-2xl h-48 sm:h-56 p-6 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl hover:scale-[1.02]"
              id={`location-card-${loc.id}`}
            >
              <div className="flex items-center space-x-3 text-white mb-2">
                <MapPin className="w-7 h-7 text-white fill-white shrink-0" />
                <h3 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-wider text-white uppercase">
                  {loc.name}
                </h3>
              </div>

              <div className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-white/90 mt-1">
                {loc.projectCount} PROJECTS
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

