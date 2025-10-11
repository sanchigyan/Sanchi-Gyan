"use client"
import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle: string
}

export default function SectionTitle ({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='py-5 text-center'
    >
      <h2 className='font-bold text-transparent dark:text-white text-3xl md:text-4xl'>
        {title}
      </h2>
      <p className='mx-auto mt-4 max-w-3xl text-gray-300 text-lg'>
       {subtitle}
      </p>
    </motion.div>
  )
}
