'use client';

import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";

export default function DonationCTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-[#f8fafc]">

      {/* ── Background Blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl" />
      </div>

      {/* ── Dot Pattern (IMPORTANT) ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded bg-white/70 backdrop-blur-xl border border-white/50 px-8 py-14 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10"
        >

          {/* Inner Glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-sky-100/60 blur-3xl rounded-full pointer-events-none" />

          {/* LEFT CONTENT */}
          <div className="z-10 max-w-2xl text-center md:text-left">
            <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5 border border-sky-200">
              <Heart className="w-3.5 h-3.5 fill-sky-500 text-sky-500" />
              এখনই সাহায্য করুন
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              আপনার একটি ছোট দান
              <br />
              <span className="text-gray-700">
                বদলে দিতে পারে একটি জীবন
              </span>
            </h2>

            <p className="mt-5 text-gray-600 text-base leading-relaxed">
              আপনার সামান্য সহায়তা কারো জীবনে বড় পরিবর্তন আনতে পারে।
              এখনই এগিয়ে আসুন এবং একজন মানুষের পাশে দাঁড়ান।
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <div className="z-10 flex flex-col sm:flex-row gap-4">

            <a
              href="#donation"
              className="group relative overflow-hidden px-8 py-4 bg-sky-700 text-white font-bold rounded-tl-3xl rounded-br-3xl  hover:shadow-blue-300 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
            >
              {/* shimmer */}
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />

              দান করুন
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/contact"
              className="px-8 py-4 border border-sky-600 text-sky-600 font-bold rounded-tr-3xl rounded-bl-3xl hover:bg-sky-100 transition-all duration-300 hover:-translate-y-1"
            >
              যোগাযোগ করুন
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}