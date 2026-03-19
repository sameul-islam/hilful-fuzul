'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/public/zakat-hero.jpg";
import { Star } from "lucide-react";

export default function ZakatHero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-gray-50">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Zakat Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/60" />



      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
        >
          আপনার <span className="text-sky-400">যাকাত</span>  
          <br />
          জীবন বদলাতে পারে
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-gray-100 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
        >
          যাকাত হলো সম্পদ থেকে আল্লাহর সন্তুষ্টি অর্জনের জন্য একটি বাধ্যতামূলক দান।  
          এটি দারিদ্র্য দূর করে সমাজে মানবিক পরিবর্তন নিয়ে আসে।  
          আজই আপনার যাকাত প্রদান করুন।
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="#calculator"
            className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full shadow-xl transition transform hover:-translate-y-1"
          >
            যাকাত ক্যালকুলেটর
          </Link>

          <Link
            href="donation"
            className="px-8 py-4 border border-white text-white font-semibold rounded-full hover:bg-white/10 transition"
          >
            দান করুন
          </Link>
        </motion.div>

      </div>


    </section>
  );
}