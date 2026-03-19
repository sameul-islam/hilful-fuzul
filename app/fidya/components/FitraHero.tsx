'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function FitraHero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-sky-50">

      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-80 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #90cdf4 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-sky-300/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-sky-900"
        >
          ফিতরা ও কাফফারা
          <br />
          <span className="text-sky-500">দেখুন নিয়মমাফিক কীভাবে দিতে হয়</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed"
        >
          আল্লাহর নির্দেশ অনুযায়ী ফিতরা ও কাফফারা দান করুন এবং আপনার পুণ্য বাড়ান। 
          হাদিসে বলা হয়েছে, “ফিতরা একজন মুসলিমের জন্য রোজার পরিশোধযোগ্য মুকাবিলা।”  
          (তিরমিযি, হাদিস 657)
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="donation"
            className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full shadow-xl transition transform hover:-translate-y-1"
          >
            এখনই ফিতরা / কাফফারা দিন
          </Link>
        </motion.div>

      </div>
    </section>
  );
}