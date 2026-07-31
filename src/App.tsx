import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectStatus } from './components/ProjectStatus';
import { ExploreLocations } from './components/ExploreLocations';
import { DeveloperPartners } from './components/DeveloperPartners';
import { NewlyLaunched } from './components/NewlyLaunched';
import { Testimonials } from './components/Testimonials';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';

import { Project, LocationItem, DeveloperPartner, Testimonial, GalleryItem, FAQItem } from './types';
import {
  PROJECTS_DATA,
  LOCATIONS_DATA,
  DEVELOPERS_DATA,
  TESTIMONIALS_DATA,
  GALLERY_DATA,
  FAQS_DATA,
} from './data/mockData';

export default function App() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS_DATA);
  const [locations, setLocations] = useState<LocationItem[]>(LOCATIONS_DATA);
  const [developers, setDevelopers] = useState<DeveloperPartner[]>(DEVELOPERS_DATA);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [gallery, setGallery] = useState<GalleryItem[]>(GALLERY_DATA);
  const [faqs, setFaqs] = useState<FAQItem[]>(FAQS_DATA);

  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Fetch initial API data if server is live
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projRes, locRes, devRes, testRes, galRes, faqRes] = await Promise.all([
          fetch('/api/projects').then((r) => r.json()).catch(() => null),
          fetch('/api/locations').then((r) => r.json()).catch(() => null),
          fetch('/api/developers').then((r) => r.json()).catch(() => null),
          fetch('/api/testimonials').then((r) => r.json()).catch(() => null),
          fetch('/api/gallery').then((r) => r.json()).catch(() => null),
          fetch('/api/faqs').then((r) => r.json()).catch(() => null),
        ]);

        if (projRes?.success && projRes.data) setProjects(projRes.data);
        if (locRes?.success && locRes.data) setLocations(locRes.data);
        if (devRes?.success && devRes.data) setDevelopers(devRes.data);
        if (testRes?.success && testRes.data) setTestimonials(testRes.data);
        if (galRes?.success && galRes.data) setGallery(galRes.data);
        if (faqRes?.success && faqRes.data) setFaqs(faqRes.data);
      } catch (err) {
        console.warn('Using client fallback dataset:', err);
      }
    };

    fetchData();
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectLocationFilter = (locationName: string) => {
    handleNavigate('project-status');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#B88E3A] selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar
        onContactClick={() => setContactModalOpen(true)}
        onNavigate={handleNavigate}
      />

      <main>
        {/* 1. Hero Section */}
        <HeroSection onExploreClick={() => handleNavigate('featured-projects')} />

        {/* 2. Featured Projects */}
        <FeaturedProjects
          projects={projects}
          onSelectProject={(p) => setSelectedProject(p)}
          onViewAllClick={() => handleNavigate('project-status')}
        />

        {/* 3. Project Status (Tabs: New Launches, Ready Possession) */}
        <ProjectStatus
          projects={projects}
          onSelectProject={(p) => setSelectedProject(p)}
        />

        {/* 4. Explore by Location */}
        <ExploreLocations
          locations={locations}
          onSelectLocation={handleSelectLocationFilter}
        />

        {/* 5. Developer Partners */}
        <DeveloperPartners developers={developers} />

        {/* 6. Newly Launched Projects */}
        <NewlyLaunched
          projects={projects}
          onSelectProject={(p) => setSelectedProject(p)}
        />

        {/* 7. Testimonials */}
        <Testimonials testimonials={testimonials} />

        {/* 8. Gallery */}
        <GallerySection gallery={gallery} />

        {/* 9. FAQ Accordion */}
        <FaqSection faqs={faqs} />

        {/* 10. CTA Banner */}
        <CtaSection onContactClick={() => setContactModalOpen(true)} />
      </main>

      {/* 11. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onContactClick={() => setContactModalOpen(true)}
      />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Project Details Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquire={() => {
          setSelectedProject(null);
          setContactModalOpen(true);
        }}
      />
    </div>
  );
}
