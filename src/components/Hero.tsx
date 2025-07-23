'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { heroContent } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroContent.backgroundImage}
          alt="DD&B Construction Project"
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto max-w-7xl px-6 text-white">
        <div className="grid min-h-screen grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium uppercase tracking-widest text-gray-400"
            >
              COMMERCIAL BUILDERS
            </motion.div>

            {/* Main Title - Large and Bold like "ORION ONE MISSION" */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl xl:text-8xl"
            >
              <span className="mb-2 block text-white">DD&B</span>
              <span className="block text-white">CONSTRUCTION</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-lg text-xl font-light leading-relaxed text-gray-300 md:text-2xl"
            >
              {heroContent.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-lg leading-relaxed text-gray-400"
            >
              {heroContent.description}
            </motion.p>

            {/* Action Button - Styled like "WATCH LIVE" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center border border-white/30 bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
                onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {heroContent.ctaText}
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8 lg:justify-self-end">
            {/* Key Stats - Vertical layout */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-8"
            >
              <div className="text-right">
                <div className="mb-2 text-4xl font-bold text-white md:text-5xl">
                  43+
                </div>
                <div className="text-sm font-medium uppercase tracking-wider text-gray-400">
                  Years of Excellence
                </div>
              </div>

              <div className="text-right">
                <div className="mb-2 text-4xl font-bold text-white md:text-5xl">
                  100%
                </div>
                <div className="text-sm font-medium uppercase tracking-wider text-gray-400">
                  Completion Rate
                </div>
              </div>

              <div className="text-right">
                <div className="mb-2 text-4xl font-bold text-white md:text-5xl">
                  8
                </div>
                <div className="text-sm font-medium uppercase tracking-wider text-gray-400">
                  States Served
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Links - Like the reference */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 z-20"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-gray-500">
            <div>© DD&B Construction, Inc. All rights reserved.</div>
            <div className="flex space-x-8">
              <span className="cursor-pointer transition-colors hover:text-white">
                Services
              </span>
              <span className="cursor-pointer transition-colors hover:text-white">
                Projects
              </span>
              <span className="cursor-pointer transition-colors hover:text-white">
                Contact
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="group absolute bottom-20 left-1/2 -translate-x-1/2 cursor-pointer text-white"
        onClick={() => {
          const element = document.getElementById('services');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-16 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"
        />
      </motion.div>
    </section>
  );
}
