'use client';

import { motion } from 'framer-motion';

export default function AboutCTA() {
  return (
    <section className="py-15 px-4">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden  bg-sky-300 text-sky-900 px-8 py-12 md:px-14 md:py-16"
        >

   

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-10">

            {/* LEFT CONTENT */}
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                মানবিক পরিবর্তনের অংশ হোন
              </h2>

              <p className="mt-4 text-sky-900 leading-relaxed">
                আপনার সামান্য সহায়তাও অনেক মানুষের জীবনে বড় পরিবর্তন আনতে পারে।
                আমরা একসাথে কাজ করলে সমাজের অসহায় মানুষদের জন্য একটি
                নিরাপদ ও সহানুভূতিশীল ভবিষ্যৎ তৈরি করা সম্ভব।
              </p>
            </div>

            {/* RIGHT BUTTON */}
            <div className="flex justify-center md:justify-end">
              <motion.a
                href="/donation"
                className="inline-flex items-center justify-center bg-sky-900 text-white font-semibold px-8 py-4 hover:bg-sky-800 transition"
              >
                দান করুন
              </motion.a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}