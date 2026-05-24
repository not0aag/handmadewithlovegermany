"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function ScrollShowcase() {
  return (
    <div className="flex flex-col overflow-hidden" style={{ background: "var(--color-cream)" }}>
      <ContainerScroll
        titleComponent={
          <div className="mb-8">
            <p className="font-script text-3xl text-[var(--color-primary)] mb-4 leading-none">
              Nothing off a shelf
            </p>
            <h2 className="font-display font-semibold text-[2.8rem] md:text-[4.5rem] leading-[1.08] tracking-[-0.02em] text-[var(--color-text)]">
              Everything made
              <br />
              <em className="italic text-[var(--color-primary)]">just for you</em>
            </h2>
          </div>
        }
      >
        <Image
          src="/images/instagram/7.jpg"
          alt="Handmade heart-shaped gift box with roses and Ferrero Rocher"
          width={950}
          height={1270}
          className="mx-auto rounded-2xl object-contain h-full w-auto"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
