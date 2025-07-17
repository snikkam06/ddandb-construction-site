'use client';

import { motion } from 'framer-motion';
import { expertiseAreas, companyInfo } from '@/data/content';

export default function ExpertiseAreas() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Company tagline section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-brand-900 md:text-4xl">
            {companyInfo.tagline}
          </h2>
          <div className="mx-auto max-w-4xl space-y-6">
            <p className="text-xl font-medium text-brand-900">
              {companyInfo.description}
            </p>
            <p className="text-lg text-slate-600">
              {companyInfo.goals}
            </p>
            <p className="text-lg text-slate-600">
              {companyInfo.specialties}
            </p>
            <p className="text-lg font-medium text-brand-500">
              {companyInfo.regions}
            </p>
          </div>
        </motion.div>

        {/* Founder story section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h3 className="mb-6 text-2xl font-bold text-brand-900 md:text-3xl">
            Our Foundation
          </h3>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            {companyInfo.founder} After working his way up through the competitive D.C. construction industry—from foreman to superintendent, project manager, and eventually Vice President at a leading firm—Dolat struck out to begin his own General Contracting Company.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl bg-slate-50 p-8 transition-all duration-300 hover:bg-brand-50 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center">
                <div className="text-4xl">{area.icon}</div>
                <h4 className="ml-4 text-xl font-bold text-brand-900">
                  {area.title}
                </h4>
              </div>
              <p className="mb-4 text-slate-600">{area.description}</p>
              <p className="text-sm font-medium text-brand-500">
                {area.projects}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-brand-700 px-8 py-12">
            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Experience the DD&B Difference
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-brand-200">
              Ready to partner with a construction company that delivers on its promises? 
              Contact DD&B Construction to discuss your next commercial construction project.
            </p>
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-brand-700 transition-all duration-300 hover:bg-brand-50">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 