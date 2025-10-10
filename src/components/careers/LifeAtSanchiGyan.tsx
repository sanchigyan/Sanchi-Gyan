"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";

const cultureCards = [
  {
    title: "Collaborative Culture",
    img: "https://i.ibb.co/LzNTwfhn/Whats-App-Image-2025-10-08-at-12-24-08-PM.jpg",
    description:
      "Teams across design, teaching, & operations work together every day. We value voices from every corner.",
  },
  {
    title: "Continuous Learning",
    img: "https://i.ibb.co/tPLP58Q1/Whats-App-Image-2025-10-08-at-12-24-08-PM-3.jpg",
    description:
      "Workshops, peer-learning, and mentor sessions keep us growing. Your professional development matters here.",
  },
  {
    title: "Flexible Work Environment",
    img: "https://i.ibb.co/d4zJBDv0/Whats-App-Image-2025-10-08-at-12-24-08-PM-4.jpg",
    description:
      "Remote or office—you choose. We support work-life balance so creativity thrives anytime, anywhere.",
  },
  {
    title: "Impact & Purpose",
    img: "https://i.ibb.co/Psqq9xjQ/Whats-App-Image-2025-10-08-at-12-24-08-PM-1.jpg",
    description:
      "Every class, note, and test you help create touches students' lives. We teach to change futures, not just scores.",
  },
];

export default function LifeAtSanchiGyan() {
  return (
    <section className="py-20">
      <div className="z-10 relative mx-auto px-6 max-w-7xl">
        {/* Section title */}
        <SectionTitle title="Life at Sanchi Gyan" subtitle="Discover what makes working with us inspiring — our values, environment, and people who bring it all to life."/>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
          {cultureCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-900 shadow-lg hover:shadow-[0_0_40px_rgba(56,53,161,0.3)] rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-60">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white group-hover:text-[var(--primary)] text-2xl transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Employee Quotes */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-700 dark:text-gray-200 text-xl italic"
          >
            “Working here isn’t just about a job — it’s about growing, creating, and touching real lives. I’ve never felt more valued.”
            <span className="block mt-4 font-bold">— Anjali Verma, Curriculum Lead</span>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
