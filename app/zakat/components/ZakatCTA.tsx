'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function ZakatCTA() {
  return (
    <section className="relative py-28 px-4 bg-sky-600 overflow-hidden text-center">

      {/* Decorative Blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto text-white"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          আপনার সামান্য সাহায্য <span className="underline decoration-white/50">একজন জীবনের পরিবর্তন আনতে পারে</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-white/90">
          আজই দান করুন এবং মানবিক পরিবর্তনের অংশ হোন। ছোট্ট সহায়তাও বড় প্রভাব ফেলে।
        </p>

        <Link
          href="donation"
          className="inline-block mt-10 px-8 py-4 bg-white text-sky-500 font-bold rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
        >
          এখনই দান করুন
        </Link>
      </motion.div>

    </section>
  );
}