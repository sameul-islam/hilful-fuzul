'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle } from 'lucide-react';

const faqs = [
  {
    question: 'আমাদের সংস্থার মূল লক্ষ্য কী?',
    answer:
      'আমাদের মূল লক্ষ্য হলো সমাজের সবচেয়ে দুর্বল ও প্রান্তিক জনগোষ্ঠীর পাশে দাঁড়ানো। আমরা শিক্ষা, স্বাস্থ্য, খাদ্য ও জরুরি সহায়তার মাধ্যমে তাদের জীবনমান উন্নত করার প্রচেষ্টা চালাই। আমাদের প্রতিটি কার্যক্রম স্বচ্ছতা এবং মানবিক মূল্যবোধের ভিত্তিতে পরিচালিত হয়।',
  },
  {
    question: 'আমাদের সংস্থার কার্যক্রম কোথায় কেন্দ্রীভূত?',
    answer:
      'আমাদের কার্যক্রম মূলত দেশের প্রান্তিক অঞ্চল এবং দরিদ্র সম্প্রদায়ের মধ্যে কেন্দ্রীভূত। আমরা স্থানীয় কমিউনিটি এবং স্বেচ্ছাসেবীদের সাথে সমন্বয় করে কার্যক্রম পরিচালনা করি যাতে সহায়তা সরাসরি প্রয়োজনীয় মানুষের কাছে পৌঁছায়।',
  },
  {
    question: 'আমরা আয় কীভাবে অর্জন করি?',
    answer:
      'আমাদের আয় আসে দাতাদের দান, কর্পোরেট স্পনসরশিপ, অনলাইন ফান্ডরাইজিং এবং কমিউনিটি সাপোর্ট থেকে। প্রতিটি দান স্বচ্ছ এবং নির্দিষ্ট কার্যক্রমে ব্যয় হয় এবং আমরা দাতাদের প্রতি জবাবদিহিতা নিশ্চিত করি।',
  },
  {
    question: 'আমরা ব্যয় কোথায় করি?',
    answer:
      'আমাদের ব্যয় প্রধানত মানবিক সহায়তা, জরুরি ত্রাণ, শিক্ষা, স্বাস্থ্যসেবা এবং কমিউনিটি উন্নয়ন কার্যক্রমে ব্যবহৃত হয়। প্রতিটি ব্যয় আমাদের সামাজিক প্রভাব সর্বাধিক করার লক্ষ্যেই পরিচালিত হয়।',
  },
  {
    question: 'আমাদের সংস্থা কিভাবে স্বচ্ছতা নিশ্চিত করে?',
    answer:
      'আমরা নিয়মিত অডিট, রিপোর্ট প্রকাশ এবং কার্যক্রমের স্বচ্ছ ডকুমেন্টেশন বজায় রাখি। আমাদের ওয়েবসাইট এবং রিপোর্টে দানের ব্যবহার ও প্রকল্পের অগ্রগতি প্রকাশ করা হয়।',
  },
  {
    question: 'আমি কিভাবে দান করতে পারি?',
    answer:
      'আপনি আমাদের ওয়েবসাইটের দান বাটনের মাধ্যমে সহজেই অনলাইনে দান করতে পারেন। আমরা নিরাপদ পেমেন্ট পদ্ধতি ব্যবহার করি এবং প্রতিটি দানের জন্য স্বচ্ছ তথ্য প্রদান করি।',
  },
  {
    question: 'সহায়তা কীভাবে সঠিক মানুষের কাছে পৌঁছায়?',
    answer:
      'স্থানীয় কমিউনিটি প্রতিনিধি ও স্বেচ্ছাসেবীদের মাধ্যমে যাচাই করে আমরা সহায়তা বিতরণ করি। প্রতিটি কার্যক্রম পর্যবেক্ষণ এবং নথিভুক্ত করা হয়।',
  },
  {
    question: 'স্বেচ্ছাসেবী হিসেবে কিভাবে যুক্ত হব?',
    answer:
      'আমাদের কন্টাক্ট পেজ বা ভলান্টিয়ার ফর্ম পূরণ করে আপনি সহজেই আমাদের সাথে যুক্ত হতে পারেন। বিভিন্ন প্রকল্পে স্বেচ্ছাসেবীরা গুরুত্বপূর্ণ ভূমিকা পালন করেন।',
  },
  {
    question: 'আমাদের দীর্ঘমেয়াদি লক্ষ্য কী?',
    answer:
      'আমাদের দীর্ঘমেয়াদি লক্ষ্য হলো একটি সহানুভূতিশীল ও মানবিক সমাজ গঠন করা যেখানে প্রতিটি মানুষ মর্যাদা ও নিরাপত্তার সাথে বাঁচতে পারে।',
  },
  {
    question: 'আরও তথ্য কোথায় পাব?',
    answer:
      'আমাদের ওয়েবসাইটের কার্যক্রম, গ্যালারি এবং নিউজলেটার সেকশন থেকে আপনি নিয়মিত আপডেট এবং রিপোর্ট দেখতে পারবেন।',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          সাধারণ প্রশ্নাবলী
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          আমাদের সংস্থা এবং কার্যক্রম সম্পর্কে গুরুত্বপূর্ণ প্রশ্নের উত্তর
          এখানে দেওয়া হয়েছে।
        </p>

        <div className="mt-12 space-y-4">

          {faqs.map((faq, idx) => {

            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : idx)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={22}
                      className="text-sky-600 shrink-0 mt-0.5"
                    />

                    <span className="text-gray-800 font-semibold">
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="text-gray-500" />
                  </motion.div>

                </button>

                {/* Smooth drawer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out
                  ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-6 text-gray-700 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}