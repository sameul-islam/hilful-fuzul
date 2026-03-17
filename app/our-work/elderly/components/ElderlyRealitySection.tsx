'use client';

import { motion } from "framer-motion";

export default function ElderlyRealitySection() {
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
            কেন বয়স্ক মানুষের সহায়তা জরুরি
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            আমাদের সমাজে অনেক বয়স্ক মানুষ রয়েছেন যারা পরিবারের সহায়তা,
            আর্থিক নিরাপত্তা এবং প্রয়োজনীয় যত্ন থেকে বঞ্চিত। এই অবস্থায় তারা
            প্রায়ই স্বাস্থ্য, খাদ্য এবং মানসিক নিরাপত্তা থেকে বঞ্চিত হয়।  
            তাদের পাশে দাঁড়ানো শুধু দান নয়, এটি একটি মানবিক দায়িত্ব।
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              স্বাস্থ্যগত চ্যালেঞ্জ
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              অনেক বয়স্ক মানুষ নিয়মিত চিকিৎসা ও পর্যবেক্ষণ থেকে বঞ্চিত।  
              তাদের জন্য স্বাস্থ্য সহায়তা এবং নিয়মিত চেকআপ অত্যন্ত গুরুত্বপূর্ণ।
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              দৈনন্দিন চাহিদার ঘাটতি
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              অনেক বয়স্ক মানুষ খাবার, পোশাক ও অন্যান্য মৌলিক চাহিদা পূরণে সমস্যার সম্মুখীন হন।  
              নিয়মিত সহায়তা তাদের জীবনকে নিরাপদ ও সহজ করে।
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              মানসিক ও সামাজিক নিরাপত্তা
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              অনেক বয়স্ক মানুষ সামাজিকভাবে একাকী এবং মানসিক চাপের মধ্যে থাকেন।  
              তাদের পাশে থাকা এবং সহানুভূতিশীল পরিবেশ তৈরি করা অত্যন্ত জরুরি।
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}