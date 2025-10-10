'use client'
import { motion } from 'framer-motion'
import { BiMailSend, BiRocket } from 'react-icons/bi'

export default function NoFit () {
  return (
    <div className='relative py-20'>
      <div className='mx-auto px-6 max-w-6xl text-center'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='mb-6 font-bold text-gray-800 dark:text-white text-4xl'>
            🚀 Can&rsquo;t Find a Fit?
          </h2>
          <p className='mx-auto mb-10 max-w-2xl text-gray-600 dark:text-gray-300 text-lg'>
            We&rsquo;re always on the lookout for passionate individuals who believe
            in transforming education. Even if you don&rsquo;t see the perfect role
            today, your skills might be exactly what we need tomorrow.
          </p>

          <div className='flex sm:flex-row flex-col justify-center items-center gap-4'>
            <motion.a
              href='#'
              whileHover={{ scale: 1.05 }}
              className='inline-flex items-center gap-2 bg-indigo-600 shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] px-8 py-3 rounded-full font-semibold text-white text-lg transition-all'
            >
              <BiRocket size={22} />
              Submit Your Resume
            </motion.a>

            <motion.a
              href='#contact'
              whileHover={{ scale: 1.05 }}
              className='inline-flex items-center gap-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 px-8 py-3 border border-indigo-500 rounded-full font-semibold text-indigo-600 dark:text-indigo-400 text-lg transition-all'
            >
              <BiMailSend size={22} />
              Contact Our HR
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className='absolute inset-0 pointer-events-none'>
        <div className='top-0 left-1/2 absolute bg-indigo-200/20 blur-3xl rounded-full w-[600px] h-[600px] -translate-x-1/2 transform'></div>
      </div>
    </div>
  )
}
