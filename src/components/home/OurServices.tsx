'use client'

import { motion } from 'framer-motion'
import {
  FaLaptopCode,
  FaBookOpen,
  FaClipboardCheck,
  FaUserFriends
} from 'react-icons/fa'
import SectionTitle from '../shared/SectionTitle'

export default function OurServices () {
  const services = [
   {
      id: 1,
      title: 'Online Classes',
      icon: <FaLaptopCode className='text-indigo-500 text-5xl' />,
      description:
        'Attend live, interactive online sessions with top educators and engage through hands-on activities and discussions.',
      gradientLight: 'from-indigo-50 to-indigo-100',
      gradientDark: 'from-indigo-500/20 to-indigo-900/30'
    },
    {
      id: 2,
      title: 'Subject’s Notes',
      icon: <FaBookOpen className='text-emerald-500 text-5xl' />,
      description:
        'Access well-structured digital notes crafted by experts — simplified, visual, and ready to boost your learning speed.',
      gradientLight: 'from-emerald-50 to-emerald-100',
      gradientDark: 'from-emerald-500/20 to-emerald-900/30'
    },
    {
      id: 3,
      title: 'Weekly Test',
      icon: <FaClipboardCheck className='text-yellow-500 text-5xl' />,
      description:
        'Track your progress every week with smart tests and instant feedback. Stay motivated, stay sharp.',
      gradientLight: 'from-yellow-50 to-yellow-100',
      gradientDark: 'from-yellow-500/20 to-yellow-900/30'
    },
    {
      id: 4,
      title: 'Regular Guidance',
      icon: <FaUserFriends className='text-pink-500 text-5xl' />,
      description:
        'Get personalized mentorship and career guidance from experienced teachers who truly care about your success.',
      gradientLight: 'from-pink-50 to-pink-100',
      gradientDark: 'from-pink-500/20 to-pink-900/30'
    }
  ]

  return (
    <section className='relative py-5 overflow-hidden'>
      <div className='z-10 relative mx-auto px-6 lg:px-12 max-w-7xl'>
        {/* Section Heading */}
        <SectionTitle
          title='Our Services'
          subtitle='We deliver a complete digital learning experience that empowers students to learn smarter, not harder.'
        />

        {/* Cards Grid */}
        <div className='gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`
                group relative overflow-hidden rounded-3xl p-8 text-center
                bg-gradient-to-b ${service.gradientLight} 
                dark:bg-gradient-to-t dark:${service.gradientDark}
                backdrop-blur-md border border-gray-200 dark:border-gray-700
                shadow-md hover:shadow-lg
                hover:-translate-y-2 transition-all duration-300
              `}
            >
              <div className='flex justify-center mb-6'>{service.icon}</div>
              <h3 className='mb-3 font-semibold text-gray-800 dark:text-white text-xl transition-colors duration-300'>
                {service.title}
              </h3>
              <p className='text-gray-600 dark:text-gray-800 leading-relaxed'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
