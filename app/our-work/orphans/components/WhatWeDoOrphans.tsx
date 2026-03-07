'use client';

import { motion } from "framer-motion";
import { BookOpen, HeartHandshake, Apple, ShieldPlus } from "lucide-react";

export default function WhatWeDoOrphans() {
  const services = [
    {
      icon: BookOpen,
      title: "শিক্ষা সহায়তা",
      desc: "এতিম শিশুদের স্কুলে ভর্তি, বই, খাতা এবং অন্যান্য শিক্ষা উপকরণ দিয়ে তাদের পড়াশোনা চালিয়ে যেতে সহায়তা করা হয়।"
    },
    {
      icon: Apple,
      title: "খাদ্য সহায়তা",
      desc: "নিয়মিত খাদ্য সহায়তার মাধ্যমে শিশুদের পুষ্টি নিশ্চিত করার চেষ্টা করা হয় যাতে তারা সুস্থভাবে বেড়ে উঠতে পারে।"
    },
    {
      icon: ShieldPlus,
      title: "চিকিৎসা সহায়তা",
      desc: "অসুস্থ শিশুদের জন্য প্রয়োজনীয় চিকিৎসা এবং স্বাস্থ্য সহায়তা প্রদান করা হয় যাতে তারা নিরাপদ ও সুস্থ জীবন পায়।"
    },
    {
      icon: HeartHandshake,
      title: "মানসিক ও সামাজিক সহায়তা",
      desc: "শিশুদের আত্মবিশ্বাস ও মানসিক উন্নয়নের জন্য বিভিন্ন কার্যক্রম পরিচালনা করা হয় যাতে তারা স্বাভাবিক জীবনে এগিয়ে যেতে পারে।"
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
            আমরা এতিম শিশুদের জন্য কী করি
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            আমাদের লক্ষ্য হলো এতিম শিশুদের এমন সহায়তা প্রদান করা
            যাতে তারা শিক্ষা, স্বাস্থ্য এবং নিরাপত্তার মাধ্যমে
            একটি সুন্দর ভবিষ্যতের দিকে এগিয়ে যেতে পারে।
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
                className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition"
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