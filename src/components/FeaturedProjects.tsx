"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface FeaturedProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onViewAllClick: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  onSelectProject,
  onViewAllClick,
}) => {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="featured-projects" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-12">
          <div className="md:col-span-5">
            <span className="text-xs font-sans font-bold tracking-widest text-[#CA932B] uppercase block mb-2">
              FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1914] leading-[1.15]">
              SPACES <br />
              That Define <br />
              Excellence
            </h2>

            <div className="mt-6">
              <button
                onClick={onViewAllClick}
                className="inline-flex items-center space-x-2 text-sm font-bold text-[#1F1914] border-2 border-[#CA932B] hover:bg-[#CA932B] hover:text-white px-6 py-2.5 rounded-lg transition-all group shadow-2xs"
                id="featured-view-all-btn"
              >
                <span>View All Projects</span>
                <ArrowUpRight className="w-4 h-4 text-[#CA932B] group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>

          {/* Cards Layout matching exact PDF grid */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 - Tall Left Card */}
            {featured[0] && (
              <div
                onClick={() => onSelectProject(featured[0])}
                className="group relative h-[300px] sm:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-900 border border-[#E0D8C8]"
                id="featured-card-0"
              >
                <img
                  src={featured[0].image}
                  alt={featured[0].name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-[#CA932B] transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-lg font-serif font-bold uppercase tracking-wider text-white">
                    {featured[0].name}
                  </h3>
                  <p className="text-xs text-slate-200 font-sans mt-0.5">
                    {featured[0].typology}
                  </p>
                  <div className="w-20 h-0.5 bg-[#CA932B] mt-2" />
                </div>
              </div>
            )}

            {/* Column 2 - Stack of 2 Cards */}
            <div className="flex flex-col gap-4">
              {featured[1] && (
                <div
                  onClick={() => onSelectProject(featured[1])}
                  className="group relative h-[142px] sm:h-[162px] lg:h-[182px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-900 border border-[#E0D8C8]"
                  id="featured-card-1"
                >
                  <img
                    src={featured[1].image}
                    alt={featured[1].name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-[#CA932B] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white">
                    <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-white">
                      {featured[1].name}
                    </h3>
                    <p className="text-[11px] text-slate-200 font-sans mt-0.5">
                      {featured[1].typology}
                    </p>
                    <div className="w-16 h-0.5 bg-[#CA932B] mt-1.5" />
                  </div>
                </div>
              )}

              {featured[2] && (
                <div
                  onClick={() => onSelectProject(featured[2])}
                  className="group relative h-[142px] sm:h-[162px] lg:h-[182px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-900 border border-[#E0D8C8]"
                  id="featured-card-2"
                >
                  <img
                    src={featured[2].image}
                    alt={featured[2].name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-[#CA932B] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white">
                    <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-white">
                      {featured[2].name}
                    </h3>
                    <p className="text-[11px] text-slate-200 font-sans mt-0.5">
                      {featured[2].typology}
                    </p>
                    <div className="w-16 h-0.5 bg-[#CA932B] mt-1.5" />
                  </div>
                </div>
              )}
            </div>

            {/* Card 3 - Right Tall Card */}
            {featured[3] && (
              <div
                onClick={() => onSelectProject(featured[3])}
                className="group relative h-[300px] sm:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-900 border border-[#E0D8C8]"
                id="featured-card-3"
              >
                <img
                  src={featured[3].image}
                  alt={featured[3].name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-[#CA932B] transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-lg font-serif font-bold uppercase tracking-wider text-white">
                    {featured[3].name}
                  </h3>
                  <p className="text-xs text-slate-200 font-sans mt-0.5">
                    {featured[3].typology}
                  </p>
                  <div className="w-20 h-0.5 bg-[#CA932B] mt-2" />
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

