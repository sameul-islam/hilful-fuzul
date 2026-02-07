'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const incomeItems = [
  'দানকারী ব্যক্তি ও পরিবার',
  'স্থানীয় কমিউনিটি সমর্থন',
  'অনলাইন ক্যাম্পেইন ও ফান্ডরাইজিং',
  'কর্পোরেট স্পনসরশিপ',
  'অন্যান্য উৎস থেকে দান',
];

const expenseItems = [
  'জরুরি ত্রাণ কার্যক্রম',
  'শিক্ষা ও স্বাস্থ্য সহায়তা',
  'প্রশিক্ষণ ও কমিউনিটি উন্নয়ন',
  'প্রশাসনিক ব্যয় ও লগিস্টিকস',
  'উন্নয়নমূলক প্রকল্প বাস্তবায়ন',
];

export default function IncomeExpenseList() {
  const [active, setActive] = useState<'income' | 'expense'>('income');
  const items = active === 'income' ? incomeItems : expenseItems;

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          আমাদের আয় ও ব্যয়
        </motion.h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          স্বচ্ছতা আমাদের মূল নীতি। এখানে দেখানো হলো আমরা কোন কোন ক্ষেত্রে আয় করি এবং কোথায় ব্যয় করি।
        </p>

        {/* Toggle Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {[
            { key: 'income', label: 'আয়' },
            { key: 'expense', label: 'ব্যয়' },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActive(btn.key as 'income' | 'expense')}
              className={`px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300
                ${
                  active === btn.key
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/30'
                    : 'bg-white text-gray-700 hover:bg-sky-100'
                }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* List Content */}
        <div className="mt-10 max-w-3xl mx-auto text-left">
          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {items.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-sky-50 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <CheckCircle size={22} className="text-sky-600 shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
