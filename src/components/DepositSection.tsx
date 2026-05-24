"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

const depositOptions = [
  { label: "Small Gift / Card", amount: 10, description: "Deposit for cards, small hampers" },
  { label: "Bouquet / Hamper", amount: 20, description: "Deposit for bouquets and medium hampers" },
  { label: "Premium Package", amount: 30, description: "Deposit for albums, large arrangements" },
];

export default function DepositSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [loading, setLoading] = useState<number | null>(null);

  const handleDeposit = async (amount: number) => {
    setLoading(amount);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch {
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <section
      className="py-24"
      style={{ background: "linear-gradient(135deg, #FDF6F0 0%, #F9E4EA 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-script text-xl text-[var(--color-primary)] mb-3"
          >
            Lock in your order
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[var(--color-text)]"
          >
            Pay a Deposit to Begin
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-[var(--color-text-muted)] max-w-lg mx-auto"
          >
            A small deposit secures your custom order and lets me start gathering
            materials. The remaining balance is paid on delivery. Safe & secure via Stripe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depositOptions.map((opt, i) => (
            <motion.div
              key={opt.amount}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-white rounded-2xl p-8 card-shadow text-center flex flex-col"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{opt.label}</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-6">{opt.description}</p>
              <div className="text-4xl font-bold text-[var(--color-primary)] mb-6">
                €{opt.amount}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleDeposit(opt.amount)}
                disabled={loading !== null}
                className="mt-auto bg-[var(--color-primary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading === opt.amount ? "Redirecting…" : `Pay €${opt.amount} Deposit`}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8 text-xs text-[var(--color-text-muted)]"
        >
          🔒 Payments are processed securely via Stripe. I never store your card details.
        </motion.p>
      </div>
    </section>
  );
}
