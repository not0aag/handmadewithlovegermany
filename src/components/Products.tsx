"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import type { Tab } from "@/components/ui/animated-tabs";

const tabContent = (
  imageSrc: string,
  imageAlt: string,
  heading: string,
  body: string,
  tags: string[]
) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
    <img src={imageSrc} alt={imageAlt} className="rounded-2xl w-full h-56 object-cover" />
    <div className="flex flex-col gap-3 justify-center">
      <h3 className="font-display font-semibold text-2xl md:text-3xl text-white leading-tight">
        {heading}
      </h3>
      <p className="font-body font-light text-sm leading-[1.8] text-white/60">{body}</p>
      <div className="flex flex-wrap gap-2 mt-1">
        {tags.map((t) => (
          <span key={t} className="font-body text-[0.65rem] tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary-light)]">
            {t}
          </span>
        ))}
      </div>
      <a href="#contact" className="mt-2 font-body text-xs tracking-[0.2em] uppercase text-[var(--color-primary-light)] hover:text-white transition-colors underline underline-offset-4 w-fit">
        I want this
      </a>
    </div>
  </div>
);

const productTabs: Tab[] = [
  {
    id: "bouquets",
    label: "Bouquets",
    content: tabContent(
      "/images/instagram/1.jpeg",
      "Handmade rose gift box with bunny and perfume",
      "The Bouquet They'll Remember",
      "Flowers, chocolates, or a car theme — I build every bouquet around the personality of the person getting it. Not a template. Yours.",
      ["Flowers", "Chocolate", "Car-themed"]
    ),
  },
  {
    id: "hampers",
    label: "Hampers & Cards",
    content: tabContent(
      "/images/instagram/2.jpeg",
      "Handmade gift hamper with teddy, candles and bunny lamp",
      "Hampers That Hit Different",
      "A hamper stuffed with things they actually love, wrapped beautifully and paired with a card written by hand. Because a gift card is not a gift.",
      ["Custom hampers", "Handwritten cards", "Any occasion"]
    ),
  },
  {
    id: "albums",
    label: "Albums & Frames",
    content: tabContent(
      "/images/instagram/5.jpg",
      "Handmade hamper with roses, skincare and printed photos",
      "Memories Worth Keeping",
      "A photo album or frame that someone will still have in twenty years. I decorate every page — it looks nothing like anything you can buy.",
      ["Photo albums", "Decorated frames", "Polaroids"]
    ),
  },
];

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            className="font-script text-3xl text-[var(--color-primary)] mb-4 leading-none"
          >
            What I make
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-4xl md:text-5xl tracking-[-0.02em] text-[var(--color-text)]"
          >
            No two pieces are the same.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body font-light mt-5 text-base text-[var(--color-text-muted)] max-w-md mx-auto leading-[1.8]"
          >
            Every order is made from scratch. Pick what you want, tell me who it is for,
            and I do the rest.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
        >
          <AnimatedTabs tabs={productTabs} />
        </motion.div>
      </div>
    </section>
  );
}
