"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FlipButton } from "@/components/ui/flip-button";

const SVC  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  || "";
const TMPL = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  || "";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full border-0 border-b border-[var(--color-border)] bg-transparent px-0 py-3 font-body font-light text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300 rounded-none";

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="label-overline block mb-3">{children}</label>
);

export default function ContactForm() {
  const ref     = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(SVC, TMPL, formRef.current, KEY);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-2xl mx-auto px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            className="font-script text-3xl text-[var(--color-primary)] mb-4 leading-none"
          >
            Let us talk
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-4xl md:text-5xl tracking-[-0.02em] text-[var(--color-text)]"
          >
            Tell me what
            <br />
            <em className="italic text-[var(--color-primary)]">you have in mind.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body font-light mt-5 text-base text-[var(--color-text-muted)] leading-[1.8]"
          >
            I read every message myself and get back to you within 24 hours.
            No bots. No forms that go nowhere.
          </motion.p>
        </div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <Label>Your Name</Label>
              <input name="from_name" type="text" required placeholder="Maria Schmidt" className={field} />
            </div>
            <div>
              <Label>Email Address</Label>
              <input name="reply_to" type="email" required placeholder="maria@email.com" className={field} />
            </div>
          </div>

          <div>
            <Label>What are you looking for?</Label>
            <select name="product_type" required className={`${field} cursor-pointer`}>
              <option value="">Pick one...</option>
              <option value="Bouquet">Custom Bouquet</option>
              <option value="Hamper">Gift Hamper</option>
              <option value="Card">Handmade Card</option>
              <option value="Album/Frame">Photo Album or Frame</option>
              <option value="Multiple">A few things</option>
              <option value="Other">Not sure yet — help me decide</option>
            </select>
          </div>

          <div>
            <Label>Tell me about it</Label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Who is it for? What is the occasion? What do they love? Anything helps — I will figure out the rest."
              className={`${field} resize-none`}
            />
          </div>

          <div>
            <Label>When do you need it?</Label>
            <input name="deadline" type="date" className={field} />
          </div>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              className="py-4 text-center font-body text-sm tracking-wide text-[var(--color-primary-dark)]"
              style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}
            >
              I got your message. I will be in touch within 24 hours.
            </motion.div>
          )}

          {status === "error" && (
            <div className="py-4 text-center font-body text-sm tracking-wide text-red-500"
              style={{ borderTop: "1px solid #fecaca", borderBottom: "1px solid #fecaca" }}>
              Something went wrong. Send me a DM on Instagram instead.
            </div>
          )}

          <FlipButton
            type="submit"
            text1={status === "sending" ? "Sending..." : "Message Me"}
            text2="Message Me"
            disabled={status === "sending"}
          />
        </motion.form>
      </div>
    </section>
  );
}
