// "use client";

// import { useEffect, useRef } from "react";

// export default function Announcement() {
//   const isEnabled = true;

//   const messages = [
//     "** বিসমিল্লাহির রহমানির রহিম **",
//     "📢 নতুন সদস্য সংগ্রহ শুরু — আপনি কি সমাজসেবায় আগ্রহী?",
//     "হিলফুল ফুজুল মহেশ্বরচাঁদা আগামী ১লা এপ্রিল থেকে সদস্য সংগ্রহ শুরু করছে",
//     "🤝 সমাজের জন্য কাজ করতে চান? আমাদের সাথে যোগ দিন",
//     "📅 আবেদনপত্র জমার শেষ তারিখ: ৩০শে জুলাই",
//     "📞 যোগাযোগ: ০১৩৩৬৩৯৭৬৫৩",
//     "🌱 আমরা সবাই মিলে গড়বো একটি সুন্দর সমাজ",
//   ];

//   const trackRef = useRef<HTMLDivElement>(null);
//   const animRef = useRef<number | null>(null);
//   const posRef = useRef(0);
//   const isPausedRef = useRef(false);

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     // Wait for paint so scrollWidth is accurate
//     const raf = requestAnimationFrame(() => {
//       const totalWidth = track.scrollWidth / 2; // half because we duplicate
//       const speed = 1.1; // px per frame — tweak here for faster/slower

//       const tick = () => {
//         if (!isPausedRef.current) {
//           posRef.current -= speed;
//           if (Math.abs(posRef.current) >= totalWidth) {
//             posRef.current = 0; // seamless reset
//           }
//           track.style.transform = `translateX(${posRef.current}px)`;
//         }
//         animRef.current = requestAnimationFrame(tick);
//       };

//       animRef.current = requestAnimationFrame(tick);
//     });

//     return () => {
//       cancelAnimationFrame(raf);
//       if (animRef.current) cancelAnimationFrame(animRef.current);
//     };
//   }, []);

//   if (!isEnabled) return null;

//   // Duplicate 4× so there's always enough content to fill any screen
//   const repeated = [...messages, ...messages, ...messages, ...messages];

//   return (
//     <div
//       className="w-full overflow-hidden relative"
//       style={{
//         background: "linear-gradient(90deg, #0a0a0a 0%, #111 40%, #0a0a0a 100%)",
//         borderTop: "1px solid rgba(255,255,255,0.08)",
//         borderBottom: "1px solid rgba(255,255,255,0.08)",
//       }}
//     >
//       {/* Fade masks — left & right edges */}
//       <div
//         className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-24"
//         style={{
//           background:
//             "linear-gradient(to right, #0a0a0a 0%, transparent 100%)",
//         }}
//       />
//       <div
//         className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-24"
//         style={{
//           background:
//             "linear-gradient(to left, #0a0a0a 0%, transparent 100%)",
//         }}
//       />

//       {/* Subtle shimmer line */}
//       <div
//         className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-40"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
//         }}
//       />

//       {/* Scrolling track */}
//       <div
//         ref={trackRef}
//         className="flex whitespace-nowrap will-change-transform"
//         style={{ display: "flex" }}
//         onMouseEnter={() => (isPausedRef.current = true)}
//         onMouseLeave={() => (isPausedRef.current = false)}
//       >
//         {repeated.map((msg, index) => (
//           <span
//             key={index}
//             className="inline-flex items-center"
//             style={{
//               padding: "0.65rem 0",
//               marginRight: "3.5rem",
//               fontSize: "clamp(0.78rem, 2.2vw, 0.95rem)",
//               fontWeight: 500,
//               letterSpacing: "0.03em",
//               color: "rgba(255,255,255,0.88)",
//               fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', sans-serif",
//             }}
//           >
//             {/* Subtle dot separator before each message */}
//             <span
//               style={{
//                 display: "inline-block",
//                 width: "4px",
//                 height: "4px",
//                 borderRadius: "50%",
//                 background: "rgba(255,255,255,0.25)",
//                 marginRight: "3.5rem",
//                 flexShrink: 0,
//               }}
//             />
//             {msg}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }