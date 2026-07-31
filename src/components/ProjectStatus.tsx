"use client";

import React, { useState } from 'react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectStatusProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectStatus: React.FC<ProjectStatusProps> = ({ projects, onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'New Launches' | 'Ready Possession'>('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filterTabLabels: Array<{ label: string; value: 'All' | 'New Launches' | 'Ready Possession' }> = [
    { label: 'View All Projects', value: 'All' },
    { label: 'New Launches', value: 'New Launches' },
    { label: 'Ready Possession', value: 'Ready Possession' },
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter((p) => p.status === activeTab);

  const safeIndex = currentIndex % (filteredProjects.length || 1);
  const currentProject = filteredProjects[safeIndex] || projects[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  return (
    <section id="project-status" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Screenshot 4 */}
        <div className="mb-8">
          <span className="text-sm font-sans font-bold tracking-widest text-[#CA932B] uppercase block mb-2">
            PROJECTS STATUS
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F1914] font-normal tracking-tight mb-6">
            Ongoing &amp; Upcoming Projects
          </h2>

          {/* Filter Tabs matching Screenshot 4 segmented control layout */}
          <div className="inline-flex flex-wrap items-center rounded-md border border-[#CA932B] overflow-hidden">
            {filterTabLabels.map((tab, idx) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => {
                    setActiveTab(tab.value);
                    setCurrentIndex(0);
                  }}
                  className={`px-5 py-2.5 text-xs sm:text-sm font-sans font-bold transition-all ${
                    idx !== 0 ? 'border-l border-[#CA932B]' : ''
                  } ${
                    isActive
                      ? 'bg-[#856317] text-white'
                      : 'bg-transparent text-[#856317] hover:bg-[#CA932B]/10'
                  }`}
                  id={`status-tab-${tab.value.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Showcase matching Screenshot 4 */}
        {currentProject && (
          <div className="relative py-4 sm:py-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            
            {/* Left Chevron Button */}
            <button
              onClick={handlePrev}
              className="hidden sm:flex items-center justify-center text-[#CA932B] hover:scale-110 transition-transform shrink-0"
              aria-label="Previous project"
              id="status-prev-btn"
            >
              <ChevronLeft className="w-12 h-12 lg:w-14 lg:h-14 stroke-[1.5]" />
            </button>

            {/* Content & Image Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8 w-full">
              
              {/* Left Text Info Column */}
              <div className="lg:col-span-5 space-y-3 sm:space-y-4 cursor-pointer" onClick={() => onSelectProject(currentProject)}>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#CA932B] font-normal leading-tight">
                  {currentProject.name}
                </h3>

                <div className="flex items-center space-x-2 text-base sm:text-xl font-serif font-bold text-[#1F1914] uppercase tracking-wider">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#CA932B] fill-[#CA932B]" />
                  <span>{currentProject.location.split(',')[0]}</span>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-lg sm:text-2xl font-serif font-bold text-[#1F1914]">
                  <span>{currentProject.typology}</span>
                  <span>{currentProject.priceRange}</span>
                </div>

                <div className="text-base sm:text-lg font-serif text-[#777777]">
                  {currentProject.category || 'Residences & Townships'}
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-7">
                <div 
                  onClick={() => onSelectProject(currentProject)}
                  className="rounded-2xl overflow-hidden shadow-lg border border-[#E0D8C8] h-[260px] sm:h-[360px] lg:h-[400px] w-full cursor-pointer group relative"
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>

            </div>

            {/* Right Chevron Button */}
            <button
              onClick={handleNext}
              className="hidden sm:flex items-center justify-center text-[#CA932B] hover:scale-110 transition-transform shrink-0"
              aria-label="Next project"
              id="status-next-btn"
            >
              <ChevronRight className="w-12 h-12 lg:w-14 lg:h-14 stroke-[1.5]" />
            </button>

            {/* Mobile Nav Arrows Row */}
            <div className="flex sm:hidden items-center justify-center gap-6 pt-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-[#CA932B] text-white flex items-center justify-center shadow-md active:scale-95"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#CA932B] text-white flex items-center justify-center shadow-md active:scale-95"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};


