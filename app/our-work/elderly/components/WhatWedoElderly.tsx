'use client';

import { motion } from "framer-motion";
import { BookOpen, HeartHandshake, Apple, ShieldPlus } from "lucide-react";

export default function WhatWeDoElderly() {
  const services = [
    {
      icon: BookOpen,
      title: "জ্ঞান ও শিক্ষামূলক সহায়তা",
      desc: "বয়স্ক মানুষদের জীবনকে সহজ করতে এবং মানসিকভাবে সক্রিয় রাখতে বিভিন্ন শিক্ষামূলক কার্যক্রম, কর্মশালা এবং উপকরণ প্রদান করা হয়।"
    },
    {
      icon: Apple,
      title: "খাদ্য ও পুষ্টি সহায়তা",
      desc: "নিয়মিত খাদ্য সহায়তার মাধ্যমে বয়স্ক মানুষদের সুস্থতা বজায় রাখা হয় এবং তাদের পুষ্টিকর খাদ্য নিশ্চিত করা হয়।"
    },
    {
      icon: ShieldPlus,
      title: "স্বাস্থ্য ও চিকিৎসা সহায়তা",
      desc: "বয়স্ক মানুষদের জন্য প্রয়োজনীয় চিকিৎসা, স্বাস্থ্য পরীক্ষা এবং ওষুধ সরবরাহ করা হয় যাতে তারা নিরাপদ ও সুস্থ জীবন যাপন করতে পারে।"
    },
    {
      icon: HeartHandshake,
      title: "মানসিক ও সামাজিক সহায়তা",
      desc: "বয়স্ক মানুষদের মানসিক স্বস্তি ও সামাজিক সংযোগ বজায় রাখতে বিভিন্ন কার্যক্রম ও কমিউনিটি প্রোগ্রাম পরিচালনা করা হয়।"
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
            আমরা বয়স্ক মানুষের জন্য কী করি
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            আমাদের লক্ষ্য হলো বয়স্ক মানুষদের এমন সহায়তা প্রদান করা যাতে
            তারা স্বাস্থ্য, নিরাপত্তা এবং মানসিক শান্তির মাধ্যমে
            একটি মানসম্মত জীবন যাপন করতে পারে।
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