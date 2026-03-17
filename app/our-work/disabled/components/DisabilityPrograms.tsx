'use client';

import { motion } from "framer-motion";

export default function DisabilityPrograms() {

  const programs = [
    {
      title: "মাসিক সহায়তা কর্মসূচি",
      desc: "প্রতিবন্ধী ব্যক্তিদের নিয়মিত মাসিক সহায়তা প্রদান করা হয় যাতে তারা খাদ্য, চিকিৎসা এবং অন্যান্য মৌলিক চাহিদা পূরণ করতে পারে।",
      image: "/images/what-we-do/disability-program 1.jpg"
    },
    {
      title: "চিকিৎসা ও সহায়ক উপকরণ",
      desc: "হুইলচেয়ার, কৃত্রিম অঙ্গ এবং অন্যান্য সহায়ক উপকরণ প্রদান করা হয় যাতে তারা দৈনন্দিন জীবন সহজভাবে পরিচালনা করতে পারে।",
      image: "/images/what-we-do/disability-program 2.jpg"
    },
    {
      title: "সামাজিক ও পুনর্বাসন সহায়তা",
      desc: "প্রতিবন্ধী ব্যক্তিদের সমাজে অন্তর্ভুক্ত করার জন্য বিভিন্ন কার্যক্রম ও পুনর্বাসন সহায়তা প্রদান করা হয় যাতে তারা স্বাভাবিক জীবনে ফিরে আসতে পারে।",
      image: "/images/what-we-do/disability-program 3.jpg"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">

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
            আমাদের সহায়তা কার্যক্রম
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            প্রতিবন্ধী মানুষের জীবনে ইতিবাচক পরিবর্তন আনার জন্য আমরা বিভিন্ন
            সহায়তা কার্যক্রম পরিচালনা করি। এই উদ্যোগগুলোর মাধ্যমে
            তাদের চিকিৎসা, সহায়ক উপকরণ এবং সামাজিক অন্তর্ভুক্তি নিশ্চিত করার চেষ্টা করা হয়।
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {programs.map((item, i) => (
            <motion.div
              key={i}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition bg-white"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}