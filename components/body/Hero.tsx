'use client';

import { motion } from 'framer-motion';
// import Image from 'next/image';
// import heroImg from '@/public/hero-image.png';
import Link from 'next/link';
import { HeartPulse, Sparkles } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section className="relative w-full h-[70vh] sm:h-[80vh] xl:h-[85vh]  overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src={heroImg}
//           alt="Hero Background"
//           fill
//           className="object-cover object-center"
//           priority
//         />
        {/* <div className="absolute inset-0 bg-black/50"></div> */}
      {/* </div> */}

      {/* Hero Content */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center  h-full max-w-7xl mx-auto px-6 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-Outfit font-semibold leading-tight">
            এক হৃদয়ে , এক পরিবর্তন আনুন
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl font-Karla font-semibold text-white/90">
            সুবিধাবঞ্চিতদের ক্ষমতায়ন, আশা ছড়িয়ে দেওয়া এবং জীবন পরিবর্তনে আমাদের সাথে যোগ দিন।
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <Link
              href="/donation"
              className="relative flex items-center gap-3 bg-sky-600 hover:bg-sky-700 px-8 py-4 font-semibold shadow-lg shadow-sky-500/30 hover:shadow-xl transition-all duration-500"
            >
              <HeartPulse size={20} className="text-white/90 animate-bounce" />
              দান করুন
              <Sparkles size={18} className="animate-pulse" />
            </Link>
            <Link
              href="/about"
              className=" border border-sky-500 border-dotted hover:bg-white hover:text-gray-800 text-white px-8 py-4 font-semibold transition-all duration-500"
            >
              আরও জানুন
            </Link>
          </motion.div>
        </motion.div>
      </div> */}
    {/* </section>
  );
};

export default Hero; */}







import Image from "next/image";
import heroDesktop from "@/public/hero-desktop.png";
import heroMobile from "@/public/hero-mobile.png";

export default function Hero() {
  return (
    <section className="w-full pt-14 lg:pt-20">
      {/* Mobile */}
      <div className="block sm:hidden">
        <Image
          src={heroMobile}
          alt="Hero Banner"
          priority
          className="w-full h-auto"
          sizes="100vw"
        />
      </div>

      {/* Tablet + Desktop */}
      <div className="hidden sm:block">
        <Image
          src={heroDesktop}
          alt="Hero Banner"
          priority
          className="w-full h-auto"
          sizes="100vw"
        />
      </div>
    </section>
  );
}