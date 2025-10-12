'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiEye, HiEyeOff, HiCheckCircle } from 'react-icons/hi'
import { useRouter, useSearchParams } from 'next/navigation'
import Button from '@/components/shared/button'

export default function ResetPasswordPage () {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Simple password strength indicator
  const getPasswordStrength = (): 'weak' | 'medium' | 'strong' | '' => {
    if (password.length === 0) return ''
    if (password.length < 8) return 'weak'
    if (
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    )
      return 'strong'
    return 'medium'
  }

  const strength = getPasswordStrength()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    if (!token) {
      alert('Invalid or missing reset token.')
      return
    }

    // Simulate API call success
    setSubmitted(true)

    setTimeout(() => {
      router.push('/login')
    }, 3000)
  }

  return (
    <div className='flex justify-center items-center px-4 min-h-screen'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='bg-white dark:bg-gray-900 shadow-2xl p-8 rounded-2xl w-full max-w-md text-center'
      >
        {!submitted ? (
          <>
            <h2 className='mb-2 font-bold text-gray-800 dark:text-white text-3xl'>
              Create New Password
            </h2>
            <p className='mb-6 text-gray-600 dark:text-gray-400 text-sm'>
              Your new password must be different from your previous ones.
            </p>

            <form onSubmit={handleSubmit} className='space-y-4 text-left'>
              {/* New Password */}
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='New Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className='bg-transparent px-4 py-2 pr-10 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full'
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='right-3 absolute inset-y-0 flex items-center text-gray-500 dark:text-gray-400'
                >
                  {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                </button>
              </div>

              {/* Password Strength Bar */}
              {password && (
                <div className='bg-gray-200 dark:bg-gray-800 mt-1 rounded-full w-full h-1 overflow-hidden'>
                  <div
                    className={`h-1 ${
                      strength === 'weak'
                        ? 'bg-red-500 w-1/4'
                        : strength === 'medium'
                        ? 'bg-yellow-500 w-2/4'
                        : 'bg-green-500 w-3/4'
                    }`}
                  ></div>
                </div>
              )}
              <p className='text-gray-500 dark:text-gray-400 text-xs'>
                Must be at least 8 characters, include a number & a symbol.
              </p>

              {/* Confirm Password */}
              <div className='relative'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='Confirm New Password'
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className='bg-transparent px-4 py-2 pr-10 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full'
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='right-3 absolute inset-y-0 flex items-center text-gray-500 dark:text-gray-400'
                >
                  {showConfirmPassword ? (
                    <HiEyeOff size={20} />
                  ) : (
                    <HiEye size={20} />
                  )}
                </button>
              </div>

              {/* Submit Button */}
              <Button
                whileHover={{ scale: 1.05 }}
                className='py-2 rounded-lg w-full font-semibold transition-all'
              >
                Save New Password
              </Button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className='text-center'
          >
            <HiCheckCircle className='mx-auto mb-4 text-green-500' size={50} />
            <h3 className='mb-2 font-semibold text-gray-800 dark:text-white text-2xl'>
              Password Reset Successful!
            </h3>
            <p className='text-gray-600 dark:text-gray-400'>
              You’ll be redirected to the login page shortly...
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
