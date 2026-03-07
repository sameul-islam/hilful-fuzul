'use client';

import { motion } from "framer-motion";

export default function OrphanCTA() {
  return (
    <section className="py-24 px-4 bg-linear-to-r from-sky-600 to-sky-500 text-white">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-3xl px-8 py-12 md:px-14 md:py-16 bg-white/10 backdrop-blur-sm border border-white/20">

          {/* subtle background decoration */}
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-10">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.6 }}
              className="text-center md:text-left max-w-2xl"
            >
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight">
                একটি এতিম শিশুর ভবিষ্যৎ বদলে দিতে পারেন আপনিও
              </h2>

              <p className="mt-4 text-sky-100 leading-relaxed">
                আপনার সামান্য সহযোগিতাও একটি শিশুর জীবনে
                শিক্ষা, নিরাপত্তা এবং নতুন আশার আলো নিয়ে আসতে পারে।
                আমাদের সাথে যুক্ত হয়ে মানবিক সহায়তার এই যাত্রার অংশ হোন।
              </p>
            </motion.div>

            {/* RIGHT BUTTONS */}
            <motion.div
              initial={{ opacity:0, scale:0.9 }}
              whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true }}
              transition={{ duration:0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >

              <a
                href="/donate"
                className="px-8 py-4 text-center bg-white text-sky-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition"
              >
                দান করুন
              </a>

              <a
                href="/contact"
                className="px-8 py-4 text-center border border-white text-white font-semibold rounded-full hover:bg-white/10 transition"
              >
                যোগাযোগ করুন
              </a>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}