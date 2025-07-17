'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { serviceCards } from '@/data/content';
import { ArrowRightIcon, BuildingOfficeIcon, HomeIcon, WrenchScrewdriverIcon, BuildingLibraryIcon, BuildingStorefrontIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

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
            className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-accent-copper/10 text-accent-copper font-medium text-sm"
          >
            <span className="w-2 h-2 bg-accent-copper rounded-full mr-2"></span>
            Our Services
          </motion.div>

          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-brand-700">
            Construction Excellence Across Industries
          </h2>
          
          <p className="mx-auto max-w-3xl text-large text-muted leading-relaxed">
            Specialized construction services delivered by experienced professionals with proven expertise in commercial, hospitality, multi-family, and civic projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => {
            const IconComponent = iconMap[service.title as keyof typeof iconMap];
            
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
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-accent-copper group-hover:text-white transition-all duration-200">
                      {IconComponent && <IconComponent className="w-6 h-6 text-brand-700 group-hover:text-white transition-colors" />}
                    </div>
                    
                    {/* Project Count Badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-accent-copper/90 backdrop-blur-sm rounded-md text-white text-sm font-medium">
                      {index === 0 ? '150+' : index === 1 ? '75+' : index === 2 ? '200+' : index === 3 ? '25+' : index === 4 ? '30+' : '50+'} Projects
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="mb-4 text-xl font-bold text-brand-700 group-hover:text-brand-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-6">
                      {service.blurb}
                    </p>
                    
                    {/* Learn More Link */}
                    <button className="inline-flex items-center text-accent-copper font-semibold hover:text-brand-700 transition-colors duration-200">
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
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
