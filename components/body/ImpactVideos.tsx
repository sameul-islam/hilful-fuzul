"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";


const videos = [
  {
    embedCode: '<iframe width="1401" height="788" src="https://www.youtube.com/embed/9pqdJ5Qmfn4" title="Your Donation: A Lifeline for #Bangladesh  Flood Victims 🤲" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    title: "বন্যার্ত মানুষের পাশে দাঁড়ানো",
  },
  {
    embedCode: '<iframe width="1401" height="788" src="https://www.youtube.com/embed/Aj6_Btli2OU" title="Ramadan Food Pack distriution in Bangladesh 2025 | #charity #sadaqah #ramadan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    title: "রমজানে খাদ্য সামগ্রী বিতরণ",
  },
  {
    embedCode: '<iframe width="1401" height="788" src="https://www.youtube.com/embed/ucbq6ZYKtxM" title="Human Care Initiative - Winter Appeal Bangladesh 2018 with MuslimGiving.org" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    title: "শীতবস্ত্র বিতরণ কার্যক্রম",
  },
  {
    embedCode: '<iframe width="1401" height="788" src="https://www.youtube.com/embed/b8E7ky0dpQQ" title="A Glimpse into the Lives of Bangladesh&#39;s Street Children | Muslim Charity UK | Mahmud&#39;s Creato" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    title: "অসহায় পরিবারের সহায়তা",
  },
  {
    embedCode: '<iframe width="1401" height="788" src="https://www.youtube.com/embed/PUrYcJ34ORA" title="Orphanages in Bangladesh l 2019 l Pious Projects" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    title: "এতিম ও বিধবাদের পাশে আমরা",
  },
];

export default function ImpactVideos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => slider.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 380;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900">
            আমাদের কার্যক্রম ভিডিওতে দেখুন
          </h2>
          <p className="mt-3 text-gray-600 mx-auto text-center text-base md:text-lg max-w-2xl">
            আমরা কীভাবে মানুষের পাশে দাঁড়াই — তার কিছু বাস্তব চিত্র এখানে তুলে ধরা হয়েছে।
          </p>
        </div>

        {/* Video Slider Container */}
        <div className="relative">
          {/* Desktop Navigation Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 p-2 items-center justify-center rounded bg-sky-100 shadow-xl hover:shadow-2xl hover:bg-sky-300 transition-all duration-500 border border-gray-400"
              aria-label="Previous videos"
            >
              <ChevronsLeft className="h-6 w-6 text-sky-700" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 p-2 items-center justify-center rounded bg-sky-100 shadow-xl hover:shadow-2xl hover:bg-sky-300 transition-all duration-500 border border-sky-400"
              aria-label="Next videos"
            >
              <ChevronsRight className="h-6 w-6 text-sky-700" />
            </button>
          )}

          {/* Video Scroll Area */}
          <div
            ref={scrollRef}
            className="flex gap-4 lg:gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="shrink-0 w-full h-full"
              >
                {/* Video Container */}
                <div className="aspect-video w-full overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div
                    className="h-full w-full [&>iframe]:w-full [&>iframe]:h-full"
                    dangerouslySetInnerHTML={{ __html: video.embedCode }}
                  />
                </div>

                {/* Video Title */}
                <h3 className="mt-3 text-sm md:text-base font-semibold text-gray-800 line-clamp-2">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global CSS for hiding scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}