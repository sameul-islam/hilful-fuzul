'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const missionPoints = [
  'অসহায়, দরিদ্র ও বঞ্চিত মানুষের পাশে মানবিক সহায়তা নিয়ে দাঁড়ানো',
  'জরুরি দুর্যোগ মুহূর্তে দ্রুত ও কার্যকর ত্রাণ পৌঁছে দেওয়া',
  'সমাজের সবচেয়ে ঝুঁকিপূর্ণ জনগোষ্ঠীর জীবনমান উন্নয়নে কাজ করা',
  'মানুষের মৌলিক অধিকার ও মর্যাদা রক্ষায় সক্রিয় ভূমিকা রাখা',
  'স্বচ্ছতা ও জবাবদিহিতার মাধ্যমে দানের সঠিক ব্যবহার নিশ্চিত করা',
  'স্থানীয় কমিউনিটির সাথে সমন্বয় করে টেকসই সহায়তা প্রদান',
  'অসহায় মানুষকে আত্মনির্ভরশীল করার উদ্যোগ গ্রহণ',
  'শিক্ষা, খাদ্য ও চিকিৎসা সহায়তার মাধ্যমে মানবিক উন্নয়ন',
  'দাতাদের বিশ্বাস ও আস্থাকে সর্বোচ্চ গুরুত্ব দেওয়া',
  'সমাজে ইতিবাচক পরিবর্তনের জন্য ধারাবাহিক কাজ চালিয়ে যাওয়া',
];

const visionPoints = [
  'একটি ন্যায়ভিত্তিক, মানবিক ও সহানুভূতিশীল সমাজ গঠন',
  'দারিদ্র্য ও অসহায়ত্বমুক্ত একটি ভবিষ্যৎ নির্মাণ',
  'যেখানে প্রতিটি মানুষ সম্মান ও নিরাপত্তার সাথে বাঁচতে পারে',
  'মানুষকে সহায়তার মাধ্যমে আত্মনির্ভরশীল করে তোলা',
  'সমাজসেবাকে স্বচ্ছ ও আদর্শ রূপে প্রতিষ্ঠিত করা',
  'বিশ্বাসযোগ্য মানবকল্যাণ সংস্থা হিসেবে দীর্ঘমেয়াদি প্রভাব তৈরি',
  'জরুরি ত্রাণের পাশাপাশি উন্নয়নমূলক কার্যক্রমে গুরুত্ব দেওয়া',
  'পরবর্তী প্রজন্মের জন্য একটি সহানুভূতিশীল সমাজ রেখে যাওয়া',
  'মানবিক মূল্যবোধকে সমাজের কেন্দ্রে স্থাপন করা',
  'দেশ ও সমাজ উন্নয়নে সক্রিয় অংশীদার হওয়া',
];

export default function MissionVision() {
  const [active, setActive] = useState<'mission' | 'vision'>('mission');

  const points = active === 'mission' ? missionPoints : visionPoints;

  return (
    <section className="relative py-14 px-4">
      <div className="max-w-7xl mx-auto p-2 text-center border border-sky-100 rounded-4xl">
          <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 75%)",
        }}
      />
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl pt-5 font-bold text-gray-800"
        >
          আমাদের লক্ষ্য ও উদ্দেশ্য
        </motion.h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          আমরা কেন কাজ করছি এবং কোন মূল্যবোধ আমাদের পথ দেখায়—
          এই লক্ষ্য ও উদ্দেশ্য আমাদের প্রতিটি কার্যক্রমের ভিত্তি।
        </p>

        {/* Toggle */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          {[
            { key: 'mission', label: 'আমাদের লক্ষ্য' },
            { key: 'vision', label: 'আমাদের উদ্দেশ্য' },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActive(btn.key as 'mission' | 'vision')}
              className={`px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300
                ${
                  active === btn.key
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/30'
                    : 'bg-white text-gray-700 hover:bg-sky-100'
                }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-10 max-w-5xl mx-auto text-left">
          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2"
            >
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-5 rounded-xl"
                >
                  <CheckCircle
                    size={22}
                    className="text-sky-600 shrink-0 mt-0.5"
                  />
                  <span className="text-gray-700 leading-relaxed text-sm">
                    {point}
                  </span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
