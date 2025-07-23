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
      <div className="container relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center text-white space-y-8">
        {/* Context line (subtitle) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-white/90"
        >
          Building Quality Since 1981
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/images/logos/symbolLogo.png"
            alt="DD&B Construction logo"
            width={320}
            height={320}
            className="mx-auto"
            priority
          />
        </motion.div>

        {/* Call‑to‑action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center border border-white/70 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-widest backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-black"
            onClick={() => {
              const element = document.getElementById('services');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {heroContent.ctaText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
