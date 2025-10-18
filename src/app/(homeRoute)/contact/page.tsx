'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaComments
} from 'react-icons/fa'
import Link from 'next/link'
import Button from '@/components/shared/button'

export default function ContactPage () {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <div className='pt-10 text-gray-800 dark:text-gray-100'>
      {/* Hero Section */}
      <section className='relative pt-24 pb-16 overflow-hidden text-center'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='mx-auto px-6 max-w-3xl'
        >
          <h1 className='mb-4 font-bold text-5xl'>We&apos;re Here to Help</h1>
          <p className='mb-8 text-gray-600 dark:text-gray-300 text-lg'>
            Have a question, suggestion, or need support? Reach out to us —
            we&apos;re always ready to assist you on your learning journey.
          </p>
          <a
            href='#contact-form'
            className='inline-block bg-[var(--primary)] shadow-lg hover:shadow-xl px-8 py-3 rounded-full font-semibold text-black transition-all'
          >
            Send a Message
          </a>
        </motion.div>

        {/* Soft Background Glow */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='top-1/3 left-1/2 absolute dark:bg-indigo-800/20 blur-3xl rounded-full w-[600px] h-[600px] -translate-x-1/2'></div>
        </div>
      </section>

      {/* Help Tabs */}
      <section className='py-5'>
        <div className='mx-auto px-6 max-w-6xl text-center'>
          <h2 className='mb-10 font-bold text-3xl'>How Can We Help You?</h2>
          <div className='gap-8 grid md:grid-cols-2 lg:grid-cols-4'>
            {[
              {
                title: 'General Inquiries',
                icon: <FaComments size={26} />,
                text: 'For questions about courses, features, or partnerships.',
                contact: 'info@sanchigyan.com'
              },
              {
                title: 'Technical Support',
                icon: <FaEnvelope size={26} />,
                text: 'For login, playback, or payment issues.',
                contact: 'support@sanchigyan.com'
              },
              {
                title: 'Billing & Payments',
                icon: <FaPhoneAlt size={26} />,
                text: 'For refunds, invoices, and payment questions.',
                contact: 'payments@sanchigyan.com'
              },
              {
                title: 'Become an Instructor',
                icon: <FaMapMarkerAlt size={26} />,
                text: 'Join our instructor community and start teaching.',
                contact: '/become-instructor'
              }
            ].map((tab, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className='bg-indigo-50/40 dark:bg-gray-800 shadow hover:shadow-lg p-8 rounded-2xl transition-all'
              >
                <div className='flex justify-center mb-4 text-[var(--primary)]'>
                  {tab.icon}
                </div>
                <h3 className='mb-2 font-semibold text-xl'>{tab.title}</h3>
                <p className='mb-3 text-gray-600 dark:text-gray-300'>
                  {tab.text}
                </p>
                {tab.contact.startsWith('/') ? (
                  <a
                    href={tab.contact}
                    className='font-medium text-indigo-600 hover:underline'
                  >
                    Learn More →
                  </a>
                ) : (
                  <a
                    href={`mailto:${tab.contact}`}
                    className='font-medium text-indigo-600 hover:underline'
                  >
                    {tab.contact}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id='contact-form' className='py-5'>
        <div className='mx-auto px-6 max-w-4xl text-center'>
          <h2 className='mb-8 font-bold text-3xl'>Send Us a Message</h2>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className='gap-6 grid bg-white dark:bg-gray-800 shadow-xl p-8 rounded-2xl text-left'
            >
              <div>
                <label className='block mb-2 font-semibold'>Full Name *</label>
                <input
                  title='full name'
                  type='text'
                  required
                  className='bg-transparent px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full'
                />
              </div>
              <div>
                <label className='block mb-2 font-semibold'>
                  Email Address *
                </label>
                <input
                  title='email'
                  type='email'
                  required
                  className='bg-transparent px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full'
                />
              </div>
              <div>
                <label className='block mb-2 font-semibold'>Subject *</label>
                <select
                  title='subject'
                  className='bg-transparent px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full'
                >
                  <option>General Question</option>
                  <option>Technical Issue</option>
                  <option>Billing</option>
                  <option>Partnership</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className='block mb-2 font-semibold'>Phone Number</label>
                <input
                  title='phone'
                  type='tel'
                  className='bg-transparent px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full'
                />
              </div>
              <div>
                <label className='block mb-2 font-semibold'>Message *</label>
                <textarea
                  required
                  placeholder='Please describe your inquiry in detail...'
                  className='bg-transparent px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-full h-32 resize-none'
                />
              </div>
              <Button
                type='submit'
                className='py-3 rounded-lg font-semibold transition-all'
              >
                Send Message
              </Button>
            </form>
          ) : (
            <div className='text-center'>
              <div className='mb-4 text-green-500 text-5xl'>✅</div>
              <h3 className='mb-2 font-semibold text-2xl'>
                Thank you for your message!
              </h3>
              <p className='text-gray-600 dark:text-gray-300'>
                We&apos;ve received it and will get back to you within 24 hours.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Other Ways to Reach Us */}
      <section className='py-5'>
        <div className='mx-auto px-6 max-w-6xl text-center'>
          <h2 className='mb-12 font-bold text-3xl'>Other Ways to Reach Us</h2>
          <div className='gap-10 grid sm:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                icon: <FaComments size={28} />,
                title: 'Live Chat',
                details:
                  'Get instant help during business hours (9 AM - 5 PM NPT, Sun-Fri).',
                action: 'Start Chat'
              },
              {
                icon: <FaPhoneAlt size={28} />,
                title: 'Call Us',
                details: 'Speak directly with our support team.',
                action: '+977-1-4567890'
              },
              {
                icon: <FaMapMarkerAlt size={28} />,
                title: 'Our Office',
                details:
                  'Sanchi Gyan Pvt. Ltd., Kathmandu, Nepal (By appointment only)',
                action: 'Get Directions'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className='bg-indigo-50/40 dark:bg-gray-800 shadow hover:shadow-lg p-8 rounded-2xl transition-all'
              >
                <div className='flex justify-center mb-4 text-[var(--primary)]'>
                  {item.icon}
                </div>
                <h3 className='mb-2 font-semibold text-xl'>{item.title}</h3>
                <p className='mb-4 text-gray-600 dark:text-gray-300'>
                  {item.details}
                </p>
                <button className='font-medium text-indigo-600 hover:underline'>
                  {item.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className='py-5 dark:text-white text-center'>
        <h2 className='mb-6 font-bold text-3xl'>Follow Us for Updates</h2>
        <p className='mb-6 text-lg'>
          Get learning tips, course updates, and more on our social channels.
        </p>
        <div className='flex justify-center gap-6 text-2xl'>
          {[FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTiktok].map(
            (Icon, i) => (
              <Link
                key={i}
                href='#'
                target='_blank'
                className='hover:text-gray-200 transition-all'
              >
                <Icon />
              </Link>
            )
          )}
        </div>
      </section>
    </div>
  )
}
