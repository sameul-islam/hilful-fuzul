'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const items = [
  {
    title: 'এতিম শিশুদের পাশে',
    desc: 'অভিভাবকহীন শিশুদের জীবনে আশার আলো জ্বালাচ্ছি আমরা। তাদের শিক্ষা, খাদ্য, বস্ত্র ও আশ্রয়ের ব্যবস্থা করে একটি সুন্দর ভবিষ্যৎ গড়ে দিচ্ছি। প্রতিটি শিশু পাচ্ছে ভালোবাসা, যত্ন এবং সঠিক দিকনির্দেশনা।',
    img: '/images/what-we-do/orphan.jpeg',
  },
  {
    title: 'বিধবা মায়েদের সহায়তা',
    desc: 'স্বামীহারা নারীদের আত্মনির্ভরশীল করে তুলছি। তাদের জন্য রয়েছে আর্থিক সহায়তা, কর্মসংস্থান প্রশিক্ষণ ও মানসিক সাপোর্ট। প্রতিটি মা যেন মর্যাদার সাথে সন্তানদের মানুষ করতে পারেন।',
    img: '/images/what-we-do/widow.webp',
  },
  {
    title: 'জরুরি চিকিৎসা সেবা',
    desc: 'অসুস্থ ও অসহায় মানুষদের বিনামূল্যে চিকিৎসা সেবা দিচ্ছি। জরুরি অপারেশন, ঔষধ সরবরাহ এবং হাসপাতাল খরচে সহায়তা করছি। কারো যেন অর্থের অভাবে চিকিৎসা বন্ধ না হয়।',
    img: '/images/what-we-do/medical.jpg',
  },
  {
    title: 'বয়স্কদের সেবা ও সম্মান',
    desc: 'বয়োবৃদ্ধ মানুষদের প্রতি শ্রদ্ধা ও যত্ন নিশ্চিত করছি। তাদের জন্য স্বাস্থ্যসেবা, খাবার সরবরাহ এবং মানসিক সাহচর্য প্রদান করছি। প্রতিটি বয়স্ক ব্যক্তি যেন সম্মানের সাথে বাকি জীবন কাটাতে পারেন।',
    img: '/images/what-we-do/elderly.jpeg',
  },
  {
    title: 'যাকাত ও রমজান সহায়তা',
    desc: 'পবিত্র রমজান মাসে দরিদ্র পরিবারগুলোর পাশে দাঁড়াচ্ছি। যাকাত, সাদাকাহ এবং ফিতরার মাধ্যমে অসহায়দের ঈদের আনন্দ উপহার দিচ্ছি। ইফতার বিতরণ, খাদ্য সামগ্রী ও নতুন কাপড়ের ব্যবস্থা করছি।',
    img: '/images/what-we-do/zakat.webp',
  },
  {
    title: 'জরুরি দুর্যোগ সহায়তা',
    desc: 'প্রাকৃতিক দুর্যোগ ও সংকটে তাৎক্ষণিক সাহায্য পৌঁছে দিচ্ছি। বন্যা, ঘূর্ণিঝড় বা অন্য যেকোনো বিপর্যয়ে দ্রুত খাদ্য, পানি, ওষুধ ও আশ্রয়ের ব্যবস্থা করছি।',
    img: '/images/what-we-do/crisis.webp',
  },
];

export default function WhatWeDo() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [modalItem, setModalItem] = useState<number | null>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const amount = dir === 'left' ? -400 : 400;
    sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }} className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-Tiro font-bold text-gray-900 mb-4">
            আমাদের সেবাসমূহ
          </h2>
          <p className="text-gray-600 font-Noto text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            প্রতিটি মানুষের পাশে দাঁড়ানোর প্রতিশ্রুতিতে আবদ্ধ আমরা। ধর্ম, বর্ণ, গোত্র নির্বিশেষে সকল অসহায় মানুষের সেবায় নিয়োজিত।
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {/* Desktop Arrows */}
          <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20">
            <button onClick={() => scroll('left')} className="p-2 bg-white/90 text-sky-700 rounded shadow-md hover:bg-sky-300 border border-sky-300 transition-colors duration-500"> <ChevronsLeft /> </button>
          </div>
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20">
            <button onClick={() => scroll('right')} className="p-2 bg-white/90 text-sky-700 rounded shadow-md hover:bg-sky-300 border border-sky-300 transition-colors duration-500"> <ChevronsRight /> </button>
          </div>

          <div ref={sliderRef} className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar">
            {items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: i*0.1 }} className="shrink-0 w-75 sm:w-90 lg:w-100">
                <div className="overflow-hidden border border-gray-100 hover:shadow-md cursor-pointer transition duration-500" onClick={() => setModalItem(i)}>
                  <div className="relative h-72 sm:h-80">
                    <Image src={item.img} alt={item.title} loading='lazy' fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-Noto text-lg md:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm font-Noto line-clamp-3">{item.desc}</p>
                    <button className="text-sky-600 font-semibold mt-2">আরও জানুন —</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalItem !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-xl">
            <button onClick={() => setModalItem(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold">&times;</button>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{items[modalItem].title}</h3>
            <p className="text-gray-700 leading-relaxed">{items[modalItem].desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
