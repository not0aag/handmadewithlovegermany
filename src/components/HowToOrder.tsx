"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Palette, Package } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Tell me who it is for",
    body: "Fill in the form below — the occasion, the person, your budget. The more you share, the better it turns out.",
  },
  {
    icon: Palette,
    num: "02",
    title: "I design it around them",
    body: "I come back within 24 hours with ideas and a price. We talk it through until it feels exactly right.",
  },
  {
    icon: Package,
    num: "03",
    title: "Handmade and handed over",
    body: "I build your order from scratch and deliver it personally anywhere in Germany. No flat-pack. No strangers at the door.",
  },
];

export default function HowToOrder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28" style={{ background: "linear-gradient(145deg, #FDF6F0 0%, #F9E4EA 100%)" }}>
      <div className="max-w-5xl mx-auto px-8">
        <div ref={ref} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            className="font-script text-3xl text-[var(--color-primary)] mb-4 leading-none"
          >
            Easier than you think
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-4xl md:text-5xl tracking-[-0.02em] text-[var(--color-text)]"
          >
            Three steps. One perfect gift.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body font-light mt-5 text-base text-[var(--color-text-muted)] max-w-lg mx-auto leading-[1.8]"
          >
            No app. No checkout flow. Just you and me, and a conversation about
            making something worth giving.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 * i }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: "white", border: "1.5px solid var(--color-border)" }}>
                <step.icon className="w-7 h-7 text-[var(--color-primary)]" strokeWidth={1.25} />
              </div>
              <p className="font-body font-light text-5xl tracking-[-0.04em] text-[var(--color-primary)] mb-4 leading-none">{step.num}</p>
              <h3 className="font-display font-semibold text-xl text-[var(--color-text)] mb-3">{step.title}</h3>
              <p className="font-body font-light text-sm leading-[1.85] text-[var(--color-text-muted)]">{step.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="font-body text-[0.75rem] font-500 tracking-[0.2em] uppercase inline-block px-12 py-4 rounded-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors duration-300 shadow-lg shadow-[var(--color-primary)]/20">
            Start Here
          </a>
          <p className="label-overline mt-5">I reply within 24 hours &nbsp;·&nbsp; Germany only</p>
        </motion.div>
      </div>
    </section>
  );
}
