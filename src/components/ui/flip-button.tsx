"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface FlipButtonProps {
  text1: string;
  text2: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function FlipButton({ text1, text2, onClick, disabled, type = "button", className }: FlipButtonProps) {
  const [show, setShow] = useState(false);

  const flipVariants = {
    one: {
      rotateX: 0,
      backgroundColor: "#C8967E",
      color: "#ffffff",
    },
    two: {
      rotateX: 180,
      backgroundColor: "#A0705A",
      color: "#ffffff",
    },
  };

  return (
    <div className={`w-full ${className ?? ""}`}>
      <motion.button
        type={type}
        disabled={disabled}
        className="w-full cursor-pointer px-6 py-4 font-semibold text-base disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ borderRadius: 999 }}
        onClick={() => { setShow(!show); onClick?.(); }}
        animate={show ? "two" : "one"}
        variants={flipVariants}
        transition={{ duration: 0.5, type: "spring" }}
        whileTap={disabled ? {} : { scale: 0.97 }}
        whileHover={disabled ? {} : { scale: 1.03 }}
      >
        <motion.div
          animate={{ rotateX: show ? 180 : 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {show ? text1 : text2}
        </motion.div>
      </motion.button>
    </div>
  );
}
