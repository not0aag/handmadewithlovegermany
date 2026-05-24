"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "linear-gradient(135deg, #FDF6F0, #F9E4EA)" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-3xl p-12 max-w-md w-full text-center card-shadow"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-6xl mb-6"
        >
          ♥️
        </motion.div>
        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-4">
          Deposit Received!
        </h1>
        <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
          Thank you so much! Your order is confirmed. I&apos;ll be in touch within 24 hours
          to discuss all the details and get started on your gift. 🌸
        </p>
        <Link href="/">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-colors cursor-pointer"
          >
            Back to Home
          </motion.span>
        </Link>
      </motion.div>
    </main>
  );
}
