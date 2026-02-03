import { motion } from "framer-motion";
import {
  HeartHandshake,
  Users,
  ShieldCheck,
  HandCoins,
} from "lucide-react";

const items = [
  {
    icon: HeartHandshake,
    title: "সকলের জন্য মানবিক সহায়তা",
    description:
      "আমরা বিধবা, এতিম, অসুস্থ, বয়স্ক এবং সংকটে থাকা পরিবারগুলির - যেকোনও বিপদের মুখোমুখি সকলের পাশে দাঁড়িয়েছি - কোনও সীমাবদ্ধতা বা বৈষম্য ছাড়াই।",
  },
  {
    icon: HandCoins,
    title: "যাকাত, সাদাকাহ এবং জরুরী সাহায্য",
    description:
      "ফরজ যাকাত থেকে শুরু করে স্বেচ্ছায় সাদাকা এবং জরুরি ত্রাণ, আমরা নিশ্চিত করি যে আপনার অনুদান তাদের কাছে পৌঁছায় যাদের সবচেয়ে বেশি প্রয়োজন, দায়িত্বশীল এবং নীতিগতভাবে।",
  },
  {
    icon: Users,
    title: "সম্প্রদায়-ভিত্তিক এবং স্বেচ্ছাসেবক চালিত",
    description:
      "স্থানীয় সম্প্রদায় দ্বারা নির্মিত এবং পরিচালিত, আমাদের কাজটি মর্যাদার সাথে মানবতার সেবা করার জন্য প্রতিশ্রুতিবদ্ধ আন্তরিক স্বেচ্ছাসেবকদের দ্বারা পরিচালিত।",
  },
  {
    icon: ShieldCheck,
    title: "আস্থা, স্বচ্ছতা এবং জবাবদিহিতা",
    description:
      "আমরা প্রতিটি কাজে সততা এবং স্বচ্ছতাকে অগ্রাধিকার দিই, যাতে দাতারা আত্মবিশ্বাস এবং মানসিক প্রশান্তি সহকারে দান করতে পারেন।",
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-semibold font-Karla tracking-tight text-slate-900 sm:text-3xl">
            বিশ্বাস ও দায়িত্বের উপর নির্মিত একটি মানবিক সংস্থা
          </h2>
          <p className="mt-4 font-Outfit text-slate-700 lg:text-lg">
           হিলফুল ফুজুল সকল ধরণের কষ্টে মানুষকে সহায়তা করার জন্য বিদ্যমান — সামাজিক, আর্থিক, চিকিৎসা এবং জরুরি পরিস্থিতিতে — যখন করুণা, ন্যায়বিচার এবং সম্মিলিত দায়িত্বের ইসলামী মূল্যবোধকে সমুন্নত রাখে।
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-slate-200 md:border-slate-100 bg-sky-50 md:bg-sky-50/40 p-6 transition hover:border-sky-200 hover:bg-sky-50"
              >
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded bg-sky-100 text-sky-600 border border-sky-200">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg text-center font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-center leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
