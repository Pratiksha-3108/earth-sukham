"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './common/Logo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onContactClick }) => {
  return (
    <footer className="relative bg-[#FAF7F2] text-[#1F1914] pt-8 pb-12 overflow-hidden border-t border-[#EAE6DD]">
      
      {/* Massive Top Watermark Text "EARTH SUKHAM" matching Screenshot 11 */}
      <div className="w-full text-center py-6 sm:py-10 select-none overflow-hidden max-w-7xl mx-auto px-6 sm:px-12">
        <h1 className="font-sans font-black text-3xl sm:text-6xl md:text-7xl lg:text-9xl uppercase text-[#E0DAD0] tracking-wider leading-none text-center whitespace-nowrap">
          EARTH SUKHAM
        </h1>
      </div>

      {/* Golden Horizontal Lines with Gap on both sides of Centered Logo Box */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6 flex items-center justify-center">
        {/* Left Golden Line */}
        <div className="flex-1 h-[1.5px] bg-[#C5902B]" />

        {/* Centered Logo Box with distance/gap on both sides */}
        <div className="bg-white mx-6 sm:mx-10 px-6 py-3 rounded-xl border border-[#E0D8C8] shadow-sm flex items-center justify-center shrink-0">
          <Logo size="sm" />
        </div>

        {/* Right Golden Line */}
        <div className="flex-1 h-[1.5px] bg-[#C5902B]" />
      </div>

      {/* Main Footer 3 Columns */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          
          {/* Column 1: About Site */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-2xl text-[#CA932B]">
              About Site
            </h3>
            <p className="text-sm text-[#333333] font-serif leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the Bride Printing Library,Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the Bride Printing Library,
            </p>

            {/* Social Media Icons in Mustard Gold matching Screenshot 11 */}
            <div className="flex items-center space-x-4 pt-3 text-[#CA932B]">
              <a href="#facebook" className="hover:scale-110 transition-transform" aria-label="Facebook">
                <Facebook className="w-6 h-6 fill-[#CA932B] text-[#CA932B]" />
              </a>
              <a href="#twitter" className="hover:scale-110 transition-transform" aria-label="Twitter">
                <Twitter className="w-6 h-6 fill-[#CA932B] text-[#CA932B]" />
              </a>
              <a href="#instagram" className="hover:scale-110 transition-transform" aria-label="Instagram">
                <Instagram className="w-6 h-6 text-[#CA932B] stroke-[2.2]" />
              </a>
              <a href="#youtube" className="hover:scale-110 transition-transform flex items-center" aria-label="YouTube">
                <svg className="w-8 h-6 fill-[#CA932B]" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-2xl text-[#CA932B]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base text-[#1F1914] font-serif font-bold">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#CA932B] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('featured-projects')}
                  className="hover:text-[#CA932B] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-[#CA932B] transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-[#CA932B] transition-colors"
                >
                  Terms &amp; Condition
                </button>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="hover:text-[#CA932B] transition-colors"
                >
                  Contact US
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-2xl text-[#CA932B]">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm text-[#1F1914] font-sans font-semibold">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#CA932B] shrink-0 mt-0.5" />
                <span>
                  Office 254, Vision 9, Pimple Saudagar, Pune, Maharashtra - 411027
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#CA932B] shrink-0" />
                <a href="tel:+919923901000" className="hover:text-[#CA932B] transition-colors">
                  +91 9923 90 1000
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#CA932B] shrink-0" />
                <a href="mailto:earthsukham@gmail.com" className="hover:text-[#CA932B] transition-colors">
                  earthsukham@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};


