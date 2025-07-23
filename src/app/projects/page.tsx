'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import Image from 'next/image';
import { motion } from 'framer-motion';

const categories = ['All', 'Hospitality', 'Multifamily', 'Commercial', 'Institutional', 'Custom Residential'] as const;

type Category = typeof categories[number];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Category>('All');

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section-padding bg-slate-50 min-h-screen">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h1 className="mb-6 text-3xl font-bold text-brand-900 md:text-4xl">Our Portfolio</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Explore a curated selection of DD&B Construction projects across hospitality, commercial, institutional and residential sectors.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-10 flex justify-center">
          <div className="flex flex-wrap gap-2 rounded-lg bg-white p-2 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  filter === cat
                    ? 'bg-brand-500 text-white'
                    : 'text-slate-600 hover:bg-brand-50 hover:text-brand-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.images[0] || '/images/ddandb_images/hotels/hotel-construction.jpg'}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-bold text-brand-900">{project.name}</h3>
                <p className="text-sm text-slate-500">
                  {project.location} • {project.year !== 'N/A' ? project.year : 'Year N/A'}
                </p>
                <p className="text-slate-600 text-sm">{project.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 