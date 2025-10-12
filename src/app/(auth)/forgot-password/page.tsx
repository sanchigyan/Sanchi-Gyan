'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import Button from '@/components/shared/button'

export default function ForgotPasswordPage () {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email.trim() !== '') {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
      }, 8000) // auto-reset after 8s
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='bg-white dark:bg-gray-900 shadow-2xl p-8 sm:p-10 rounded-2xl w-full max-w-md text-center'
      >
        <AnimatePresence mode='wait'>
          {!submitted ? (
            <motion.div
              key='form'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className='mb-3 font-bold text-gray-800 dark:text-white text-3xl'>
                Reset Your Password
              </h2>
              <p className='mb-6 text-gray-600 dark:text-gray-400 text-sm sm:text-base'>
                No worries! Enter your email address below, and we’ll send you a
                link to reset your password.
              </p>

              <form onSubmit={handleSubmit} className='space-y-4'>
                <input
                  type='email'
                  placeholder='Email Address'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className='bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full'
                  required
                />
                <Button
                  whileHover={{ scale: 1.05 }}
                  className='py-2 rounded-lg w-full font-semibold transition-all'
                >
                  Send Reset Link
                </Button>
              </form>

              <div className='mt-6 text-gray-600 dark:text-gray-400 text-sm'>
                <a
                  href='/login'
                  className='font-semibold text-indigo-600 dark:text-indigo-400 hover:underline'
                >
                  Back to Log In
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key='success'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='flex flex-col justify-center items-center'
            >
              <HiCheckCircle className='mb-4 text-green-500 text-6xl' />
              <h3 className='mb-2 font-semibold text-gray-800 dark:text-white text-xl'>
                Check your inbox!
              </h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>
                We’ve sent a password reset link to{' '}
                <span className='font-medium text-indigo-600 dark:text-indigo-400'>
                  {email}
                </span>
                .
              </p>

              <p className='mt-4 text-gray-500 dark:text-gray-500 text-sm'>
                Didn’t receive the email? Check your spam folder or{' '}
                <a
                  href='#'
                  onClick={() => setSubmitted(false)}
                  className='font-semibold text-indigo-600 dark:text-indigo-400 hover:underline'
                >
                  try again
                </a>
                .
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
