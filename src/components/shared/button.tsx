'use client'
import React from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'

type ButtonProps = HTMLMotionProps<'button'> & {
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function Button ({
  className = '',
  variant = 'primary',
  children,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-[var(--primary)] shadow-lg hover:shadow-primary/30',
    secondary:
      'bg-[var(--accent)] hover:bg-gray-50 border-2 border-[var(--secondary)] text-[var(--background)]'
  }

  const baseClasses = `${variantClasses[variant]} text-black font-bold transition-all`
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
