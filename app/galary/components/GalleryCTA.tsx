'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import ctaDecor from '@/public/cta-decor.jpg';

export default function GalleryCTA() {
  return (
    <section className="relative py-24 px-4 bg-linear-to-r from-sky-50/50 to-white">

      <div className="max-w-7xl mx-auto">

        {/* CTA Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-14 md:py-20 bg-white/80 backdrop-blur-sm border border-white/20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl"
        >

          {/* Decorative Background Image */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src={ctaDecor}
              alt="Decorative Background"
              className="object-cover"
              fill
              loading="lazy"
            />
          </div>

          {/* LEFT TEXT */}
          <div className="text-center md:text-left max-w-2xl z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              আমাদের সাথে যুক্ত হয়ে সাহায্যের হাত বাড়ান
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              আপনার সামান্য সহযোগিতাই আমাদের কার্যক্রমকে শক্তিশালী করে। 
              দান করুন বা যোগাযোগ করুন, যাতে আমরা আরও বেশি মানুষের জীবন স্পর্শ করতে পারি।
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 z-10">
            <a
              href="/donate"
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