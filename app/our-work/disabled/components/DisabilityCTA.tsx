// 'use client';

// import { motion } from "framer-motion";

// export default function DisabilityCTA() {
//   return (
//     <section className="py-24 px-4 bg-linear-to-r from-sky-600 to-sky-500 text-white">

//       <div className="max-w-7xl mx-auto">

//         <div className="relative overflow-hidden rounded-3xl px-8 py-12 md:px-14 md:py-16 bg-white/10 backdrop-blur-sm border border-white/20">

//           {/* subtle background decoration */}
//           <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

//           <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-10">

//             {/* LEFT CONTENT */}
//             <motion.div
//               initial={{ opacity:0, y:20 }}
//               whileInView={{ opacity:1, y:0 }}
//               viewport={{ once:true }}
//               transition={{ duration:0.6 }}
//               className="text-center md:text-left max-w-2xl"
//             >
//               <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight">
//                 
//               </h2>

//               <p className="mt-4 text-sky-100 leading-relaxed">
//                 আপনার সামান্য সহযোগিতাও একজন প্রতিবন্ধী মানুষের জীবনে
//                 সহায়তা, সম্মান এবং নতুন সম্ভাবনার দ্বার খুলে দিতে পারে।
//                 আমাদের সাথে যুক্ত হয়ে মানবিক সহায়তার এই যাত্রার অংশ হোন।
//               </p>
//             </motion.div>

//             {/* RIGHT BUTTONS */}
//             <motion.div
//               initial={{ opacity:0, scale:0.9 }}
//               whileInView={{ opacity:1, scale:1 }}
//               viewport={{ once:true }}
//               transition={{ duration:0.6 }}
//               className="flex flex-col sm:flex-row gap-4"
//             >

//               <a
//                 href="/donate"
//                 className="px-8 py-4 text-center bg-white text-sky-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition"
//               >
//                 দান করুন
//               </a>

//               <a
//                 href="/contact"
//                 className="px-8 py-4 text-center border border-white text-white font-semibold rounded-full hover:bg-white/10 transition"
//               >
//                 যোগাযোগ করুন
//               </a>

//             </motion.div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }






'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import ctaDecor from '@/public/cta-decor.jpg';

export default function EmergencyCTA() {
  return (
    <section className="relative py-18 px-4 bg-sky-50/30">

      <div className="max-w-7xl mx-auto">

        {/* CTA Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-14 md:py-20 bg-white/80 backdrop-blur-sm border border-white/20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg"
        >

          {/* Decorative Image */}
          <div className="absolute w-full h-full left-0 top-0 bottom-0 right-0 opacity-20">
            <Image
              src={ctaDecor}
              alt="Decorative"
              className="object-cover"
              fill
              loading="lazy"
            />
          </div>

          {/* LEFT TEXT */}
          <div className="text-center md:text-left max-w-2xl z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              একটি প্রতিবন্ধী মানুষের জীবন বদলে দিতে পারেন আপনিও
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
               আপনার সামান্য সহযোগিতাও একজন প্রতিবন্ধী মানুষের জীবনে
                সহায়তা, সম্মান এবং নতুন সম্ভাবনার দ্বার খুলে দিতে পারে।
              আমাদের সাথে যুক্ত হয়ে মানবিক সহায়তার এই যাত্রার অংশ হোন।
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 z-10">
            <a
              href="/donate"
              className="px-8 py-4 text-center bg-sky-600 text-white font-semibold rounded-full shadow-lg hover:bg-sky-700 transition transform hover:-translate-y-1"
            >
              দান করুন
            </a>

            <a
              href="/contact"
              className="px-8 py-4 text-center border border-sky-600 text-sky-600 font-semibold rounded-full hover:bg-sky-100 transition transform hover:-translate-y-1"
            >
              যোগাযোগ করুন
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}