'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import Image from 'next/image'
import Button from '@/components/shared/button'
import { useAuth } from '@/context/AuthContext'

export default function LoginPage () {
  const { signin } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'email' | 'phone'>('email')

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    pin: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    try {
      if (activeTab === 'email') {
        await signin({
          email: formData.email,
          password: formData.password
        })
      } else {
        // Phone login logic (implement this on backend)
        alert('Phone login not implemented yet')
      }
    } catch (error) {
      console.error('Login error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex dark:bg-black mx-auto max-w-4xl min-h-screen'>
      {/* Left Side: Login Form */}
      <div className='flex justify-center items-center w-full'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='bg-white dark:bg-gray-900 shadow-xl mt-16 px-8 py-10 md:py-8 rounded-2xl w-full max-w-lg'
        >
          <h2 className='mb-8 font-bold text-gray-800 dark:text-white text-2xl text-center'>
            Welcome Back
          </h2>

          {/* Tabs */}
          <div className='flex mb-6 border-gray-300 dark:border-gray-700 border-b'>
            <button
              onClick={() => setActiveTab('email')}
              className={`w-1/2 py-2 text-center font-medium transition-all ${
                activeTab === 'email'
                  ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Email / Google
            </button>
            <button
              onClick={() => setActiveTab('phone')}
              className={`w-1/2 py-2 text-center font-medium transition-all ${
                activeTab === 'phone'
                  ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Phone Login
            </button>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'email' ? (
              <>
                {/* Social Login */}
                <div className='flex sm:flex-row flex-col gap-3 mb-4'>
                  <button className='flex justify-center items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 py-2 border border-gray-300 dark:border-gray-700 rounded-lg w-full text-gray-700 dark:text-gray-300'>
                    <FcGoogle size={22} /> Log in with Google
                  </button>
                  <button className='flex justify-center items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 py-2 border border-gray-300 dark:border-gray-700 rounded-lg w-full text-gray-700 dark:text-gray-300'>
                    <FaFacebook size={20} className='text-blue-500' /> Log in
                    with Facebook
                  </button>
                </div>

                {/* Divider */}
                <div className='flex items-center gap-2 mb-3'>
                  <div className='flex-grow bg-gray-300 dark:bg-gray-700 h-px' />
                  <span className='text-gray-500 dark:text-gray-400 text-sm'>
                    or
                  </span>
                  <div className='flex-grow bg-gray-300 dark:bg-gray-700 h-px' />
                </div>

                {/* Email/Password Form */}
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={handleChange}
                    className='bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full'
                    required
                  />
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
                      {showPassword ? (
                        <HiEyeOff size={20} />
                      ) : (
                        <HiEye size={20} />
                      )}
                    </button>
                  </div>

                  <div className='flex justify-between items-center text-gray-600 dark:text-gray-300 text-sm'>
                    <label className='flex items-center gap-2'>
                      <input type='checkbox' className='accent-indigo-500' />
                      Remember Me
                    </label>
                    <a
                      href='/forgot-password'
                      className='font-semibold text-indigo-600 dark:text-indigo-400 hover:underline'
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <Button
                    type='submit'
                    disabled={loading}
                    className='disabled:opacity-50 py-2 rounded-lg w-full font-semibold transition-all disabled:cursor-not-allowed'
                  >
                    {loading ? 'Logging in...' : 'Log In'}
                  </Button>

                  <p className='text-gray-600 dark:text-gray-400 text-sm text-center'>
                    Don’t have an account?{' '}
                    <a
                      href='/signup'
                      className='font-semibold text-indigo-600 dark:text-indigo-400 hover:underline'
                    >
                      Sign Up
                    </a>
                  </p>
                </form>
              </>
            ) : (
              <>
                {/* Phone Login Form */}
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <input
                    type='tel'
                    name='phone'
                    placeholder='Enter your phone number'
                    value={formData.phone}
                    onChange={handleChange}
                    className='bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full'
                    required
                  />
                  <input
                    type='password'
                    name='pin'
                    placeholder='Enter PIN'
                    value={formData.pin}
                    onChange={handleChange}
                    className='bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full'
                    required
                  />

                  <Button
                    type='submit'
                    disabled={loading}
                    className='disabled:opacity-50 py-2 rounded-lg w-full font-semibold transition-all disabled:cursor-not-allowed'
                  >
                    {loading ? 'Logging in...' : 'Login with Phone'}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side: Re-engagement */}
      <div className='hidden relative lg:flex justify-center items-center overflow-hidden'>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center'
        >
          <Image
            src='https://i.ibb.co/0VKSrvWt/A-relevant-uplifting-illustration-e-g-students-signup-form-Without-a-background-may-be-stable-with-d.png'
            width={400}
            height={300}
            alt='Login illustration'
            className='drop-shadow-lg mx-auto mb-6 w-72'
          />
          <h3 className='mb-3 font-bold text-gray-800 dark:text-white text-2xl'>
            Continue Your Learning Journey
          </h3>
          <ul className='space-y-2 text-gray-600 dark:text-gray-300'>
            <li>📚 Your next lesson is waiting</li>
            <li>🎯 Pick up right where you left off</li>
            <li>🚀 Stay consistent and achieve your goals</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
