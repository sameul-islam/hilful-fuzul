'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import disabilityHero from '@/public/disability-hero.jpg';

export default function DisabilitySupportHero() {
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
            প্রতিবন্ধী মানুষের পাশে দাঁড়ানো আমাদের দায়িত্ব
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            আমাদের সমাজে অনেক প্রতিবন্ধী মানুষ রয়েছে যারা প্রয়োজনীয় সহায়তা ও
            সুযোগ থেকে বঞ্চিত। আমরা তাদের জন্য চিকিৎসা, শিক্ষা, সহায়ক উপকরণ
            এবং একটি সম্মানজনক জীবনের সুযোগ তৈরি করার চেষ্টা করি। আপনার
            সহায়তায় একটি জীবনে নতুন সম্ভাবনার দ্বার খুলে যেতে পারে।
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
              src={disabilityHero}
              alt="প্রতিবন্ধী মানুষের সহায়তা"
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