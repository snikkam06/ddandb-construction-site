'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  {
    src: '/images/exterior/SATWO_TX_SATWESTOVER_RI_COURTYARD.jpg',
    alt: 'Courtyard Area',
    category: 'Exterior',
  },
  {
    src: '/images/exterior/SATWO_TX_SATWESTOVER_RI_POOL.jpg',
    alt: 'Pool Area',
    category: 'Exterior',
  },
  {
    src: '/images/exterior/SATWO_TX_SATWESTOVER_RI_FIREPIT.jpg',
    alt: 'Fire Pit Area',
    category: 'Exterior',
  },
  {
    src: '/images/interior/SATWO_TX_SATWESTOVER_RI_LOBBY1.jpg',
    alt: 'Main Lobby',
    category: 'Interior',
  },
  {
    src: '/images/interior/SATWO_TX_SATWESTOVER_RI_LOBBY2.jpg',
    alt: 'Lobby Seating Area',
    category: 'Interior',
  },
  {
    src: '/images/interior/SATWO_TX_SATWESTOVER_RI_410_ONBD_ONEBEDKING_WIDE.jpg',
    alt: 'One Bedroom Suite',
    category: 'Interior',
  },
  {
    src: '/images/interior/SATWO_TX_SATWESTOVER_RI_FITNESS1.jpg',
    alt: 'Fitness Center',
    category: 'Interior',
  },
  {
    src: '/images/interior/SATWO_TX_SATWESTOVER_RI_MEETINGROOM_USHAPE.jpg',
    alt: 'Meeting Room',
    category: 'Interior',
  },
  {
    src: '/images/interior/SATWO_TX_SATWESTOVER_RI_BREAKFASTSEATING.jpg',
    alt: 'Breakfast Area',
    category: 'Interior',
  },
];

export default function ProjectGallery() {
  const [filter, setFilter] = useState('All');
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const categories = ['All', 'Exterior', 'Interior'];

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
            Our Recent Projects
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Explore our portfolio showcasing our expertise in hotel construction, multi-family residential, office & retail construction, and civic buildings including schools and churches.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="mb-12 flex justify-center">
          <div className="flex space-x-2 rounded-lg bg-white p-2 shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  filter === category
                    ? 'bg-brand-500 text-white'
                    : 'text-slate-600 hover:bg-brand-50 hover:text-brand-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${filter}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="translate-y-4 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      {image.alt}
                    </h3>
                    <p className="text-sm text-brand-100">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 