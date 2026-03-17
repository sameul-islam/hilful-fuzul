'use client';

import { motion } from "framer-motion";
import { BookOpen, HeartHandshake, Apple, ShieldPlus } from "lucide-react";

export default function WhatWeDoDisability() {
  const services = [
    {
      icon: BookOpen,
      title: "শিক্ষা ও দক্ষতা উন্নয়ন",
      desc: "প্রতিবন্ধী ব্যক্তিদের জন্য উপযোগী শিক্ষা এবং দক্ষতা উন্নয়নমূলক প্রশিক্ষণের মাধ্যমে তাদের স্বনির্ভর হতে সহায়তা করা হয়।"
    },
    {
      icon: Apple,
      title: "দৈনন্দিন সহায়তা",
      desc: "প্রয়োজনীয় খাদ্য ও দৈনন্দিন সহায়তার মাধ্যমে তাদের জীবনযাত্রাকে সহজ ও নিরাপদ করার চেষ্টা করা হয়।"
    },
    {
      icon: ShieldPlus,
      title: "চিকিৎসা ও থেরাপি সহায়তা",
      desc: "প্রতিবন্ধী ব্যক্তিদের জন্য চিকিৎসা, থেরাপি এবং প্রয়োজনীয় স্বাস্থ্য সহায়তা প্রদান করা হয় যাতে তারা সুস্থ জীবনযাপন করতে পারে।"
    },
    {
      icon: HeartHandshake,
      title: "সামাজিক ও মানসিক সহায়তা",
      desc: "তাদের আত্মবিশ্বাস বৃদ্ধি এবং সমাজে অন্তর্ভুক্ত করার জন্য বিভিন্ন সামাজিক ও মানসিক সহায়তা প্রদান করা হয়।"
    }
  ];

  return (
    <section className="py-24 px-4 bg-sky-50/40">

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            আমরা প্রতিবন্ধী মানুষের জন্য কী করি
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            আমাদের লক্ষ্য হলো প্রতিবন্ধী মানুষদের এমন সহায়তা প্রদান করা
            যাতে তারা শিক্ষা, চিকিৎসা এবং সামাজিক সহযোগিতার মাধ্যমে
            একটি সম্মানজনক জীবনের দিকে এগিয়ে যেতে পারে।
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ duration:0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition duration-300"
              >

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-sky-100 text-sky-600 mb-6 group-hover:scale-110 transition">
                  <Icon size={28}/>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}