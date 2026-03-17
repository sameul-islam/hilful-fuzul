'use client';

import { motion } from "framer-motion";
import Image from 'next/image';

interface ImpactItem {
  title: string;
  desc: string;
  image: string;
}

export default function EmergencyImpactSection() {
  const impacts: ImpactItem[] = [
    {
      title: "খাদ্য সহায়তা",
      desc: "আপনার সহায়তার মাধ্যমে দুর্যোগের সময় মানুষকে নিরাপদ খাবার দেওয়া হয়।",
      image: "/images/what-we-do/emergency-program 1.jpg"
    },
    {
      title: "পানি ও স্বাস্থ্য",
      desc: "পরিষ্কার পানি ও প্রাথমিক স্বাস্থ্য সহায়তা পৌঁছে দেওয়া হয়।",
      image: "/images/what-we-do/emergency-program 2.jpg"
    },
    {
      title: "অস্থায়ী আশ্রয়",
      desc: "যারা তাদের বাড়ি হারিয়েছে, তাদের জন্য নিরাপদ আশ্রয় নিশ্চিত করা হয়।",
      image: "/images/what-we-do/emergency-program 3.webp"
    },
    {
      title: "মানসিক ও সামাজিক সহায়তা",
      desc: "জরুরি পরিস্থিতিতে মানুষদের মানসিক সহায়তা ও পুনর্বাসন নিশ্চিত করা হয়।",
      image: "/images/what-we-do/emergency-program 4.jpg"
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
            আপনার সহায়তা কেমন প্রভাব ফেলে
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            এই কার্যক্রমের মাধ্যমে মানুষের জীবন রক্ষা ও উন্নয়নে গুরুত্বপূর্ণ অবদান রাখে।
            প্রতিটি সহায়তা দ্রুত এবং কার্যকরভাবে প্রয়োগ করা হয়।
          </p>
        </motion.div>

        {/* Impact Cards with Images */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration:0.1 }}
              className="group bg-sky-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  loading='lazy'
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}