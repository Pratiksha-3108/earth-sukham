"use client";

import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const [project, setProject] = useState('Godrej Township');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [cardDismissed, setCardDismissed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill out your Name, Email, and Mobile Number.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project,
          name,
          email,
          phone,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Enquiry submitted successfully!',
        });
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to submit enquiry. Please try again.',
        });
      }
    } catch (err) {
      setSubmitStatus({
        type: 'error',
        message: 'Server connection error. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] lg:min-h-screen pt-24 pb-16 flex items-center bg-gray-900 text-white overflow-hidden">
      {/* Background Skyscraper Image with dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_skyscraper_1785429162304.jpg"
          alt="Luxury High Rise Skyscraper"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Find Your <span className="text-[#CA932B]">Dream Home</span> <br />
              in Pune &amp; Delhi NCR
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl font-sans font-normal leading-relaxed">
              At Earth Sukham, we believe a home is more than a property it's a legacy. Our commitment to trust, transparency, and market expertise .
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="bg-gradient-to-b from-[#A27820] via-[#8B6314] to-[#5A400B] hover:from-[#B08324] hover:to-[#6A4B0E] text-white px-8 py-3.5 rounded-xl text-base font-serif font-bold shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
                id="hero-explore-btn"
              >
                <span>Explore Properties</span>
              </button>
            </div>
          </div>

          {/* Right Column Inquiry Form Card */}
          <div className="lg:col-span-5 w-full">
            {!cardDismissed ? (
              <div className="bg-[#EFECE6]/95 backdrop-blur-md text-[#1F1914] rounded-2xl p-6 sm:p-7 shadow-2xl relative transition-all border border-[#D5D2C9]">
                {/* Close Button in corner */}
                <button
                  onClick={() => setCardDismissed(true)}
                  className="absolute top-0 right-0 bg-gradient-to-b from-[#A27820] via-[#8B6314] to-[#5A400B] text-white p-3 rounded-tr-2xl rounded-bl-xl hover:brightness-110 transition-all"
                  aria-label="Dismiss form"
                  title="Close form"
                  id="hero-form-close-btn"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Form Header */}
                <div className="text-center mb-5 pt-1">
                  <h2 className="text-2xl font-serif font-bold text-[#1F1914]">
                    Earth Sukham
                  </h2>
                  <div className="mt-2.5 bg-gradient-to-b from-[#A27820] via-[#8B6314] to-[#5A400B] text-white py-2 px-4 rounded-xl font-serif text-sm font-bold shadow-sm">
                    Find Your Dream Home
                  </div>
                </div>

                {/* Feedback Notification */}
                {submitStatus && (
                  <div
                    className={`mb-4 p-3 rounded-lg text-xs sm:text-sm flex items-start space-x-2 ${
                      submitStatus.type === 'success'
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        : 'bg-rose-100 text-rose-900 border border-rose-300'
                    }`}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                {/* Inquiry Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <select
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#E1DFD8] border border-[#CCCCCC] rounded-lg text-sm text-[#333333] placeholder-[#777777] focus:outline-none focus:ring-2 focus:ring-[#A27820] focus:bg-white transition-all"
                      id="hero-select-project"
                    >
                      <option value="Godrej Township">Choose Project</option>
                      <option value="Godrej Township Baner">Godrej Township (Baner)</option>
                      <option value="Godrej Township Wakad">Godrej Township (Wakad)</option>
                      <option value="Godrej Township Delhi NCR">Godrej Township (Delhi NCR)</option>
                      <option value="Earth Sukham Hinjewadi">Earth Sukham Hinjewadi</option>
                    </select>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Name*"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 bg-[#E1DFD8] border border-[#CCCCCC] rounded-lg text-sm text-[#333333] placeholder-[#777777] focus:outline-none focus:ring-2 focus:ring-[#A27820] focus:bg-white transition-all"
                      id="hero-input-name"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 bg-[#E1DFD8] border border-[#CCCCCC] rounded-lg text-sm text-[#333333] placeholder-[#777777] focus:outline-none focus:ring-2 focus:ring-[#A27820] focus:bg-white transition-all"
                      id="hero-input-email"
                    />
                  </div>

                  <div>
                    <div className="flex rounded-lg overflow-hidden border border-[#CCCCCC] focus-within:ring-2 focus-within:ring-[#A27820]">
                      <span className="inline-flex items-center px-3 bg-[#D5D2C9] text-[#333333] text-sm font-bold border-r border-[#CCCCCC]">
                        +91
                      </span>
                      <input
                        type="tel"
                        placeholder="Mobile Number*"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full px-3.5 py-2.5 bg-[#E1DFD8] text-sm text-[#333333] placeholder-[#777777] focus:outline-none focus:bg-white transition-all"
                        id="hero-input-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2 bg-[#E1DFD8] border border-[#CCCCCC] rounded-lg text-sm text-[#333333] placeholder-[#777777] focus:outline-none focus:ring-2 focus:ring-[#A27820] focus:bg-white resize-none transition-all"
                      id="hero-input-message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-b from-[#A27820] via-[#8B6314] to-[#5A400B] hover:from-[#B08324] hover:to-[#6A4B0E] text-white font-serif font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center text-base disabled:opacity-75"
                    id="hero-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </form>

                <div className="mt-3 flex items-start gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    id="hero-disclaimer-check"
                    className="mt-0.5 rounded border-gray-400 text-[#0066CC] focus:ring-[#0066CC]"
                  />
                  <label htmlFor="hero-disclaimer-check" className="text-[10px] text-[#444444] leading-tight font-sans">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing.
                  </label>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setCardDismissed(false)}
                className="w-full bg-white/90 hover:bg-white text-slate-900 p-4 rounded-2xl shadow-lg border border-slate-200 text-center font-sans font-bold text-sm transition-colors"
                id="reopen-form-btn"
              >
                + Re-open Inquiry Form
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
