"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    // backend পরে যুক্ত হবে
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-sky-500 border border-sky-800 border-dashed px-6 py-10 md:px-10 md:py-12 text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            আমাদের সঙ্গে যুক্ত থাকুন
          </h2>

          <p className="mt-3 text-white/90 max-w-xl mx-auto leading-relaxed">
            আমাদের কার্যক্রম, মানবিক উদ্যোগ এবং গুরুত্বপূর্ণ আপডেট নিয়মিত জানতে
            ইমেইলের মাধ্যমে আমাদের সাথে থাকুন।
          </p>

          <form
            onSubmit={submit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="আপনার ইমেইল ঠিকানা"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-gray-50 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gray-50 focus:border-white"
            />

            <button
              type="submit"
              className=" bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              সাবস্ক্রাইব
            </button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-sm text-black">
              ধন্যবাদ! আপনি সফলভাবে আমাদের সাথে যুক্ত হয়েছেন।
            </p>
          )}

          <p className="mt-6 text-xs text-gray-50">
            আমরা কখনোই আপনার ইমেইল অন্য কারো সাথে শেয়ার করবো না।
          </p>
        </div>
      </div>
    </section>
  );
}
