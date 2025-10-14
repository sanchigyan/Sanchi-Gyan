'use client'
import { motion } from 'framer-motion'
import { FaSpinner } from 'react-icons/fa'

export default function Loading () {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 min-h-screen text-center'>
      {/* Animated Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        className='mb-6 text-[var(--primary)]'
      >
        <FaSpinner size={48} />
      </motion.div>

      {/* Text Animation */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='font-semibold text-gray-800 dark:text-gray-200 text-2xl'
      >
        Loading, please wait...
      </motion.h1>

      {/* Optional Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className='mt-2 text-gray-500 dark:text-gray-400 text-sm'
      >
        Preparing your experience ✨
      </motion.p>
    </div>
  )
}
