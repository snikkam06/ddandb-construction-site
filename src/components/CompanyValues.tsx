'use client';

import { companyValues } from '@/data/content';

export default function CompanyValues() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="section-header">
          <div className="section-badge">
            <span className="text-brand-700 font-semibold">Our Values</span>
          </div>
          <h2 className="text-neutral-900 mb-4">
            Built on a Foundation of Excellence
          </h2>
          <p className="text-neutral-600 text-large max-w-3xl mx-auto">
            For over 40 years, DD&B Construction has been guided by core values that define our approach to every project and client relationship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues.map((value, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-brand-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-600 transition-colors duration-300">
                <div className="text-2xl text-white font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {value.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-700 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Build Your Next Project?
            </h3>
            <p className="text-brand-200 text-lg mb-8 max-w-2xl mx-auto">
              Partner with DD&B Construction for your next commercial construction project. 
              Experience the reliability and expertise that comes with 40+ years of proven success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary"
              >
                Discuss Your Project
              </a>
              <a
                href="#portfolio"
                className="btn-secondary bg-white text-brand-700 hover:bg-brand-50"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 