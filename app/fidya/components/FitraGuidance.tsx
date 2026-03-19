'use client';

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const fitraHadiths = [
  {
    text: "রোজা শেষ হওয়ার আগে ফিতরা দান করা বাধ্যতামূলক।",
    reference: "সাহিহ মুসলিম, হাদিস 1015",
  },
  {
    text: "কাফফারা দান করে একজন মুসলিম তার শপথের ভুল শোধ করতে পারে।",
    reference: "তিরমিযি, হাদিস 1334",
  },
  {
    text: "ফিতরা অল্প হলেও গরিবদের সাহায্য করতে যথেষ্ট।",
    reference: "সাহিহ বুখারি, হাদিস 1442",
  },
  {
    text: "কাফফারা দেওয়া আল্লাহর কাছে প্রিয় কাজ।",
    reference: "ইবনে মাজাহ, হাদিস 1875",
  },
];

export default function FitraGuidance() {
  return (
    <section className="relative py-24 px-4 bg-sky-50 overflow-hidden">

      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-80 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #90cdf4 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-sky-300/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sky-900 leading-tight">
            ফিতরা ও কাফফারা সম্পর্কিত হাদিসসমূহ
          </h2>
          <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            আল্লাহর নির্দেশ অনুযায়ী ফিতরা ও কাফফারা প্রদান করার নিয়মসমূহ।
          </p>
        </motion.div>

        {/* Hadith Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {fitraHadiths.map((hadith, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-xl transition cursor-default"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-sky-200/40 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-sky-500" />
                <span className="text-sky-700 font-semibold text-sm uppercase">ফিতরা / কাফফারা</span>
              </div>
              <p className="text-gray-800 text-base leading-relaxed mb-2">{hadith.text}</p>
              <span className="text-gray-500 text-sm">{hadith.reference}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}