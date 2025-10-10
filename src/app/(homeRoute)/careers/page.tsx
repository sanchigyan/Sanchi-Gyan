'use client'
import LifeAtSanchiGyan from '@/components/careers/LifeAtSanchiGyan'
import WhyJoin from '@/components/careers/WhyJoin'
import Button from '@/components/shared/button'
import Hero from '@/components/shared/hero'
import { motion } from 'framer-motion'

export default function Careers () {
  return (
    <div>
      <Hero>
        <div className='relative mx-auto px-4 sm:px-6 lg:px-8 py-28 max-w-7xl overflow-hidden'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center items-center bg-[url('/CereerBanner.jpeg')] bg-cover bg-center shadow-[0_0_60px_rgba(0,0,0,0.25)] rounded-3xl w-full h-[32rem] md:h-[28rem]"
          >
            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent rounded-3xl'></div>

            <div className='z-10 relative px-6 text-white text-center'>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='drop-shadow-lg font-bold text-4xl md:text-6xl leading-tight tracking-tight'
              >
                Build Your{' '}
                <span className='text-[var(--primary)]'>Dream Career</span>{' '}
                <br />
                with <span className='text-[#9AD0D3]'>Sanchi Gyan</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className='mx-auto mt-5 max-w-2xl text-gray-200 text-lg md:text-2xl'
              >
                Explore teaching, design, and development opportunities — be
                part of a community shaping the next generation of learners.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='mt-10'
              >
                <p className='mb-3 text-gray-300 text-md'>
                  Ready to join the journey? Let’s get connected.
                </p>
                <form className='flex md:flex-row flex-col justify-center items-center gap-3'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='bg-white/90 px-4 py-2.5 border border-gray-400/40 rounded-full focus:outline-none focus:ring-[var(--primary)] focus:ring-2 w-72 md:w-80 text-gray-800 placeholder:text-gray-500'
                  />
                  <Button
                    variant='primary'
                    className='px-6 py-2.5 rounded-full font-semibold text-gray-800 transition-all duration-300'
                  >
                    Join Now
                  </Button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Hero>
      <LifeAtSanchiGyan/>
      <WhyJoin/>
    </div>
  )
}
