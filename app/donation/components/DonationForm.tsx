'use client';

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Send, CheckCircle, AlertCircle, User, Phone,
  Mail, BadgeDollarSign, Hash, MessageSquare, Heart, ShieldCheck
} from "lucide-react";

// Field config 
const fields = [
  {
    id: "from_name", label: "আপনার নাম", type: "text",
    name: "from_name", placeholder: "আপনার নাম লিখুন", required: true,
    icon: <User className="w-4 h-4" />,
  },
  {
    id: "phone", label: "মোবাইল নাম্বার", type: "tel",
    name: "phone", placeholder: "01XXXXXXXXX", required: true,
    icon: <Phone className="w-4 h-4" />,
  },
  {
    id: "from_email", label: "ইমেইল", type: "email",
    name: "from_email", placeholder: "example@gmail.com", required: false,
    badge: "ঐচ্ছিক",
    icon: <Mail className="w-4 h-4" />,
  },
  {
    id: "amount", label: "দানের পরিমাণ", type: "number",
    name: "amount", placeholder: "যে পরিমাণ পাঠিয়েছেন (৳)", required: true,
    icon: <BadgeDollarSign className="w-4 h-4" />,
  },
  {
    id: "transaction_id", label: "Transaction ID", type: "text",
    name: "transaction_id", placeholder: "যেমন: 8AB123XYZ", required: true,
    icon: <Hash className="w-4 h-4" />,
  },
];

export default function DonationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    setStatus("");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_DONATION!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full relative z-0 pl-11 pr-5 py-4 rounded-2xl border bg-white/60 backdrop-blur-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 text-sm font-medium";

  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#faf9f6]">

      {/* ── Decorative blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-36 -right-36 w-125 h-125 rounded-full bg-amber-100/70 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 w-105 h-105 rounded-full bg-orange-100/50 blur-3xl" />
      </div>

      {/* ── Dot-grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, #c0b090 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-2xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-5 border border-amber-200/80">
            <Heart className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            দান নিশ্চিত করুন
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            আপনার দানের
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-orange-500 to-rose-500">
              তথ্য জমা দিন
            </span>
          </h2>
          <p className="mt-5 text-gray-500 text-base leading-relaxed">
            টাকা পাঠানোর পর নিচের ফর্মটি পূরণ করুন —
            আমরা আপনার দান যাচাই করে নিশ্চিত করব।
          </p>
        </motion.div>

        {/* ── Form card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative rounded bg-white/80 backdrop-blur-md border border-gray-200 p-8 md:p-10 overflow-hidden"
        >

          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-amber-400 via-orange-400 to-rose-400" />

          {/* Inner glow */}
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-50/80 blur-2xl pointer-events-none" />

          <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-5">

            {/* ── Regular fields ── */}
            {fields.map((field, i) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-gray-800 tracking-wider uppercase">
                    {field.label}
                  </label>
                  {field.badge && (
                    <span className="text-[10px] font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                      {field.badge}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <span className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 pointer-events-none z-10 ${
                    focused === field.id ? "text-amber-500" : "text-gray-700"
                  }`}>
                    {field.icon}
                  </span>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    onFocus={() => setFocused(field.id)}
                    onBlur={() => setFocused(null)}
                    className={`${inputBase} ${
                      focused === field.id
                        ? "border-amber-400 ring-4 ring-amber-100/80 shadow-sm"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  />
                </div>
              </motion.div>
            ))}

            {/* ── Message textarea ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: fields.length * 0.07 }}
            >
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-amber-950 tracking-wider uppercase">
                  অতিরিক্ত বার্তা
                </label>
                <span className="text-[10px] font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                  ঐচ্ছিক
                </span>
              </div>
              <div className="relative">
                <span className={`absolute left-4 top-4 transition-colors duration-300 pointer-events-none z-10 ${
                  focused === "message" ? "text-amber-500" : "text-gray-600"
                }`}>
                  <MessageSquare className="w-4 h-4" />
                </span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="আপনি চাইলে কিছু লিখতে পারেন..."
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`${inputBase} pl-11 resize-none ${
                    focused === "message"
                      ? "border-amber-400 ring-4 ring-amber-100/80 shadow-sm"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                />
              </div>
            </motion.div>

            {/* ── Divider ── */}
            <div className="border-t border-gray-100 pt-1" />

            {/* ── Submit ── */}
            <button
              type="submit"
              disabled={loading}
              className="group w-full relative overflow-hidden py-4 bg-linear-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-bold rounded-br-4xl rounded-tl-4xl shadow-lg hover:shadow-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-sm tracking-wide"
            >
              {/* Shimmer */}
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  পাঠানো হচ্ছে...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  দান নিশ্চিত করুন
                </>
              )}
            </button>

            {/* ── Status ── */}
            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className={`flex items-start gap-3 rounded-2xl px-5 py-4 text-sm font-medium border ${
                    status === "success"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-rose-50 text-rose-700 border-rose-200"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0 text-emerald-500 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-500 mt-0.5" />
                  )}
                  <span>
                    {status === "success"
                      ? "আপনার তথ্য সফলভাবে জমা হয়েছে! আমরা শীঘ্রই যাচাই করে আপনাকে জানাব। ধন্যবাদ 💚"
                      : "কিছু সমস্যা হয়েছে। একটু পরে আবার চেষ্টা করুন।"}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Trust note ── */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <ShieldCheck className="w-4 h-4 text-gray-400" />
              <p className="text-xs text-gray-600 text-center">
                আপনার তথ্য সম্পূর্ণ সুরক্ষিত এবং শুধুমাত্র দান যাচাইয়ের কাজে ব্যবহৃত হবে।
              </p>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
