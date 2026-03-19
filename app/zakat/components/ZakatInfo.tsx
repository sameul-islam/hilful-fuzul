'use client';

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ZakatInfo() {
  return (
    <section className="relative py-24 px-4 bg-gray-50 overflow-hidden">

      {/* Decorative Blobs */}
      <div className="pointer-events-none absolute -top-32 -left-28 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-28 w-96 h-96 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-bold tracking-widest px-4 py-2 rounded-full mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-500" />
            যাকাত জানা জরুরি
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            আল্লাহর সন্তুষ্টি অর্জনের জন্য <span className="text-amber-500">যাকাত</span>
          </h2>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">যাকাত কি?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              যাকাত হলো মুসলমানদের জন্য বাধ্যতামূলক দান যা সম্পদের ২.৫% নির্ধারিত সময়ে আল্লাহর পথে খরচ করতে হয়। এটি সমাজে দারিদ্র্য কমাতে সাহায্য করে।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">ইনসপিরেশন</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-semibold text-amber-500">হাদিস:</span>  
              “যারা তাদের ধন সম্পদ আল্লাহর পথে ব্যয় করে, আল্লাহ তাদের জন্য ৭শ গুণ বরকত স্থাপন করবেন।” (সহীহ মুসলিম)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">কেন দেয়া জরুরি?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              যাকাত শুধু দারিদ্র্য দূর করে না, এটি আপনার সম্পদকে পরিশুদ্ধ করে, আল্লাহর সন্তুষ্টি আনে, এবং সমাজে মানবিক পরিবর্তন সৃষ্টি করে।
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}