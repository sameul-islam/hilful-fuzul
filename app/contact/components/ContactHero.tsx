'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import contactHero from '@/public/contact-hero.jpg';

export default function ContactHero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src={contactHero}
        alt="Contact Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        className="relative z-10 text-center px-4 max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          যোগাযোগ করুন
        </h1>

        <p className="mt-4 text-gray-200 text-lg leading-relaxed">
          আপনার যেকোনো প্রশ্ন, পরামর্শ বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন। 
          আমরা সবসময় আপনার পাশে আছি।
        </p>
      </motion.div>

    </section>
  );
}