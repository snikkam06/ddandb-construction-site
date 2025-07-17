'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { testimonials } from '@/data/content';

export default function TestimonialCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: { perView: 1, spacing: 32 },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 32 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 32 },
      },
    },
  });

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-brand-900 md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            clients have to say about working with DD&B Construction.
          </p>
        </motion.div>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="keen-slider__slide"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={testimonial.img}
                    alt={`${testimonial.company} project`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent"></div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <blockquote className="mb-6 flex-1 text-lg italic text-slate-600">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-slate-200 pt-4">
                    <div className="font-semibold text-brand-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
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
