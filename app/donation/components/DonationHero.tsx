'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "@/public/donation-hero.png";
import Link from "next/link";

export default function DonationHero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Donation Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/20 md:bg-black/40" /> */}

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" /> */}

      {/* Content */}
      {/* <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          আপনার একটি দান
          <br />
          <span className="text-sky-400">
            একটি জীবন বদলে দিতে পারে
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-base md:text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed"
        >
          আপনার সামান্য সহযোগিতা একজন এতিম শিশু, একজন প্রতিবন্ধী মানুষ 
          বা একজন অসহায় বয়স্ক মানুষের জীবনে নতুন আশা নিয়ে আসতে পারে। 
          আজই দান করুন এবং একটি মানবিক পরিবর্তনের অংশ হোন।
        </motion.p> */}

        {/* CTA Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >

          <Link
            href="/"
            className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full shadow-xl transition transform hover:-translate-y-1"
          >
            হোমে ফিরে যান
          </Link>

          <Link
            href="contact"
            className="px-8 py-4 border border-white text-white font-semibold rounded-full hover:bg-white/10 transition"
          >
            যোগাযোগ করুন
          </Link>

        </motion.div>

      </div> */}

      {/* Bottom Fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent" /> */}

    </section>
  );
}