'use client';

import { motion } from "framer-motion";

export default function EmergencyRealitySection() {
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
            জরুরি ত্রাণের প্রয়োজন কেন
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            প্রাকৃতিক দুর্যোগ, দুর্ঘটনা বা হঠাৎ কোন সংকটের সময় মানুষ
            খাদ্য, পানি, আশ্রয় ও চিকিৎসার মতো মৌলিক সহায়তা থেকে বঞ্চিত হয়। 
            সময়মতো সহায়তা পৌঁছানো না হলে তাদের জীবন ও স্বাস্থ্য ঝুঁকিতে পড়ে।
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              খাদ্য ও পানি সংকট
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              দুর্যোগের সময় অনেক মানুষ পর্যাপ্ত খাবার ও নিরাপদ পানি পায় না। 
              এটি স্বাস্থ্যের জন্য মারাত্মক হুমকি সৃষ্টি করে।
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              অস্থায়ী আশ্রয়ের অভাব
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              বন্যা, আগুন বা ঝড়ের কারণে অনেক মানুষ তাদের বাড়ি থেকে বাস্তুচ্যুত হয়। 
              নিরাপদ অস্থায়ী আশ্রয় না থাকলে তাদের জীবন বিপন্ন হয়।
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              জরুরি চিকিৎসা প্রয়োজন
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              দুর্ঘটনা বা রোগ-সংক্রান্ত পরিস্থিতিতে চিকিৎসা সহায়তা প্রায়ই অনুপলব্ধ থাকে। 
              দ্রুত চিকিৎসা পৌঁছানো জীবন বাঁচাতে সাহায্য করে।
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}