'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Heart, Home, Info, HandCoins, ImageIcon, Mail, Sparkles, Moon, HeartPulse, Logs, TextAlignJustify } from 'lucide-react';
import logo from '@/public/logo.png';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [zakatOpen, setZakatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const workRef = useRef<HTMLDivElement>(null);
  const zakatRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (workRef.current && !workRef.current.contains(event.target as Node)) {
        setWorkOpen(false);
      }
      if (zakatRef.current && !zakatRef.current.contains(event.target as Node)) {
        setZakatOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  const closeDropdowns = () => {
    setWorkOpen(false);
    setZakatOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Info },
  ];

  const ourWorkLinks = [
    { href: '/our-work/orphans', label: 'Orphans Support', emoji: '👶' },
    { href: '/our-work/disabled', label: 'Disabled Care', emoji: '♿' },
    { href: '/our-work/elderly', label: 'Elderly Support', emoji: '👴' },
    { href: '/our-work/emergency', label: 'Emergency Relief', emoji: '🚨' },
  ];

  const zakatLinks = [
    { href: '/zakat', label: 'Zakat', emoji: '🌙' },
    { href: '/sadaqah', label: 'Sadaqah', emoji: '💝' },
    { href: '/fidya', label: 'Fidya & Kaffarah', emoji: '🤲' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 font-Outfit transition-all duration-300 ${
        scrolled
          ? 'bg-sky-300/75 backdrop-blur-xl shadow-lg border-b border-sky-700/50'
          : 'bg-sky-300/90 backdrop-blur-md border-b border-sky-500'
      }`}
    >
      <nav className=" w-full xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/">
              <Image
                src={logo}
                alt="Hilful Fuzul logo"
                loading='eager'
                width={50}
                height={50}
                className="rounded-full ring-2 ring-sky-400 hover:ring-sky-600 transition-all duration-500"
              />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-gray-800 hover:bg-sky-400 transition-all duration-500 font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Our Work Dropdown */}
            <div className="relative" ref={workRef}>
              <button
                onClick={() => {
                  setWorkOpen(!workOpen);
                  setZakatOpen(false);
                }}
                className={`flex items-center gap-1 px-4 py-2  font-medium transition-all duration-500 ${
                  workOpen
                    ? 'text-gray-700 bg-sky-400'
                    : 'text-gray-700 hover:text-gray-800 hover:bg-sky-400'
                }`}
              >
                Our Work
                <motion.div
                  animate={{ rotate: workOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {workOpen && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"
                      onClick={() => setWorkOpen(false)}
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 w-64 bg-sky-50 backdrop-blur-xl shadow-2xl border border-sky-200"
                    >
                      {ourWorkLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            onClick={closeDropdowns}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-linear-to-r hover:from-sky-100 hover:to-sky-200 border-b border-dotted border-sky-300 transition-all duration-200 group"
                          >
                            <span className="text-2xl group-hover:scale-110 transition-transform">
                              {link.emoji}
                            </span>
                            <span className="text-gray-700 group-hover:text-sky-600 font-medium">
                              {link.label}
                            </span>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/donation"
              className="px-4 py-2 text-gray-700 hover:text-gray-800 hover:bg-sky-400 transition-all duration-500 font-medium"
            >
              Donation
            </Link>

            {/* Zakat & Sadaqah Dropdown */}
            <div className="relative" ref={zakatRef}>
              <button
                onClick={() => {
                  setZakatOpen(!zakatOpen);
                  setWorkOpen(false);
                }}
                className={`flex items-center gap-1 px-4 py-2  font-medium transition-all duration-500 ${
                  zakatOpen
                    ? 'text-gray-700 bg-sky-400'
                    : 'text-gray-700 hover:text-gray-800 hover:bg-sky-400'
                }`}
              >
                Zakat & Sadaqah
                <motion.div
                  animate={{ rotate: zakatOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {zakatOpen && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"
                      onClick={() => setZakatOpen(false)}
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 w-64 bg-sky-50 backdrop-blur-xl shadow-2xl border border-sky-200"
                    >
                      {zakatLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            onClick={closeDropdowns}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-linear-to-r hover:from-sky-100 hover:to-sky-200 border-b border-dotted border-sky-300 transition-all duration-200 group"
                          >
                            <span className="text-2xl group-hover:scale-110 transition-transform">
                              {link.emoji}
                            </span>
                            <span className="text-gray-700 group-hover:text-sky-600 font-medium">
                              {link.label}
                            </span>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/gallery"
              className="px-4 py-2 text-gray-700 hover:text-gray-800 hover:bg-sky-400 transition-all duration-200 font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2  text-gray-700 hover:text-gray-800 hover:bg-sky-400 transition-all duration-200 font-medium"
            >
              Contact
            </Link>

            {/* Donate Button */}
            <div>
              <Link
                href="/donation"
                className="ml-2 flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-6 py-2.5 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-500 font-semibold"
              >
                <HeartPulse size={18} className="text-white/80" />
                Donate Now
              </Link>
            </div>
          </div>






      {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-sm cursor-pointer hover:bg-sky-400 transition-colors duration-500"
          >
            <TextAlignJustify size={28} className="text-gray-700" />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-85 sm:w-[60%] h-screen bg-linear-to-br from-sky-50 to-sky-100 z-50 shadow-2xl lg:hidden overflow-y-auto no-scrollbar"
            >
              {/* Header */}
              <div className="sticky top-0 bg-sky-300 rounded-b-xl border-b border-sky-500 px-6 py-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={50}
                    height={50}
                    className="rounded-full ring-2 ring-sky-600"
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full hover:bg-sky-400 cursor-pointer transition-colors duration-700"
                >
                  <X size={36} className="text-gray-700 hover:rotate-180 transition duration-700 " />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="px-2 py-6 space-y-2">
                {/* Home */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3  hover:bg-sky-200 transition-all duration-500 group"
                  >
                    <Home size={20} className="text-sky-600 font-semibold group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-semibold group-hover:text-gray-800">Home</span>
                  </Link>
                </motion.div>

                {/* About */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/80 transition-all duration-200 group"
                  >
                    <Info size={20} className="text-sky-600 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium group-hover:text-sky-600">About</span>
                  </Link>
                </motion.div>

                {/* Our Work Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-1"
                >
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Our Work
                  </div>
                  {ourWorkLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/80 transition-all duration-200 group"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform">
                        {link.emoji}
                      </span>
                      <span className="text-gray-700 font-medium group-hover:text-sky-600">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </motion.div>

                {/* Donation */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    href="/donation"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/80 transition-all duration-200 group"
                  >
                    <HandCoins size={20} className="text-sky-600 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium group-hover:text-sky-600">Donation</span>
                  </Link>
                </motion.div>

                {/* Zakat & Sadaqah Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-1"
                >
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Zakat & Sadaqah
                  </div>
                  {zakatLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/80 transition-all duration-200 group"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform">
                        {link.emoji}
                      </span>
                      <span className="text-gray-700 font-medium group-hover:text-sky-600">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </motion.div>

                {/* Gallery */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <Link
                    href="/gallery"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/80 transition-all duration-200 group"
                  >
                    <ImageIcon size={20} className="text-sky-600 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium group-hover:text-sky-600">Gallery</span>
                  </Link>
                </motion.div>

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/80 transition-all duration-200 group"
                  >
                    <Mail size={20} className="text-sky-600 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium group-hover:text-sky-600">Contact</span>
                  </Link>
                </motion.div>

                {/* Donate Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="pt-4"
                >
                  <Link
                    href="/donation"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-4 rounded-2xl shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 transition-all duration-300 font-semibold"
                  >
                    <Heart size={20} className="fill-white" />
                    Donate Now
                    <Sparkles size={18} className="animate-pulse" />
                  </Link>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-gradient-to-t from-white to-transparent p-6 text-center">
                <p className="text-sm text-gray-500">
                  Making a difference together 💙
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
