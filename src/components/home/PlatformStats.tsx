"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaUsers, FaHandsHelping, FaStar, FaGlobe } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";

export default function PlatformStats() {
  const stats = [
    {
      id: 1,
      icon: <FaUsers className="text-indigo-400 text-4xl" />,
      label: "Active Users",
      value: 12500,
      suffix: "+",
    },
    {
      id: 2,
      icon: <FaHandsHelping className="text-emerald-400 text-4xl" />,
      label: "Volunteers Engaged",
      value: 4800,
      suffix: "+",
    },
    {
      id: 3,
      icon: <FaStar className="text-yellow-400 text-4xl" />,
      label: "Positive Reviews",
      value: 3200,
      suffix: "+",
    },
    {
      id: 4,
      icon: <FaGlobe className="text-cyan-400 text-4xl" />,
      label: "Countries Reached",
      value: 25,
      suffix: "+",
    },
  ];

  return (
    <section className="py-10 md:py-20 overflow-hidden">
      {/* Subtle light gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-transparent to-emerald-900/20 pointer-events-none"></div>

      <div className="z-10 relative mx-auto px-6 lg:px-12 max-w-7xl text-center">
        {/* Section Title */}
        <SectionTitle title="Platform Statistics" subtitle="Our growing community and impact speak for themselves. Here&apos;s a quick glimpse into what we&apos;ve achieved together."/>

        {/* Stats Grid */}
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-gray-800/60 to-gray-900/40 hover:shadow-[0_0_25px_rgb(0,237,67)] backdrop-blur-lg p-8 border border-gray-700/40 rounded-2xl transition-all hover:-translate-y-2 duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="font-extrabold text-white text-4xl">
                <CountUp end={stat.value} duration={3} separator="," suffix={stat.suffix} />
              </h3>
              <p className="mt-2 text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
