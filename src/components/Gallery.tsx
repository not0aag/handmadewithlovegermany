"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import type { MediaItemType } from "@/components/ui/interactive-bento-gallery";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const mediaItems: MediaItemType[] = [
  { id: 1, type: "image", title: "Heart Box",           desc: "Roses, plush & Ferrero Rocher",   url: "/images/instagram/7.jpg",    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2" },
  { id: 2, type: "image", title: "Rose Gift Box",       desc: "Red roses, perfume & plush",      url: "/images/instagram/1.jpeg",   span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2" },
  { id: 3, type: "image", title: "Garden Hamper",       desc: "Teddy, candles & bunny lamp",     url: "/images/instagram/2.jpeg",   span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2" },
  { id: 4, type: "image", title: "Pink Balloon Basket", desc: "Kids hamper with pink balloons",  url: "/images/instagram/3.jpg",    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2" },
  { id: 5, type: "image", title: "Roses & Wellness",    desc: "Roses, skincare & photos",        url: "/images/instagram/5.jpg",    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2" },
  { id: 6, type: "image", title: "Flowers & Chocolate", desc: "Chrysanthemums & Milka",          url: "/images/instagram/6.jpg",    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2" },
  { id: 7, type: "image", title: "Blue Balloon Basket", desc: "Kids hamper with blue balloons",  url: "/images/instagram/4.jpg",    span: "md:col-span-3 md:row-span-2 sm:col-span-2 sm:row-span-2" },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-28" style={{ background: "var(--color-cream)" }}>
      <div className="max-w-5xl mx-auto px-8">
        <div ref={ref} className="text-center mb-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-script text-3xl text-[var(--color-primary)] mb-4 leading-none"
          >
            A peek inside
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-4xl md:text-5xl tracking-[-0.02em] text-[var(--color-text)]"
          >
            Made with Love, Every Time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body font-light mt-4 text-sm text-[var(--color-text-muted)] tracking-wide"
          >
            Every piece you see here was made by hand, for a real person.
          </motion.p>
        </div>

        <InteractiveBentoGallery mediaItems={mediaItems} title="" description="" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-2"
        >
          <a
            href="https://instagram.com/handmadewithlovegermany"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            @handmadewithlovegermany
          </a>
        </motion.div>
      </div>
    </section>
  );
}
