'use client';
import { motion } from 'framer-motion';

export default function QuickFacts() {
  const facts = [
    { label: 'Founded', value: '1981' },
    { label: 'Project Completion', value: '100%' },
    { label: 'Offices', value: '2 (MD & TX)' },
  ];

  return (
    <section className="bg-brand-700 py-6">
      <div className="container-custom flex flex-col items-center justify-center gap-6 text-white md:flex-row md:gap-12">
        {facts.map((fact, idx) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-2xl font-bold md:text-3xl">{fact.value}</div>
            <div className="text-sm uppercase tracking-wider text-brand-100">
              {fact.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 