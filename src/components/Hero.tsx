"use client";

import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import { Flower2, Gift, Camera, MapPin } from "lucide-react";

const EASE: Easing = "easeOut";
const up = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});

const pills = [
  { icon: Flower2, label: "Bouquets" },
  { icon: Gift,    label: "Hampers" },
  { icon: Camera,  label: "Albums" },
  { icon: MapPin,  label: "Germany" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      /* pt-28 reserves space for the fixed navbar so nothing overlaps */
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28"
      style={{ background: "linear-gradient(145deg, #FDF6F0 0%, #F9E4EA 55%, #FDF6F0 100%)" }}
    >
      <div className="absolute top-24 left-12 w-80 h-80 rounded-full opacity-25 blur-3xl pointer-events-none bg-[var(--color-accent)]" />
      <div className="absolute bottom-24 right-12 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none bg-[var(--color-primary-light)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.p {...up(0)} className="font-script text-3xl text-[var(--color-primary)] mb-6 leading-none">
          Hi, I am Sandra
        </motion.p>

        <motion.h1
          {...up(0.15)}
          className="font-display font-semibold text-[3.2rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[1.05] tracking-[-0.02em] text-[var(--color-text)] mb-8"
        >
          Your people deserve
          <br />
          <em className="italic text-[var(--color-primary)]">a real gift.</em>
        </motion.h1>

        <motion.p
          {...up(0.3)}
          className="font-body font-light text-lg md:text-xl text-[var(--color-text-muted)] max-w-xl mx-auto mb-12 leading-[1.8]"
        >
          I make custom bouquets, hampers, cards and photo albums by hand —
          every single one built around the person receiving it.
          Based in Germany, made with love.
        </motion.p>

        <motion.div {...up(0.45)} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="font-body text-[0.75rem] font-500 tracking-[0.2em] uppercase px-10 py-4 rounded-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors duration-300 shadow-lg shadow-[var(--color-primary)]/20"
          >
            See What I Make
          </a>
          <a
            href="#contact"
            className="font-body text-[0.75rem] font-500 tracking-[0.2em] uppercase px-10 py-4 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-accent-soft)] transition-colors duration-300"
          >
            Order Yours
          </a>
        </motion.div>

        <motion.div {...up(0.6)} className="mt-16 flex flex-wrap justify-center gap-8">
          {pills.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 text-[var(--color-primary)]" strokeWidth={1.5} />
              <span className="font-body font-semibold text-[0.68rem] tracking-[0.2em] uppercase text-[var(--color-primary-dark)]">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
