'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-medium border-b border-neutral-200'
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="shrink-0"
          >
            <Link href="/" className="group flex items-center">
              <div className="relative h-full w-56 sm:w-64 flex items-center">
                {/* White Logo - shown when header is dark */}
                <Image
                  src="/images/logos/whiteLogo.png"
                  alt="DD&B Construction"
                  width={200}
                  height={50}
                  className={`transition-opacity duration-300 ${
                    scrolled ? 'opacity-0' : 'opacity-100'
                  }`}
                  priority
                />
                {/* Colored Logo - shown when header is light */}
                <Image
                  src="/images/logos/coloredLogo.png"
                  alt="DD&B Construction"
                  width={200}
                  height={50}
                  className={`absolute top-1/2 left-0 -translate-y-1/2 transition-opacity duration-300 ${
                    scrolled ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-1 md:flex">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
              >
                <Link
                  href={item.href}
                  className={`group relative px-3 py-2 text-sm font-medium transition-colors duration-300 focus-brand rounded-md ${
                    scrolled 
                      ? 'text-neutral-700 hover:text-brand-600' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className="absolute inset-x-1 -bottom-px h-0.5 bg-accent-copper scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <button className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow-soft transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              scrolled
                ? 'bg-accent-copper text-white hover:bg-accent-copper/90 hover:shadow-medium focus:ring-accent-copper'
                : 'bg-white/10 text-white border border-white/30 hover:bg-white hover:text-black focus:ring-white'
            }`}>
              Get Quote
            </button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center w-9 h-9 rounded-md transition-colors duration-300 focus-brand ${
                scrolled
                  ? 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="block w-5 h-5" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="block w-5 h-5" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className={`py-3 space-y-1 border-t transition-colors duration-300 ${
                scrolled ? 'border-neutral-200' : 'border-white/20'
              }`}>
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 * index }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors duration-300 rounded-md focus-brand ${
                        scrolled
                          ? 'text-neutral-700 hover:text-brand-600 hover:bg-neutral-50'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className={`pt-3 border-t transition-colors duration-300 ${
                    scrolled ? 'border-neutral-200' : 'border-white/20'
                  }`}
                >
                  <button
                    className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow-soft transition-all duration-300 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      scrolled
                        ? 'bg-accent-copper text-white hover:bg-accent-copper/90 hover:shadow-medium focus:ring-accent-copper'
                        : 'bg-white/10 text-white border border-white/30 hover:bg-white hover:text-black focus:ring-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
