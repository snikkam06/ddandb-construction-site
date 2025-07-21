'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { serviceCards } from '@/data/content';
import {
  ArrowRightIcon,
  BuildingOfficeIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  BuildingLibraryIcon,
  BuildingStorefrontIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  'Hotel Construction': BuildingStorefrontIcon,
  'Multi-Family Construction': HomeIcon,
  'Commercial Construction': BuildingOfficeIcon,
  'High Rise Construction': BuildingOfficeIcon,
  'Modular Construction': WrenchScrewdriverIcon,
  'Civic Construction': BuildingLibraryIcon,
} as const;

export default function ServicesGrid() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center rounded-full bg-accent-copper/10 px-3 py-1 text-sm font-medium text-accent-copper"
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-accent-copper"></span>
            Our Services
          </motion.div>

          <h2 className="mb-6 text-3xl font-bold text-brand-700 md:text-4xl">
            Construction Excellence Across Industries
          </h2>

          <p className="text-large text-muted mx-auto max-w-3xl leading-relaxed">
            Specialized construction services delivered by experienced
            professionals with proven expertise in commercial, hospitality,
            multi-family, and civic projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => {
            const IconComponent =
              iconMap[service.title as keyof typeof iconMap];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-elevated overflow-hidden transition-all duration-200 hover:shadow-medium">
                  {/* Card Header with Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-brand-900/20 to-transparent"></div>

                    {/* Icon */}
                    <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm transition-all duration-200 group-hover:bg-accent-copper group-hover:text-white">
                      {IconComponent && (
                        <IconComponent className="h-6 w-6 text-brand-700 transition-colors group-hover:text-white" />
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="mb-4 text-xl font-bold text-brand-700 transition-colors duration-200 group-hover:text-brand-600">
                      {service.title}
                    </h3>
                    <p className="text-muted mb-6 leading-relaxed">
                      {service.blurb}
                    </p>

                    {/* Learn More Link */}
                    <button className="inline-flex items-center font-semibold text-accent-copper transition-colors duration-200 hover:text-brand-700">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted mb-6 text-lg">
            Need a custom solution for your project?
          </p>
          <button className="inline-flex items-center justify-center rounded-lg border-2 border-accent-copper bg-white px-6 py-3 text-base font-semibold text-accent-copper shadow-soft transition-all duration-200 hover:bg-accent-copper hover:text-white hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-accent-copper focus:ring-offset-2">
            Discuss Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
