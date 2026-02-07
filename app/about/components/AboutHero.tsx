"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-sky-200" />
      {/* Graph BG */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 75%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1], // premium easing
          }}
          className="max-w-3xl"
        >

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            মানুষের পাশে দায়িত্ববোধ থেকেই
            <br className="hidden md:block" />
            আমাদের যাত্রা
          </h1>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            আমরা বিশ্বাস করি, সহায়তা মানে শুধু দান নয় —
            সহায়তা মানে দায়িত্ব, স্বচ্ছতা এবং মানুষের মর্যাদা রক্ষা।
            এই বিশ্বাস থেকেই আমাদের প্রতিটি কাজের শুরু।
          </p>
        </motion.div>
      </div>
    </section>
  );
}
