"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RevealImageList } from "@/components/ui/reveal-images";
import { Heart, MapPin, Sparkles } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="label-overline mb-6">Browse by category</p>
            <RevealImageList />
          </motion.div>

          <div className="pt-4">
            <motion.h2
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-semibold text-4xl md:text-5xl tracking-[-0.02em] text-[var(--color-text)] mb-8 leading-[1.1]"
            >
              I make things because
              <br />
              <em className="italic text-[var(--color-primary)]">people deserve better.</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5 font-body font-light text-base leading-[1.85] text-[var(--color-text-muted)]"
            >
              <p>
                Generic gifts exist. I do not make those.
              </p>
              <p>
                Every order I take gets my full attention — I think about
                the person, what they love, what will make them smile when they
                open it. Then I build it by hand.
              </p>
              <p>
                No two pieces are alike. No shortcuts. Just a lot of care and a
                ridiculous amount of ribbon.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-8"
            >
              {[
                { icon: Sparkles, label: "100% Handmade" },
                { icon: MapPin,   label: "Germany only" },
                { icon: Heart,    label: "Made to order" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-[var(--color-primary)]" strokeWidth={1.5} />
                  <span className="label-overline">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
