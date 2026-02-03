// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import heroImage from '@/public/hero-image.jpg';
// import { HeartPulse, Sparkles } from 'lucide-react';
// import Link from 'next/link';

// const Hero = () => {
//   return (
//     <section className="relative w-full min-h-screen bg-linear-to-b from-sky-100 to-sky-200 flex items-center justify-center overflow-hidden">
//       <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
//         {/* Left Content */}
//         <div className="flex-1 text-center lg:text-left space-y-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
//           >
//             Empowering Lives, One Heart at a Time 💙
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-gray-600 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0"
//           >
//             Join us in bringing hope, care, and support to those who need it most.
//             Every donation changes a life.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
//           >
//             <Link
//               href="/donation"
//               className="relative flex items-center gap-3 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-sky-500/30 hover:shadow-xl transition-all duration-500 text-lg"
//             >
//               <HeartPulse size={20} className="text-white/90" />
//               Donate Now
//               <Sparkles size={18} className="animate-pulse" />
//             </Link>

//             <Link
//               href="/about"
//               className="text-sky-700 hover:text-sky-900 font-semibold text-lg transition-colors duration-300"
//             >
//               Learn More
//             </Link>
//           </motion.div>
//         </div>

//         {/* Right Illustration */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="flex-1 flex justify-center lg:justify-end"
//         >
//           <Image
//             src={heroImage}
//             alt="Helping hands illustration"
//             className="max-w-full lg:max-w-2xl rounded-xl shadow-2xl"
//           />
//         </motion.div>

//       </div>

//       {/* Background Sparkles */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.2 }}
//         className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-sky-100 via-sky-200 to-transparent pointer-events-none"
//       />
//     </section>
//   );
// };

// export default Hero;












'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import heroImg from '@/public/hero-image.jpg';
import Link from 'next/link';
import { HeartPulse, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] xl:h-[85vh]  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center  h-full max-w-7xl mx-auto px-6 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-Outfit font-semibold leading-tight">
            এক হৃদয়ে , এক পরিবর্তন আনুন
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl font-Karla font-semibold text-white/90">
            সুবিধাবঞ্চিতদের ক্ষমতায়ন, আশা ছড়িয়ে দেওয়া এবং জীবন পরিবর্তনে আমাদের সাথে যোগ দিন।
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 justify-center"
          >
            <Link
              href="/donation"
              className="relative flex items-center gap-3 bg-sky-600 hover:bg-sky-700 px-8 py-4 font-semibold shadow-lg shadow-sky-500/30 hover:shadow-xl transition-all duration-500"
            >
              <HeartPulse size={20} className="text-white/90 animate-bounce" />
              Donate Now
              <Sparkles size={18} className="animate-pulse" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
