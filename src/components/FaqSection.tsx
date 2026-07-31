"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

interface FaqSectionProps {
  faqs: FAQItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column Section Title matching Screenshot 10 */}
          <div className="lg:col-span-4">
            <span className="text-xs font-sans font-bold tracking-widest text-[#CA932B] uppercase block mb-2">
              FAQ's
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1914] leading-[1.15] tracking-tight">
              Frequently <br className="hidden lg:inline" />
              Asked <br className="hidden lg:inline" />
              Questions
            </h2>
          </div>

          {/* Right Column Accordion Items matching Screenshot 10 */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#856317] text-white rounded-lg p-6 shadow-md'
                      : 'bg-transparent text-[#1F1914] border-b border-[#D5D2C9] py-5 px-2'
                  }`}
                  id={`faq-item-${faq.id}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left flex items-center justify-between space-x-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif font-bold text-xl sm:text-2xl leading-snug">
                      {faq.question}
                    </span>
                    <div className="shrink-0">
                      {isOpen ? (
                        <Minus className="w-8 h-8 text-white stroke-[2]" />
                      ) : (
                        <Plus className="w-8 h-8 text-[#1F1914] stroke-[2]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100 font-sans font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

