"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-sky-100 border-t border-sky-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={logo}
                alt="Hilful Fuzul"
                width={48}
                height={48}
                className="rounded-full ring-2 ring-sky-400"
              />
              <h3 className="text-lg font-Outfit font-semibold text-gray-800">
                Hilful Fuzul
              </h3>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              মানবিকতা, দায়িত্ব এবং স্বচ্ছতার সাথে আমরা সমাজের অসহায় মানুষের
              পাশে দাঁড়াতে প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">
              নেভিগেশন
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-sky-700">হোম</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-sky-700">আমাদের সম্পর্কে</Link></li>
              <li><Link href="/galary" className="text-gray-600 hover:text-sky-700">গ্যালারি</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-sky-700">যোগাযোগ</Link></li>
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">
              আমাদের কাজ
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/our-work/orphans" className="text-gray-600 hover:text-sky-700">এতিমদের সহায়তা</Link></li>
              <li><Link href="/our-work/disabled" className="text-gray-600 hover:text-sky-700">প্রতিবন্ধী সেবা</Link></li>
              <li><Link href="/our-work/elderly" className="text-gray-600 hover:text-sky-700">বয়স্কদের সহায়তা</Link></li>
              <li><Link href="/our-work/emergency" className="text-gray-600 hover:text-sky-700">জরুরি ত্রাণ</Link></li>
            </ul>
          </div>

          {/* Zakat */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">
              যাকাত ও সাদাকাহ
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/zakat" className="text-gray-600 hover:text-sky-700">যাকাত</Link></li>
              <li><Link href="/sadaqah" className="text-gray-600 hover:text-sky-700">সাদাকাহ</Link></li>
              <li><Link href="/fidya" className="text-gray-600 hover:text-sky-700">ফিতরা ও কাফফারা</Link></li>
              <li>
                <Link
                  href="/donation"
                  className="inline-block mt-2 font-semibold text-white bg-sky-600 hover:bg-sky-700 w-full text-center p-3 text-lg  transition duration-500"
                >
                  দান করুন →
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sky-300 bg-sky-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Hilful Fuzul. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-xs text-gray-600">
            চলো একসাথে একটা পরিবর্তন আনি 💙
          </p>
        </div>
      </div>
    </footer>
  );
}
