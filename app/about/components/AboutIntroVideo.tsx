'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Quote } from 'lucide-react';

export default function AboutIntroVideo() {
  const [play, setPlay] = useState(false);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-linear-to-b from-white via-sky-50/30 to-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Subtle Glow */}
              <div className="absolute -inset-2 bg-linear-to-r from-sky-400/20 to-blue-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Video Container */}
              <div className="relative rounded  overflow-hidden shadow-2xl bg-linear-to-br from-gray-900 to-gray-800 aspect-video">
                {!play ? (
                  <>
                    {/* YouTube Thumbnail */}
                    <img
                      src="https://img.youtube.com/vi/6iaWYbQ4Isg/maxresdefault.jpg"
                      alt="About us video"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "https://img.youtube.com/vi/6iaWYbQ4Isg/hqdefault.jpg";
                      }}
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Play Button */}
                    <button
                      onClick={() => setPlay(true)}
                      className="absolute inset-0 flex items-center justify-center group/play"
                      aria-label="Play video"
                    >
                      <div className="relative">
                        
                        {/* Button Circle */}
                        <motion.div
                          className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/90  border-dashed cursor-pointer"
                        >
                          <Play
                            size={32}
                            className="text-white ml-1 transition-colors"
                          />
                        </motion.div>
                      </div>
                    </button>
                  </>
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/6iaWYbQ4Isg?autoplay=1&rel=0"
                    title="আমাদের সম্পর্কে"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 bg-sky-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-sky-200/50">
              <Quote className="text-sky-600" size={16} />
              <span className="text-sm font-semibold text-sky-700">আমাদের গল্প</span>
            </div>

            {/* Description */}
            <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
              <p className="relative pl-4 border-l-4 border-sky-400/40">
                আমরা বিশ্বাস করি—মানবিক সহায়তা কোনো অনুগ্রহ নয়, <span className="font-semibold text-gray-800">এটি একটি দায়িত্ব।</span> এই বিশ্বাস থেকেই আমাদের পথচলা শুরু।
              </p>

              <p>
                সমাজের সবচেয়ে অসহায় মানুষদের পাশে দাঁড়ানো, জরুরি মুহূর্তে দ্রুত সহায়তা পৌঁছে দেওয়া এবং <span className="font-semibold text-gray-800">স্বচ্ছতার সাথে প্রতিটি দানের সঠিক ব্যবহার নিশ্চিত করা</span>ই আমাদের মূল লক্ষ্য।
              </p>

              <p>
                এই ভিডিওতে আমাদের কাজ, আমাদের মানুষ এবং আমাদের বাস্তব কার্যক্রমের একটি সংক্ষিপ্ত কিন্তু প্রামাণ্য চিত্র তুলে ধরা হয়েছে।
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}