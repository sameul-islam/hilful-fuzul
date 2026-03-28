'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import ctaDecor from '@/public/cta-decor.jpg';

export default function EmergencyCTA() {
  return (
    <section className="relative py-18 px-4 bg-sky-50/30">

      <div className="max-w-7xl mx-auto">

        {/* CTA Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-14 md:py-20 bg-white/80 backdrop-blur-sm border border-white/20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg"
        >

          {/* Decorative Image */}
          <div className="absolute w-full h-full left-0 top-0 bottom-0 right-0 opacity-20">
            <Image
              src={ctaDecor}
              alt="Decorative"
              className="object-cover"
              fill
              loading="lazy"
            />
          </div>

          {/* LEFT TEXT */}
          <div className="text-center md:text-left max-w-2xl z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              জরুরি পরিস্থিতিতে মানুষের পাশে দাঁড়ান
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              প্রাকৃতিক দুর্যোগ, দুর্ঘটনা বা জরুরি পরিস্থিতিতে আপনার সামান্য সাহায্য 
              অনেক মানুষের জীবন রক্ষা করতে পারে। এখনই দান করুন এবং তাদের সহায়তায় অংশ নিন।
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 z-10">
            <a
              href="/donation"
              className="px-8 py-4 text-center bg-sky-600 text-white font-semibold rounded-full shadow-lg hover:bg-sky-700 transition transform hover:-translate-y-1"
            >
              দান করুন
            </a>

            <a
              href="/contact"
              className="px-8 py-4 text-center border border-sky-600 text-sky-600 font-semibold rounded-full hover:bg-sky-100 transition transform hover:-translate-y-1"
            >
              যোগাযোগ করুন
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}