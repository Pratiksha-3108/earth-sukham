"use client";

import React from 'react';
import { X, MapPin, CheckCircle2, Building, ShieldCheck, Tag, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onEnquire: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, onEnquire }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden relative my-8 border border-slate-200 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white bg-slate-950/50 hover:bg-slate-950/80 p-2 rounded-full transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative h-64 sm:h-80 bg-slate-900">
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-indigo-600 text-white text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                {project.status}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border border-white/30">
                {project.city}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
              {project.name}
            </h2>

            <div className="flex items-center space-x-1.5 text-xs text-indigo-300 font-semibold mt-1">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Price & Typology Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-indigo-50/60 p-4 rounded-xl border border-indigo-200/50">
            <div>
              <span className="text-[11px] uppercase font-semibold text-slate-500 block">Typology</span>
              <span className="text-sm font-bold text-slate-900">{project.typology}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase font-semibold text-slate-500 block">Starting Price</span>
              <span className="text-lg font-bold text-indigo-600">{project.priceRange}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[11px] uppercase font-semibold text-slate-500 block">Developer</span>
              <span className="text-sm font-bold text-slate-900">{project.developer}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-sans font-bold text-slate-900 uppercase tracking-wider mb-2">
              Project Overview
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {project.description || 'Verified luxury township with state-of-the-art architecture, vast open spaces, premium clubhouses, and seamless city connectivity.'}
            </p>
          </div>

          {/* Amenities */}
          {project.amenities && project.amenities.length > 0 && (
            <div>
              <h3 className="text-sm font-sans font-bold text-slate-900 uppercase tracking-wider mb-3">
                Key Amenities
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-1.5 bg-slate-100 text-slate-800 text-xs px-3 py-1.5 rounded-full font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verification Badge */}
          <div className="flex items-center space-x-3 p-3.5 bg-emerald-50 text-emerald-900 rounded-xl text-xs border border-emerald-200">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>Earth Sukham RERA Verified:</strong> Title deeds, legal clearances, and developer escrow compliance verified by our legal audit team.
            </span>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 border border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-50 text-sm transition-colors"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onEnquire();
              }}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 rounded-xl text-sm font-bold shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
