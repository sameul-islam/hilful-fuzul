import { motion } from "framer-motion";
import {
  HeartHandshake,
  Users,
  ShieldCheck,
  HandCoins,
} from "lucide-react";

const items = [
  {
    icon: HeartHandshake,
    title: "Humanitarian Support for All",
    description:
      "We stand beside anyone facing hardship — widows, orphans, the sick, the elderly, and families in crisis — without limitation or discrimination.",
  },
  {
    icon: HandCoins,
    title: "Zakat, Sadaqah & Emergency Aid",
    description:
      "From obligatory Zakat to voluntary Sadaqah and urgent relief, we ensure your donations reach those who need them most, responsibly and ethically.",
  },
  {
    icon: Users,
    title: "Community-Based & Volunteer Driven",
    description:
      "Built and operated by the local community, our work is powered by sincere volunteers committed to serving humanity with dignity.",
  },
  {
    icon: ShieldCheck,
    title: "Trust, Transparency & Accountability",
    description:
      "We prioritize honesty and transparency in every action, so donors can give with confidence and peace of mind.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-semibold font-Karla tracking-tight text-slate-900 sm:text-3xl">
            A Humanitarian Organization Built on Trust & Responsibility
          </h2>
          <p className="mt-4 font-Outfit text-slate-700 lg:text-lg">
            Hilful Fuzul exists to support people in all forms of hardship —
            social, financial, medical, and emergency situations — while
            upholding the Islamic values of compassion, justice, and collective
            responsibility.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-slate-200 md:border-slate-100 bg-sky-50 md:bg-sky-50/40 p-6 transition hover:border-sky-200 hover:bg-sky-50"
              >
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded bg-sky-100 text-sky-600 border border-sky-200">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg text-center font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-center leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
