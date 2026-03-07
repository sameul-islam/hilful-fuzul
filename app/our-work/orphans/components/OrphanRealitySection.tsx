'use client';

import { motion } from "framer-motion";

export default function OrphanRealitySection() {
  return (
    <section className="py-5 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            কেন এতিম শিশুদের সহায়তা জরুরি
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            আমাদের সমাজে অনেক শিশু রয়েছে যারা পিতামাতার স্নেহ, নিরাপত্তা
            এবং অর্থনৈতিক সহায়তা ছাড়াই বড় হচ্ছে। এই পরিস্থিতিতে তারা
            প্রায়ই শিক্ষা, স্বাস্থ্যসেবা এবং স্বাভাবিক শৈশবের সুযোগ থেকে
            বঞ্চিত হয়। তাদের পাশে দাঁড়ানো শুধু একটি দান নয়, এটি একটি
            মানবিক দায়িত্ব।
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              শিক্ষা থেকে বঞ্চিত হওয়া
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              অনেক এতিম শিশু অর্থনৈতিক সংকটের কারণে স্কুলে যেতে পারে না।
              ফলে তাদের ভবিষ্যৎ অনিশ্চিত হয়ে পড়ে এবং তারা সমাজে পিছিয়ে
              পড়ে।
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              খাদ্য ও মৌলিক চাহিদার সংকট
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              অনেক শিশু প্রতিদিন পর্যাপ্ত পুষ্টিকর খাবার পায় না।
              নিয়মিত খাদ্য সহায়তা তাদের সুস্থভাবে বেড়ে ওঠার জন্য
              অত্যন্ত গুরুত্বপূর্ণ।
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              নিরাপত্তা ও মানসিক সহায়তা
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              পিতামাতাহীন অনেক শিশু মানসিকভাবে ভেঙে পড়ে এবং
              নিরাপত্তাহীনতায় ভোগে। তাদের পাশে থাকা এবং
              সহানুভূতিশীল পরিবেশ তৈরি করা অত্যন্ত জরুরি।
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}