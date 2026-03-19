'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Info } from "lucide-react";

export default function ZakatCalculator() {
  const [savings, setSavings] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [property, setProperty] = useState("");
  const [zakatAmount, setZakatAmount] = useState<number | null>(null);

  const handleCalculate = () => {
    const total =
      (Number(savings) || 0) +
      (Number(gold) || 0) +
      (Number(silver) || 0) +
      (Number(property) || 0);
    const zakat = total * 0.025; // 2.5%
    setZakatAmount(Number(zakat.toFixed(2)));
  };

  return (
    <section id="calculator" className="relative py-24 px-4 bg-gray-50 overflow-hidden">

      {/* Decorative Blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative max-w-3xl mx-auto text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            আপনার যাকাত হিসাব করুন
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            আপনার সম্পদ অনুযায়ী ২.৫% হিসাব করে সহজেই যাকাত নির্ধারণ করুন।
          </p>
        </motion.div>

        {/* Input Fields */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
        >
          <input
            type="number"
            placeholder="সঞ্চয় (৳)"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
            className="w-full px-5 py-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm bg-white/60 backdrop-blur-sm"
          />
          <input
            type="number"
            placeholder="সোনা (৳)"
            value={gold}
            onChange={(e) => setGold(e.target.value)}
            className="w-full px-5 py-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm bg-white/60 backdrop-blur-sm"
          />
          <input
            type="number"
            placeholder="রূপা (৳) "
            value={silver}
            onChange={(e) => setSilver(e.target.value)}
            className="w-full px-5 py-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm bg-white/60 backdrop-blur-sm"
          />
          <input
            type="number"
            placeholder="সম্পত্তি / ব্যবসা (৳)"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
            className="w-full px-5 py-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm bg-white/60 backdrop-blur-sm"
          />
        </motion.div>

        {/* Calculate Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={handleCalculate}
          className="w-full md:w-1/2 mx-auto py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-3xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
        >
          <Calculator className="w-5 h-5" />
          হিসাব করুন
        </motion.button>

        {/* Result */}
        {zakatAmount !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 p-6 bg-white/70 backdrop-blur-md rounded-3xl shadow-lg text-center text-gray-900"
          >
            <p className="text-lg font-semibold">আপনার যাকাতের পরিমাণ হলো:</p>
            <p className="text-3xl font-extrabold text-amber-500 mt-2">{zakatAmount}৳</p>
            <p className="text-sm text-gray-700 mt-2">এই পরিমাণ আপনি আমাদের donation form এ ব্যবহার করতে পারেন।</p>
          </motion.div>
        )}

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600"
        >
          <Info className="w-4 h-4" />
          <span>এই ক্যালকুলেটর আনুমানিক হিসাব দেয়, নিশ্চিত পরিমাণ যাচাই করুন।</span>
        </motion.div>

      </div>

    </section>
  );
}