'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle } from 'lucide-react';

const faqs = [
  {
    question: 'আমাদের সংস্থার মূল লক্ষ্য কী?',
    answer: `আমাদের মূল লক্ষ্য হলো সমাজের সবচেয়ে দুর্বল ও প্রান্তিক জনগোষ্ঠীর পাশে দাঁড়ানো। 
    আমরা শিক্ষা, স্বাস্থ্য, খাদ্য ও জরুরি সহায়তার মাধ্যমে তাদের জীবনমান উন্নত করার প্রচেষ্টা চালাই। 
    আমাদের প্রতিটি কার্যক্রম স্বচ্ছতা এবং মানবিক মূল্যবোধের ভিত্তিতে পরিচালিত হয়।`,
  },
  {
    question: 'আমাদের সংস্থার কার্যক্রম কোথায় কেন্দ্রীভূত?',
    answer: `আমাদের কার্যক্রম মূলত দেশের প্রান্তিক অঞ্চল এবং দরিদ্র সম্প্রদায়ের মধ্যে কেন্দ্রীভূত। 
    আমরা স্থানীয় কমিউনিটি এবং স্বেচ্ছাসেবীদের সাথে সমন্বয় করে কার্যক্রম পরিচালনা করি, 
    যাতে সহায়তা সরাসরি প্রয়োজনীয় মানুষের কাছে পৌঁছায়।`,
  },
  {
    question: 'আমরা আয় কীভাবে অর্জন করি?',
    answer: `আমাদের আয় আসে দাতাদের দান, কর্পোরেট স্পনসরশিপ, অনলাইন ফান্ডরাইজিং এবং কমিউনিটি সাপোর্ট থেকে। 
    প্রতিটি দান স্বচ্ছ এবং নির্দিষ্ট কার্যক্রমে ব্যয় হয়। আমরা দাতাদের প্রতি সর্বদা জবাবদিহি নিশ্চিত করি।`,
  },
  {
    question: 'আমরা ব্যয় কোথায় করি?',
    answer: `আমাদের ব্যয় প্রধানত মানবিক সহায়তা, জরুরি ত্রাণ, শিক্ষা ও স্বাস্থ্যসেবা, 
    কমিউনিটি উন্নয়ন এবং প্রশাসনিক/logistics খাতে হয়। 
    প্রতিটি ব্যয় কার্যক্রমের impact maximization এর দিকে মনোযোগ দেয়।`,
  },
  {
    question: 'আমাদের সংস্থা কিভাবে স্বচ্ছতা নিশ্চিত করে?',
    answer: `আমরা স্বচ্ছতা নিশ্চিত করতে নিয়মিত অডিট এবং রিপোর্ট প্রকাশ করি। 
    প্রতিটি দানের ব্যবহার, কার্যক্রমের হিসাব এবং impact সম্পর্কিত তথ্য আমাদের website এবং বার্ষিক রিপোর্টে প্রকাশ করা হয়।`,
  },
  {
    question: 'আমি কিভাবে দান করতে পারি?',
    answer: `আপনি আমাদের website এর "দান করুন" বাটন ব্যবহার করে সহজেই অনলাইনে দান করতে পারেন। 
    আমরা নিরাপদ পেমেন্ট গেটওয়ে ব্যবহার করি এবং প্রতিটি দান সম্পর্কে পূর্ণ তথ্য প্রদান করি।`,
  },
  {
    question: 'আমরা কিভাবে নিশ্চিত করি সাহায্যটি প্রয়োজনীয় মানুষের কাছে পৌঁছায়?',
    answer: `আমরা স্থানীয় কমিউনিটি লিডার এবং স্বেচ্ছাসেবীদের মাধ্যমে beneficiary যাচাই করি। 
    প্রতিটি কার্যক্রমের impact monitored এবং documented হয় যাতে সাহায্য সঠিকভাবে বিতরণ হয়।`,
  },
  {
    question: 'আমাদের সংস্থায় স্বেচ্ছাসেবী হিসেবে কিভাবে যুক্ত হওয়া যায়?',
    answer: `আপনি আমাদের Contact page বা Volunteer form পূরণ করে স্বেচ্ছাসেবী হিসেবে যুক্ত হতে পারেন। 
    স্বেচ্ছাসেবীরা বিভিন্ন প্রকল্পে কাজ করতে পারেন, যেমন শিক্ষা, ত্রাণ বিতরণ, বা কমিউনিটি উন্নয়ন।`,
  },
  {
    question: 'আমাদের সংস্থার দীর্ঘমেয়াদি লক্ষ্য কী?',
    answer: `আমাদের দীর্ঘমেয়াদি লক্ষ্য হলো একটি স্বচ্ছ, মানবিক এবং সহানুভূতিশীল সমাজ গঠন। 
    যেখানে প্রতিটি মানুষ সম্মান, নিরাপত্তা এবং মৌলিক অধিকার সহ বাঁচতে পারবে। 
    আমরা ধারাবাহিকভাবে সমাজে ইতিবাচক পরিবর্তন আনতে কাজ করি।`,
  },
  {
    question: 'আমি কিভাবে সংস্থার কার্যক্রম সম্পর্কে আরও জানতে পারি?',
    answer: `আপনি আমাদের website এ "আমাদের কার্যক্রম" এবং "গ্যালারি" সেকশন দেখলে বিস্তারিত জানতে পারবেন। 
    এছাড়াও আমাদের নিউজলেটারে সাবস্ক্রাইব করলে নিয়মিত আপডেট, প্রতিবেদন এবং গুরুত্বপূর্ণ সংবাদ পাবেন।`,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-sky-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          সাধারণ প্রশ্নাবলী (FAQ)
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          এখানে আমরা আমাদের সংস্থা ও কার্যক্রম সম্পর্কিত গুরুত্বপূর্ণ প্রশ্নের উত্তর প্রদান করেছি। 
          আপনি সহজেই জানতে পারবেন আমাদের কাজ এবং দানের ব্যবহার সম্পর্কিত সব তথ্য।
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle size={22} className="text-sky-600 shrink-0" />
                  <span className="text-gray-800 font-semibold text-md">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-8 pb-5 text-gray-700 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
