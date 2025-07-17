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
          src="/images/ddandb_images/hotels/BWD_NC_ASH_HM2_EXT_DUSK.jpg"
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
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-white max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Professional Badge - Styled like "UPCOMING LAUNCH" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium tracking-widest text-gray-400 uppercase"
            >
              UPCOMING PROJECT
            </motion.div>

            {/* Main Title - Large and Bold like "ORION ONE MISSION" */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            >
              <span className="block text-white mb-2">DD&B</span>
              <span className="block text-white">CONSTRUCTION</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-lg"
            >
              {heroContent.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-400 leading-relaxed max-w-lg"
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
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest uppercase border border-white/30 bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300"
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
          <div className="lg:justify-self-end space-y-8">
            {/* Key Stats - Vertical layout */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-8"
            >
              <div className="text-right">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">43+</div>
                <div className="text-sm font-medium tracking-wider text-gray-400 uppercase">Years of Excellence</div>
              </div>
              
              <div className="text-right">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
                <div className="text-sm font-medium tracking-wider text-gray-400 uppercase">Completion Rate</div>
              </div>
              
              <div className="text-right">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">8</div>
                <div className="text-sm font-medium tracking-wider text-gray-400 uppercase">States Served</div>
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
          <div className="flex justify-between items-center text-xs font-medium tracking-wider text-gray-500 uppercase">
            <div>DD&B Construction ©2025</div>
            <div className="flex space-x-8">
              <span className="hover:text-white transition-colors cursor-pointer">Services</span>
              <span className="hover:text-white transition-colors cursor-pointer">Projects</span>
              <span className="hover:text-white transition-colors cursor-pointer">Contact</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white cursor-pointer group"
        onClick={() => {
          const element = document.getElementById('services');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"
        />
      </motion.div>
    </section>
  );
}
