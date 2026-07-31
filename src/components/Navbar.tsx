"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { Logo } from './common/Logo';

interface NavbarProps {
  onContactClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: 'hero' },
    { name: 'Properties', href: 'featured-projects' },
    { name: 'Pune Projects', href: 'project-status' },
    { name: 'Delhi NCR Projects', href: 'explore-locations' },
    { name: 'Blogs', href: 'gallery' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    if (id === 'contact') {
      onContactClick();
    } else {
      onNavigate(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FAF7F2] border-b border-[#EAE3D2] ${
        isScrolled ? 'shadow-md py-3' : 'py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="focus:outline-none"
          id="brand-logo-btn"
        >
          <Logo />
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href || item.name === 'Home';
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`font-sans text-base font-bold transition-colors ${
                  item.name === 'Home'
                    ? 'text-[#CA932B]'
                    : 'text-[#1F1914] hover:text-[#CA932B]'
                }`}
                id={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Desktop Contact Us Button with blackish gradient golden effect */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onContactClick}
            className="bg-gradient-to-b from-[#A27820] via-[#8B6314] to-[#5A400B] hover:from-[#B08324] hover:to-[#6A4B0E] text-white px-7 py-3 rounded-xl text-base font-serif font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            id="navbar-contact-cta"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#1F1914] p-2"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="bg-[#FAF7F2] shadow-lg lg:hidden border-t border-[#EAE3D2] mt-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left border-b border-[#EAE3D2]/60 px-6 py-3.5 font-sans font-bold text-sm text-[#1F1914] hover:bg-[#F2ECE1] hover:text-[#CA932B] transition"
            >
              {item.name}
            </button>
          ))}
          <div className="p-6 bg-[#F2ECE1] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full bg-[#9E7422] hover:bg-[#8B651B] text-white py-3 rounded-lg text-center font-bold text-sm shadow-sm"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
