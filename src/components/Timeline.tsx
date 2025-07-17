'use client';

import { motion } from 'framer-motion';
import { timelineEntries } from '@/data/content';

export default function Timeline() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-brand-900 md:text-4xl">
            Our Journey
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Four decades of growth, innovation, and unwavering commitment to
            excellence in commercial construction.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <div className="bg-brand-200 absolute left-8 h-full w-0.5 transform md:left-1/2 md:-translate-x-1/2"></div>

          {timelineEntries.map((entry, index) => (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 flex items-center ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-white bg-brand-500 shadow-lg md:left-1/2"></div>

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <div className="mb-3 flex items-center">
                    <span className="mr-3 text-2xl font-bold text-brand-500">
                      {entry.year}
                    </span>
                    <h3 className="text-xl font-bold text-brand-900">
                      {entry.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-slate-600">
                    {entry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
