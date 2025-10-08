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
      className='py-10 text-center'
    >
      <h2 className='bg-clip-text bg-gradient-to-r from-[#08bcc6] to-[#ffa97b] font-bold text-transparent text-4xl md:text-5xl'>
        {title}
      </h2>
      <p className='mx-auto mt-4 max-w-3xl text-gray-300 text-lg'>
       {subtitle}
      </p>
    </motion.div>
  )
}
