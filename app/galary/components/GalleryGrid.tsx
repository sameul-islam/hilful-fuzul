'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const galleryImages = [
  "/images/gallery/img1.jpeg",
  "/images/gallery/img2.jpeg",
  "/images/gallery/img3.jpeg",
  "/images/gallery/img4.jpeg",
  "/images/gallery/img5.jpeg",
  "/images/gallery/img6.jpeg",
  "/images/gallery/img7.jpeg",
  "/images/gallery/img8.jpeg",
  "/images/gallery/img9.jpeg",
  "/images/gallery/img10.jpeg",
  "/images/gallery/img11.jpeg",
  "/images/gallery/img12.jpeg",
];

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="py-10 md:py-20 px-4 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            আমাদের কার্যক্রমের ছবিগুলি
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            নানান মুহূর্ত ও কার্যক্রমের আলোকচিত্র, যা আমাদের কাজের গল্প বলে।
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-4/3 cursor-pointer overflow-hidden rounded shadow-sm hover:shadow-lg"
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={img}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover w-full h-full transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            className="absolute top-6 right-6 text-white cursor-pointer hover:rotate-180 transition duration-500"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="w-10 h-10" />
          </button>

          <div className="relative w-[90vw] h-[80vh] md:h-[90vh] p-4">
            <Image
              src={galleryImages[lightboxIndex]}
              alt={`Gallery image ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              loading="eager"
            />
          </div>
        </div>
      )}
    </section>
  );
}