'use client';

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, Heart } from "lucide-react";

export default function ContactSection() {
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
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
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

  const contactItems = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "ঠিকানা",
      value: "হিলফুল-ফুজুল অফিস কার্যালয়",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "ফোন",
      value: "+880 1336-397653",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "ইমেইল",
      value: "hilfulfuzul154@gmail.com",
    },
  ];

  const inputBase =
    "w-full bg-white/70 backdrop-blur-sm border rounded-2xl px-5 py-4 text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 text-sm font-medium";

  return (
    <section className="relative min-h-screen py-28 px-4 overflow-hidden bg-[#f5f3ef]">

      {/* ── Decorative background blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-amber-100/60 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-105 h-105 rounded-full bg-teal-100/50 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 rounded-full bg-rose-50/40 blur-3xl" />
      </div>

      {/* ── Dot-grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #b0b0b0 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5 border border-amber-200/80">
            <Heart className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            যোগাযোগ করুন
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
            আমরা সব সময়
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-orange-500 to-rose-500">
              আপনার পাশে আছি
            </span>
          </h2>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            যেকোনো প্রশ্ন, পরামর্শ বা সহযোগিতার জন্য নির্দ্বিধায় আমাদের সাথে যোগাযোগ করুন।
          </p>
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* ── LEFT: Info + Map (2/5) ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-2 space-y-6"
          >

            {/* Contact cards */}
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex items-start gap-4 bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-md">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-800 leading-snug">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-xl border-4 border-white/80 ring-1 ring-gray-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.8002920256004!2d89.17143307603689!3d23.395440902309513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fee329365f3265%3A0xf655ec80054b140d!2z4KaJ4Kak4KeN4Kak4KawIOCmquCmvuCmoeCmvOCmviDgppzgpr7gpq7gp4cg4Kau4Ka44Kac4Ka_4Kam!5e0!3m2!1sbn!2sbd!4v1773839286189!5m2!1sbn!2sbd"
                className="w-full h-60 md:h-72 border-0"
                loading="lazy"
                title="Office Location"
              />
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Contact Form (3/5) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className="relative bg-white/80 backdrop-blur-md border border-white/70 rounded-4xl shadow-2xl p-8 md:p-10 overflow-hidden">

              {/* Form card top accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-amber-400 via-orange-400 to-rose-400 rounded-t-4xl" />

              {/* Decorative circle inside card */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-50/60 blur-2xl pointer-events-none" />

              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  বার্তা পাঠান
                </h3>
                <p className="text-sm text-gray-500 mb-8">
                  ফর্মটি পূরণ করুন, আমরা যত শীঘ্র সম্ভব জবাব দেব।
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

                  {/* Name */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-gray-500 tracking-wide uppercase mb-2">
                      আপনার নাম
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="যেমন: আব্দুল করিম"
                      required
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} ${
                        focused === "name"
                          ? "border-amber-400 ring-4 ring-amber-100 shadow-sm"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-gray-500 tracking-wide uppercase mb-2">
                      ইমেইল ঠিকানা
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="example@gmail.com"
                      required
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} ${
                        focused === "email"
                          ? "border-amber-400 ring-4 ring-amber-100 shadow-sm"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-gray-500 tracking-wide uppercase mb-2">
                      বিষয়
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="বার্তার বিষয় লিখুন"
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} ${
                        focused === "subject"
                          ? "border-amber-400 ring-4 ring-amber-100 shadow-sm"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-gray-500 tracking-wide uppercase mb-2">
                      আপনার বার্তা
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="বিস্তারিত লিখুন..."
                      required
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} resize-none ${
                        focused === "message"
                          ? "border-amber-400 ring-4 ring-amber-100 shadow-sm"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full relative overflow-hidden py-4 bg-linear-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-sm tracking-wide"
                  >
                    {/* shimmer */}
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
                        বার্তা পাঠান
                      </>
                    )}
                  </button>

                  {/* Status */}
                  <AnimatePresence>
                    {status && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className={`flex items-center gap-3 rounded-2xl px-5 py-4 text-sm font-medium ${
                          status === "success"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-rose-50 text-rose-700 border border-rose-200"
                        }`}
                      >
                        {status === "success" ? (
                          <CheckCircle className="w-5 h-5 shrink-0 text-emerald-500" />
                        ) : (
                          <AlertCircle className="w-5 h-5 shrink-0 text-rose-500" />
                        )}
                        {status === "success"
                          ? "আপনার বার্তা সফলভাবে পাঠানো হয়েছে! ধন্যবাদ।"
                          : "বার্তা পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।"}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}