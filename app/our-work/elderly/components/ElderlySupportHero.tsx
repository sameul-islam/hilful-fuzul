'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import elderlyHero from '@/public/elderly-hero.jpeg';

export default function ElderlySupportHero() {
  return (
    <section className="relative my-10 overflow-hidden bg-linear-to-b from-sky-50 to-white py-20 px-4">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
            বয়স্ক মানুষের পাশে দাঁড়ানো আমাদের দায়িত্ব
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            আমাদের সমাজে অনেক বয়স্ক মানুষ রয়েছেন যারা পরিবার, আর্থিক সহায়তা
            এবং প্রয়োজনীয় যত্ন থেকে বঞ্চিত। আমরা তাদের জন্য খাদ্য, চিকিৎসা,
            সেবা এবং একটি সম্মানজনক জীবনের নিশ্চয়তা দেওয়ার চেষ্টা করি।
            আপনার সহায়তায় একজন বয়স্ক মানুষের জীবনে স্বস্তি ও নিরাপত্তা ফিরে আসতে পারে।
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/donate"
              className="px-7 py-3 bg-sky-600 text-white font-semibold rounded-full shadow hover:bg-sky-700 transition"
            >
              দান করুন
            </a>

            <a
              href="/contact"
              className="px-7 py-3 border border-sky-600 text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition"
            >
              বিস্তারিত জানুন
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded border border-sky-100 overflow-hidden shadow-xl">
            <Image
              src={elderlyHero}
              alt="বয়স্ক মানুষের সহায়তা"
              loading="lazy"
              className="w-full h-87.5 md:h-112.5 lg:h-116 xl:h-112.5 object-cover"
            />
          </div>

          {/* soft decorative circle */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-100 rounded-full blur-2xl opacity-60"></div>
        </motion.div>

      </div>

    </section>
  );
}