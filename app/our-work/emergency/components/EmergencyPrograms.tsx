'use client';

import { motion } from "framer-motion";
import { Coffee, HeartHandshake, Droplet, ShieldPlus } from "lucide-react"; // Generic icons

export default function EmergencyPrograms() {

  const programs = [
    {
      icon: Coffee,
      title: "খাদ্য ও পানি বিতরণ",
      desc: "দুর্যোগের সময় মানুষদের নিরাপদ খাবার ও পানি পৌঁছে দেওয়া হয় যাতে তাদের মৌলিক চাহিদা পূরণ হয়।"
    },
    {
      icon: Droplet,
      title: "স্বাস্থ্য ও চিকিৎসা সহায়তা",
      desc: "জরুরি চিকিৎসা সরবরাহ করা হয় আহত বা অসুস্থদের জন্য, যাতে জীবন রক্ষা ও দ্রুত পুনরুদ্ধার সম্ভব হয়।"
    },
    {
      icon: ShieldPlus,
      title: "অস্থায়ী আশ্রয় প্রদান",
      desc: "যারা ঘর-বাড়ি হারিয়েছে, তাদের জন্য নিরাপদ অস্থায়ী আশ্রয় এবং সেবা প্রদান করা হয়।"
    },
    {
      icon: HeartHandshake,
      title: "সামাজিক ও মানসিক সহায়তা",
      desc: "জরুরি পরিস্থিতিতে মানুষদের মানসিক সাপোর্ট এবং সমাজিক সহায়তা নিশ্চিত করা হয়।"
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
            আমরা জরুরি ত্রাণে কী করি
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            আমরা প্রাকৃতিক দুর্যোগ, দুর্ঘটনা বা যেকোনো জরুরি পরিস্থিতিতে দ্রুত
            খাদ্য, পানি, আশ্রয় এবং চিকিৎসা সহায়তা পৌঁছে দিই, যাতে মানুষের জীবন নিরাপদ থাকে।
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {programs.map((item, i) => {
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