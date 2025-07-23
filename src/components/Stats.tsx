'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { stats } from '@/data/content';
import { TrophyIcon, BuildingOfficeIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface CounterProps {
  end: number;
  duration: number;
  suffix: string;
}

function Counter({ end, duration, suffix }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
}

const iconMap = {
  'Years Building Quality': TrophyIcon,
  'Project Completion Rate': BuildingOfficeIcon,
  'States Served': MapPinIcon,
  'Regional Offices': UserGroupIcon,
} as const;

const iconColors = ['bg-accent-orange', 'bg-brand-600', 'bg-accent-orange', 'bg-brand-600'];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="section-padding bg-brand-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
          className="section-header"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-accent-orange/20 text-accent-orange font-medium text-sm"
          >
            <TrophyIcon className="w-4 h-4 mr-2" />
            Our Track Record
          </motion.div>

          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white">
            Proven Excellence
          </h2>
          <p className="mx-auto max-w-3xl text-large text-brand-100 leading-relaxed">
            Numbers that speak to our experience, reliability, and commitment to
            excellence in commercial construction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.label as keyof typeof iconMap];
            const iconColor = iconColors[index];
            
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg ${iconColor} text-white`}>
                    {IconComponent && (
                      <IconComponent className="w-6 h-6" />
                    )}
                  </div>

                  {/* Counter */}
                  <div className="mb-3">
                    {isVisible ? (
                      <Counter
                        end={parseInt(stat.value)}
                        duration={2000 + index * 100}
                        suffix={stat.suffix || ''}
                      />
                    ) : (
                      <span className="text-4xl md:text-5xl font-bold text-white">
                        0{stat.suffix}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <p className="text-base font-medium text-brand-200">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Ready to add your project to our success stories?
          </h3>
          <button className="inline-flex items-center justify-center rounded-lg border-2 border-accent-orange bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-semibold text-accent-orange shadow-soft transition-all duration-200 hover:bg-accent-orange hover:text-white hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
