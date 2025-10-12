'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import Image from 'next/image'
import Button from '@/components/shared/button'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div className="flex mx-auto max-w-4xl min-h-screen">
      {/* Left Side: Login Form */}
      <div className="flex justify-center items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-900 shadow-xl mt-16 px-8 py-10 md:py-6 rounded-2xl w-full max-w-lg"
        >
          <h2 className="mt-4 md:mt-0 mb-6 font-bold text-gray-800 dark:text-white text-2xl text-center">
            Welcome Back
          </h2>

          {/* Social Buttons */}
          <div className="flex sm:flex-row flex-col gap-3 mb-3">
            <button className="flex justify-center items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 py-2 border border-gray-300 dark:border-gray-700 rounded-lg w-full text-gray-700 dark:text-gray-300">
              <FcGoogle size={22} /> Log in with Google
            </button>
            <button className="flex justify-center items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 py-2 border border-gray-300 dark:border-gray-700 rounded-lg w-full text-gray-700 dark:text-gray-300">
              <FaFacebook size={20} className="text-blue-500" /> Log in with Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-grow bg-gray-300 dark:bg-gray-700 h-px" />
            <span className="text-gray-500 dark:text-gray-400 text-sm">or</span>
            <div className="flex-grow bg-gray-300 dark:bg-gray-700 h-px" />
          </div>

          {/* Login with phone number */}
          <form className="space-y-4">
            <input
              type="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full"
            />

            {/* CTA Button */}
            <Button
              className="py-2 rounded-lg w-full font-semibold transition-all"
            >
              Send Otp
            </Button>
          </form>


          {/* Divider */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-grow bg-gray-300 dark:bg-gray-700 h-px" />
            <span className="text-gray-500 dark:text-gray-400 text-sm">or</span>
            <div className="flex-grow bg-gray-300 dark:bg-gray-700 h-px" />
          </div>

          {/* Login Form */}
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full"
            />

            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent px-4 py-2 pr-10 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="right-3 absolute inset-y-0 flex items-center text-gray-500 dark:text-gray-400"
              >
                {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
              </button>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-indigo-500" />
                Remember Me
              </label>
              <a
                href="/forgot-password"
                className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* CTA Button */}
            <Button
              whileHover={{ scale: 1.05 }}
              className="py-2 rounded-lg w-full font-semibold transition-all"
            >
              Log In
            </Button>

            {/* Footer Links */}
            <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm text-center">
              Don’t have an account?{' '}
              <a
                href="/signup"
                className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Sign Up
              </a>
            </p>
          </form>
        </motion.div>
      </div>

      {/* Right Side: Re-engagement */}
      <div className="hidden relative lg:flex justify-center items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Image
            src="https://i.ibb.co/0VKSrvWt/A-relevant-uplifting-illustration-e-g-students-signup-form-Without-a-background-may-be-stable-with-d.png"
            width={400}
            height={300}
            alt="Login illustration"
            className="drop-shadow-lg mx-auto mb-6 w-72"
          />
          <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-2xl">
            Continue Your Learning Journey
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>📚 Your next lesson is waiting</li>
            <li>🎯 Pick up right where you left off</li>
            <li>🚀 Stay consistent and achieve your goals</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
