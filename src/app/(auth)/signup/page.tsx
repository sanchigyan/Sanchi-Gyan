'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import Image from 'next/image'
import Button from '@/components/shared/button'
import { useAuth } from '@/context/AuthContext'

export default function SignupPage () {
  const { signup } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  // Form data
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  // Simple password strength logic
  const getPasswordStrength = () => {
    if (formData.password.length === 0) return ''
    if (formData.password.length < 8) return 'weak'
    if (formData.password.match(/[A-Z]/) && formData.password.match(/[0-9]/))
      return 'strong'
    return 'medium'
  }

  const strength = getPasswordStrength()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long')
      return
    }

    // // Split full name into first and last name
    // const nameParts = formData.fullname.trim().split(' ')

    setLoading(true)
    try {
      await signup({
        email: formData.email,
        password: formData.password,
        fullname: formData.fullname,
      })
    } catch (error) {
      console.error('Signup error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex mx-auto max-w-4xl min-h-screen'>
      {/* Left Side: Signup Form */}
      <div className='flex justify-center items-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='bg-white dark:bg-gray-900 shadow-xl mt-16 px-8 py-10 md:py-6 rounded-2xl w-full max-w-lg'
        >
          <h2 className='mt-4 md:mt-0 mb-6 font-bold text-gray-800 dark:text-white text-2xl text-center'>
            Start Your Learning Journey
          </h2>

          {/* Social Buttons */}
          <div className='flex sm:flex-row flex-col gap-3'>
            <button className='flex justify-center items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 py-2 border border-gray-300 dark:border-gray-700 rounded-lg w-full text-gray-700 dark:text-gray-300'>
              <FcGoogle size={22} /> Sign up with Google
            </button>
            <button className='flex justify-center items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 py-2 border border-gray-300 dark:border-gray-700 rounded-lg w-full text-gray-700 dark:text-gray-300'>
              <FaFacebook size={20} className='text-blue-500' /> Sign up with
              Facebook
            </button>
          </div>

          {/* Divider */}
          <div className='flex items-center gap-2 mb-3'>
            <div className='flex-grow bg-gray-300 dark:bg-gray-700 h-px' />
            <span className='text-gray-500 dark:text-gray-400 text-sm'>or</span>
            <div className='flex-grow bg-gray-300 dark:bg-gray-700 h-px' />
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className='space-y-4'>
            <input
              type='text'
              name='fullname'
              placeholder='Full Name'
              value={formData.fullname}
              onChange={handleChange}
              className='bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
              className='bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full'
              required
            />

            {/* Password Field */}
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
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

            {/* Password Strength Meter */}
            {formData.password && (
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

            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full'
              required
            />

            {/* Terms Checkbox */}
            <label className='flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm'>
              <input
                type='checkbox'
                className='mt-1 accent-indigo-500'
                required
              />
              <span>
                I agree to the{' '}
                <a
                  href='#'
                  className='font-semibold text-indigo-600 dark:text-indigo-400 hover:underline'
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href='#'
                  className='font-semibold text-indigo-600 dark:text-indigo-400 hover:underline'
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            {/* CTA Button */}
            <Button
              type='submit'
              disabled={loading}
              className='disabled:opacity-50 py-2 rounded-lg w-full font-semibold transition-all disabled:cursor-not-allowed'
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>

            {/* Footer Link */}
            <p className='mt-1 text-gray-600 dark:text-gray-400 text-sm text-center'>
              Already have an account?{' '}
              <a
                href='/login'
                className='font-semibold text-indigo-600 dark:text-indigo-400 hover:underline'
              >
                Log In
              </a>
            </p>
          </form>
        </motion.div>
      </div>

      {/* Right Side: Value Proposition */}
      <div className='hidden relative lg:flex justify-center items-center overflow-hidden'>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='px-8 text-center'
        >
          <Image
            src='https://i.ibb.co/0VKSrvWt/A-relevant-uplifting-illustration-e-g-students-signup-form-Without-a-background-may-be-stable-with-d.png'
            width={400}
            height={300}
            alt='Learning illustration'
            className='drop-shadow-lg mx-auto mb-6 w-72'
          />
          <h3 className='mb-3 font-bold text-gray-800 dark:text-white text-2xl'>
            Learn, Grow & Succeed
          </h3>
          <ul className='space-y-2 text-gray-600 dark:text-gray-300'>
            <li>📘 Access to 1000+ Nepali-language courses</li>
            <li>🎓 Track your progress and earn certificates</li>
            <li>🌍 Join a community of 50,000+ learners</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
