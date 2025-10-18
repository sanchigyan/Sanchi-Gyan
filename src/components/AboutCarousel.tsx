'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Button from './shared/button'

const images = [
  'https://i.ibb.co/ZRyPGyYP/Whats-App-Image-2025-10-08-at-12-24-08-PM-12.jpg',
  'https://i.ibb.co/whR2MT66/Whats-App-Image-2025-10-08-at-12-24-08-PM-11.jpg',
  'https://i.ibb.co/wrPYW3zj/Whats-App-Image-2025-10-08-at-12-24-08-PM-10.jpg',
  'https://i.ibb.co/xS5qvMQ7/Whats-App-Image-2025-10-08-at-12-24-08-PM-8.jpg',
  'https://i.ibb.co/WNnLbPrg/Whats-App-Image-2025-10-08-at-12-24-08-PM-9.jpg',
  'https://i.ibb.co/Lhd3yP12/Whats-App-Image-2025-10-08-at-12-24-08-PM-7.jpg',
  'https://i.ibb.co/zHh5PPFS/Whats-App-Image-2025-10-08-at-12-24-08-PM-6.jpg',
  'https://i.ibb.co/rfcHjTDh/Whats-App-Image-2025-10-08-at-12-24-08-PM-2.jpg',
  'https://i.ibb.co/dwP7cCX0/Whats-App-Image-2025-10-08-at-12-24-08-PM-5.jpg'
]

export default function AboutCarousel () {
  const [current, setCurrent] = useState(0)

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className='relative bg-green-400 shadow-2xl py-1 rounded-3xl w-full overflow-hidden'>
      <div className='relative mx-auto max-w-6xl'>
        {/* Image Container */}
        <div className='relative rounded-3xl h-[400px] sm:h-[500px] md:h-[500px] overflow-hidden'>
          <AnimatePresence>
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className='absolute inset-0'
            >
              <Image
                src={images[current]}
                alt={`About Sanchi Gyan Image ${current + 1}`}
                fill
                className='rounded-3xl object-cover'
                priority
              />
              {/* Luxurious overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-3xl' />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Caption */}
        <div className='right-6 bottom-6 left-2 md:left-6 absolute flex justify-between items-center text-white'>
          <p className='bg-black/30 shadow-lg backdrop-blur-md px-4 py-2 rounded-full font-semibold text-md md:text-xl'>
            {
              [
                'Empowering Learning',
                'Innovating Together',
                'Building a Brighter Future',
                'Sharing Knowledge',
                'Innovating Together',
                'Building a Brighter Future',
                'Sharing Knowledge',
              ][current]
            }
          </p>

          {/* Indicators */}
          <div className='flex space-x-2'>
            {images.map((_, i) => (
              <Button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  current === i
                    ? 'bg-white scale-110 shadow-lg'
                    : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
