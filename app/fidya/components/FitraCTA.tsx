'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function FitraCTA() {
  return (
    <section className="relative py-28 px-4 bg-sky-50 overflow-hidden text-center">

      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-80 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #90cdf4 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-sky-300/40 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto text-sky-900"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          আজই ফিতরা / কাফফারা দিন
          <br />
          <span className="underline decoration-sky-400">একজন জীবনের পরিবর্তন আনতে পারে</span>
        </h2>
        <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
          সামান্য সাহায্যও বড় প্রভাব ফেলে। আপনার ফিতরা / কাফফারা একটি হাসি নিয়ে আসতে পারে অসহায়দের মুখে।
        </p>

        <Link
          href="donation"
          className="inline-block mt-10 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
        >
          এখনই ফিতরা / কাফফারা দিন
        </Link>
      </motion.div>

    </section>
  );
}