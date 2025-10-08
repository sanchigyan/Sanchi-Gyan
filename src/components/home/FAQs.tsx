"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "How can I join online classes?",
      a: "Simply create an account, choose your desired subject, and start learning instantly through live or recorded sessions.",
    },
    {
      q: "Are class recordings available?",
      a: "Yes! Every class is recorded and accessible in your dashboard so you can revise anytime.",
    },
    {
      q: "Do you provide study notes and assignments?",
      a: "Absolutely. Each subject includes detailed notes, weekly assignments, and quizzes to ensure complete understanding.",
    },
    {
      q: "Can I contact instructors directly?",
      a: "Yes, you can contact instructors through our built-in chat system anytime for personalized guidance.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      {/* Section Title */}
      <SectionTitle title="Frequently Asked Questions" subtitle="Quick answers to help you get started and understand our platform better."/>

      {/* FAQ List */}
      <div className="space-y-5 mx-auto px-6 max-w-3xl">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 shadow-md hover:shadow-[0_0_25px_rgba(56,53,161,0.2)] border border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center px-6 py-5 w-full font-semibold text-gray-900 dark:text-white text-lg text-left"
            >
              <span>{faq.q}</span>
              <FaChevronDown
                className={`text-[var(--primary)] transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 overflow-hidden text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  <p>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
