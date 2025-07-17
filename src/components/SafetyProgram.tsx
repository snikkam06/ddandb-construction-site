'use client';

import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { safetyProgram } from '@/data/content';

export default function SafetyProgram() {
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
            Safety Program
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Safety is our top priority. We maintain industry-leading safety
            standards through comprehensive training, advanced equipment, and a
            culture of accountability.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-6">
          {safetyProgram.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="hover:bg-brand-50 flex w-full items-center justify-between rounded-lg bg-white px-6 py-4 text-left text-lg font-medium text-brand-900 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75">
                      <span>{item.title}</span>
                      <ChevronDownIcon
                        className={`h-5 w-5 text-brand-500 transition-transform duration-200 ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="rounded-b-lg bg-white px-6 py-4 text-slate-600">
                      <p className="mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <span className="mr-3 mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-brand-500"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
