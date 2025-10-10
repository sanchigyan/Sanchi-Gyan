'use client'
import { motion } from 'framer-motion'
import {
  FaAward,
  FaHandshake,
  FaLaptopHouse,
  FaChartLine
} from 'react-icons/fa'
import SectionTitle from '../shared/SectionTitle'

export default function WhyJoin () {
  const perks = [
    {
      title: 'Mission-driven Work',
      desc: 'Make measurable impact — your work supports thousands of learners every month.',
      icon: <FaChartLine className='w-6 h-6' />,
      accent: 'from-rose-400 to-indigo-600'
    },
    {
      title: 'Competitive Compensation',
      desc: 'Transparent salary bands, performance bonuses, and equity opportunities.',
      icon: <FaAward className='w-6 h-6' />,
      accent: 'from-yellow-400 to-amber-600'
    },
    {
      title: 'Flexible Workstyle',
      desc: 'Remote-first culture with asynchronous collaboration and flexible days.',
      icon: <FaLaptopHouse className='w-6 h-6' />,
      accent: 'from-cyan-400 to-blue-600'
    },
    {
      title: 'Career Growth & Mentorship',
      desc: 'Structured learning, internal mobility, and personal mentorship programs.',
      icon: <FaHandshake className='w-6 h-6' />,
      accent: 'from-emerald-400 to-teal-600'
    }
  ]

  return (
    <section className='py-20'>
      <div className='mx-auto px-6 max-w-6xl'>
        {/* Section title */}
        <SectionTitle
          title='Why Join Sanchi Gyan'
          subtitle='We care about people more than profiles — grow professionally, collaborate openly, and do work that matters.'
        />

        <div className='gap-8 grid sm:grid-cols-2 lg:grid-cols-4'>
          {perks.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className='group relative bg-white dark:bg-gray-900 shadow-lg p-6 border border-gray-100 dark:border-gray-700 rounded-3xl overflow-hidden'
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${p.accent} text-white mb-4 shadow-md`}
              >
                {p.icon}
              </div>
              <h3 className='mb-2 font-semibold text-gray-900 dark:text-white group-hover:text-[var(--primary)] text-lg transition-colors'>
                {p.title}
              </h3>
              <p className='text-gray-500 dark:text-gray-300 text-sm leading-relaxed'>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
