'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type ImpactItem = {
  label: string;
  value: number;
  suffix?: string;
};

const impacts: ImpactItem[] = [
  { label: 'এতিম শিশুর পাশে দাঁড়িয়েছি', value: 500, suffix: '+' },
  { label: 'বিধবা ও বয়স্ক পরিবারকে সহায়তা', value: 300, suffix: '+' },
  { label: 'চিকিৎসা সহায়তা প্রদান', value: 200, suffix: '+' },
  { label: 'বছর ধরে নিরবচ্ছিন্ন মানবিক কাজ', value: 5, suffix: '+' },
];

function CountUp({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 600; 
    const stepTime = 16;
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-3xl font-Noto md:text-4xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-Noto font-bold text-gray-900 mb-3">
          আমাদের কাজের বাস্তব প্রভাব
        </h2>
        <p className="text-gray-600 font-Tiro max-w-2xl mx-auto mb-12">
          সংখ্যার চেয়েও মানুষের জীবনের পরিবর্তন আমাদের কাছে গুরুত্বপূর্ণ
        </p>

        {/* Impact Grid */}
        <div className=' bg-sky-400 border border-sky-800 border-dotted p-10 md:p-20 w-full'>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {impacts.map((item, index) => (
            <div  key={index} >
              <CountUp value={item.value} suffix={item.suffix} />
              <p className="mt-2 text-sm text-gray-50 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
