'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/public/gallery-hero.jpeg";

export default function GalleryHero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">
      
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="আমাদের কর্মকাণ্ডের মুহূর্তসমূহ"
        fill
        className="object-cover"
        loading="eager"
        priority
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
          আমাদের কর্মকাণ্ডের মুহূর্তসমূহ
        </h1>

        <p className="mt-4 text-white/80 text-base sm:text-lg md:text-xl max-w-3xl drop-shadow-md">
          ছবি ও মুহূর্তের মাধ্যমে আমরা আপনাদের সাথে শেয়ার করি আমাদের বিভিন্ন কার্যক্রম।
        </p>
      </motion.div>

    </section>
  );
}