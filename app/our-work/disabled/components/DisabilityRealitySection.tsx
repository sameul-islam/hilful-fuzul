'use client';

import { motion } from "framer-motion";

export default function DisabilityRealitySection() {
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
            কেন প্রতিবন্ধী মানুষের সহায়তা জরুরি
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            আমাদের সমাজে অনেক প্রতিবন্ধী মানুষ রয়েছে যারা শারীরিক বা মানসিক
            সীমাবদ্ধতার কারণে জীবনের মৌলিক সুযোগ থেকে বঞ্চিত। তারা প্রায়ই
            শিক্ষা, চিকিৎসা এবং সামাজিক গ্রহণযোগ্যতার অভাবে কষ্ট পায়।
            তাদের পাশে দাঁড়ানো শুধু সহানুভূতি নয়, এটি একটি মানবিক দায়িত্ব।
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              শিক্ষা ও দক্ষতার অভাব
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              অনেক প্রতিবন্ধী ব্যক্তি সঠিক শিক্ষা বা দক্ষতা অর্জনের সুযোগ
              পায় না, যার ফলে তারা স্বনির্ভর হতে পারে না এবং সমাজে পিছিয়ে
              পড়ে।
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              চিকিৎসা ও সহায়ক উপকরণের অভাব
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              অনেকেই প্রয়োজনীয় চিকিৎসা, থেরাপি বা সহায়ক উপকরণ যেমন
              হুইলচেয়ার, কৃত্রিম অঙ্গ ইত্যাদি পায় না, যা তাদের দৈনন্দিন
              জীবনকে কঠিন করে তোলে।
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              সামাজিক অবহেলা ও বৈষম্য
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              অনেক প্রতিবন্ধী মানুষ সমাজে অবহেলা ও বৈষম্যের শিকার হয়।
              তাদের জন্য একটি অন্তর্ভুক্তিমূলক ও সহানুভূতিশীল পরিবেশ তৈরি
              করা অত্যন্ত জরুরি।
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}