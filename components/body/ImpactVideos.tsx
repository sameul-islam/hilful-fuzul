"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronsLeft, ChevronsRight, Play } from "lucide-react";

const videos = [
  { id: "9pqdJ5Qmfn4", title: "বন্যার্ত মানুষের পাশে দাঁড়ানো" },
  { id: "Aj6_Btli2OU", title: "রমজানে খাদ্য সামগ্রী বিতরণ" },
  { id: "ucbq6ZYKtxM", title: "শীতবস্ত্র বিতরণ কার্যক্রম" },
  { id: "b8E7ky0dpQQ", title: "অসহায় পরিবারের সহায়তা" },
  { id: "PUrYcJ34ORA", title: "এতিম ও বিধবাদের পাশে আমরা" },
];

export default function ImpactVideos() {
  const ref = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);
  const [active, setActive] = useState<string | null>(null);

  const check = () => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setLeft(scrollLeft > 0);
    setRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", check);
    check();
    return () => el.removeEventListener("scroll", check);
  }, []);

  const move = (dir: "left" | "right") => {
    if (!ref.current) return;
    const cardWidth = ref.current.firstElementChild?.clientWidth || 360;
    ref.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            আমাদের কার্যক্রম ভিডিওতে
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            বাস্তবে আমরা কীভাবে মানুষের পাশে দাঁড়াই — তার কিছু প্রামাণ্য চিত্র
          </p>
        </div>

        <div className="relative">
          {/* Desktop Buttons */}
          {left && (
            <button
              onClick={() => move("left")}
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 p-2 bg-white text-sky-700 shadow-lg rounded-full"
            >
              <ChevronsLeft />
            </button>
          )}
          {right && (
            <button
              onClick={() => move("right")}
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 p-2 bg-white text-sky-700 shadow-lg rounded-full"
            >
              <ChevronsRight />
            </button>
          )}

          {/* Slider */}
          <div
            ref={ref}
            className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {videos.map((v) => (
              <div key={v.id} className="shrink-0 w-full md:w-[48%]">
                <div className="rounded overflow-hidden shadow-md bg-gray-100">
                  <div className="aspect-video relative">
                    {active !== v.id ? (
                      <button
                        onClick={() => setActive(v.id)}
                        className="group absolute inset-0 w-full h-full"
                      >
                        {/* Thumbnail */}
                        <img
                          src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                          alt={v.title}
                          className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div
                            className="w-16 h-16 rounded-full border border-white/60 flex items-center justify-center"
                          >
                            <Play className="text-white/90"/>
                          </div>
                        </div>
                      </button>
                    ) : (
                      <iframe
                        src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1&controls=0&showinfo=0`}
                        className="w-full h-full"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      />
                    )}
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-800">
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
