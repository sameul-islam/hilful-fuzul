'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, CheckCircle } from "lucide-react";

export default function DonationSection() {
  const amounts = [100, 500, 1000, 5000];

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [method, setMethod] = useState<"bkash" | "nagad" | null>(null);
  const [copied, setCopied] = useState(false);

  const bkashNumber = "013363-97653";
  const nagadNumber = "013363-97653";

  const handleCopy = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const finalAmount = customAmount ? Number(customAmount) : selectedAmount;

  return (
    <section id="donation" className="relative py-28 px-4 overflow-hidden bg-[#faf9f6]">

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-36 -right-36 w-125 h-125 rounded-full bg-amber-100/70 blur-3xl animate-blob" />
        <div className="absolute -bottom-28 -left-28 w-105 h-105 rounded-full bg-orange-100/50 blur-3xl animate-blob" />
      </div>

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle, #c0b090 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            আপনার দানের পরিমাণ নির্ধারণ করুন
          </h2>
          <p className="mt-4 text-gray-600">
            আপনি আপনার ইচ্ছামতো যেকোনো পরিমাণ দান করতে পারেন। নিচে বেছে নিন অথবা নিজের পরিমাণ লিখুন।
          </p>
        </motion.div>

        {/* Amount Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }}
              className={`py-4 rounded-2xl font-semibold border transition-all transform ${
                selectedAmount === amount
                  ? "bg-sky-700 text-white shadow-lg scale-105"
                  : "bg-white hover:border-sky-400 hover:shadow-sm"
              }`}
            >
              {amount}৳
            </button>
          ))}
        </motion.div>

        {/* Custom Amount */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 max-w-md mx-auto"
        >
          <input
            type="number"
            placeholder="অথবা নিজের পরিমাণ লিখুন"
            value={customAmount}
            onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
            className="w-full px-5 py-4 rounded-2xl border bg-white/60 backdrop-blur-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:shadow-lg transition-all duration-300"
          />
        </motion.div>

        {/* Payment Method */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            পেমেন্ট মাধ্যম নির্বাচন করুন
          </h3>

          <div className="flex justify-center gap-6">
            <button
              onClick={() => setMethod("bkash")}
              className={`px-6 py-3 rounded-full font-semibold border transition-all ${
                method === "bkash"
                  ? "bg-pink-500 text-white shadow-lg scale-105"
                  : "bg-white hover:border-pink-400 hover:shadow-sm"
              }`}
            >
              bKash
            </button>

            <button
              onClick={() => setMethod("nagad")}
              className={`px-6 py-3 rounded-full font-semibold border transition-all ${
                method === "nagad"
                  ? "bg-orange-600 text-white shadow-lg scale-105"
                  : "bg-white hover:border-orange-400 hover:shadow-sm"
              }`}
            >
              Nagad
            </button>
          </div>
        </motion.div>

        {/* Instruction Box */}
        <AnimatePresence>
          {method && finalAmount && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-14 relative bg-white/80 backdrop-blur-md border border-dashed border-sky-400 rounded p-8"
            >
              {/* Top Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-amber-400 via-orange-400 to-rose-400" />

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                কীভাবে দান করবেন
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                নিচের ধাপগুলো অনুসরণ করে আপনি খুব সহজেই দান করতে পারবেন।
              </p>

              <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <li><b>১.</b> আপনার {method === "bkash" ? "bKash" : "Nagad"} অ্যাপ খুলুন</li>
                <li><b>২.</b> <span className="font-bold text-sky-600">Send Money</span> নির্বাচন করুন</li>
                <li>
                  <b>৩.</b> এই নাম্বারে টাকা পাঠান:
                  <div className="flex items-center gap-3 mt-2">
                    <span className="font-bold text-lg">
                      {method === "bkash" ? bkashNumber : nagadNumber}
                    </span>
                    <button
                      onClick={() => handleCopy(method === "bkash" ? bkashNumber : nagadNumber)}
                      className="px-3 py-1 bg-white/70 hover:bg-white rounded-lg border border-gray-200 flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copy
                    </button>
                    {copied && <span className="items-center flex gap-1"><CheckCircle className="text-green-500 w-4 h-4" /> <p className="text-green-500">Copied</p></span> }
                  </div>
                </li>
                <li><b>৪.</b> Amount দিন: <span className="font-bold text-sky-600">{finalAmount}৳</span></li>
                <li><b>৫.</b> Reference-এ লিখুন: <span className="font-bold text-red-500">DONATE</span></li>
                <li><b>৬.</b> Transaction ID সংরক্ষণ করুন</li>
              </ul>

              <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-sm">
                ⚠️ গুরুত্বপূর্ণ: ভুল নাম্বারে টাকা পাঠাবেন না। নিশ্চিত হয়ে তারপর পাঠান।
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}