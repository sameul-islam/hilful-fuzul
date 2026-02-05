"use client";

import { useState } from "react";

// Gallery images
const galleryImages = [
  "/gallery/img1.jpeg",
  "/gallery/img2.jpeg",
  "/gallery/img3.jpeg",
  "/gallery/img4.jpeg",
  "/gallery/img5.jpeg",
  "/gallery/img6.jpeg",
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            আমাদের কার্যক্রমের মুহূর্তগুলো
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            বাস্তব কাজের চিত্র যা আমাদের সাহায্য এবং সমর্থনের গল্প বর্ণনা করে
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setActive(i)}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300"
                loading="lazy"
              />

              {/* Optional overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <img
            src={galleryImages[active]}
            alt={`Gallery ${active + 1}`}
            loading="lazy"
            className="max-h-full max-w-full shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
