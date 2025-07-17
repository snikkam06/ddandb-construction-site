'use client';

import { awards } from '@/data/content';

export default function Awards() {
  return (
    <section className="section-padding bg-brand-700">
      <div className="container-custom">
        <div className="section-header">
          <div className="section-badge">
            <span className="text-accent-blue font-semibold">Awards & Recognition</span>
          </div>
          <h2 className="text-white mb-4">
            Industry Leadership & Excellence
          </h2>
          <p className="text-brand-200 text-large max-w-3xl mx-auto">
            Recognized for outstanding achievement in commercial construction and maintaining the highest standards of quality and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-accent-blue text-2xl font-bold mb-2">
                {award.year}
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                {award.title}
              </h3>
              <p className="text-brand-200 text-sm leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 text-brand-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">43+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
            <div className="w-px h-12 bg-brand-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">100%</div>
              <div className="text-sm">Completion Rate</div>
            </div>
            <div className="w-px h-12 bg-brand-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">8</div>
              <div className="text-sm">States Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 