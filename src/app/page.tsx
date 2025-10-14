'use client'

import ContactNewsletter from '@/components/home/ContactNewsletter'
import FAQs from '@/components/home/FAQs'
import Hero from '@/components/shared/hero'
import MoreReasonsToJoin from '@/components/home/MoreReasonsToJoin'
import OurServices from '@/components/home/OurServices'
import PlatformStats from '@/components/home/PlatformStats'
import PopulerCourses from '@/components/home/populerCourses'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navber'
import Button from '@/components/shared/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home () {
  const NavLinks = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Courses', href: '/courses' },
    { id: 3, name: 'Pricing', href: '/subscription' },
    { id: 4, name: 'About', href: '/about' },
    { id: 5, name: 'Contact', href: '/contact' },
    { id: 6, name: 'Careers', href: '/careers' }
  ]
  return (
    <div>
      <Navbar />
      <main>
        <Hero>
          <div className='relative mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 max-w-7xl'>
            <div className='p-2 md:p-0'>
              <div className='hidden md:flex justify-center items-center m-5'>
                <motion.nav
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {NavLinks.map(link => (
                    <Link
                      key={link.id}
                      href={link.href}
                      className='p-4 font-semibold text-gray-400 text-lg'
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.nav>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="bg-[url('/banner.jpeg')] bg-cover bg-center rounded-2xl w-full h-130 sm:h-140"
              >
                <div className='mx-auto py-16 md:py-24 max-w-2xl text-center'>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className='mx-auto md:mx-0 max-w-xs md:max-w-2xl font-bold text-4xl lg:text-6xl leading-tight'
                  >
                    Unlimited notes, Live Classes, and more.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='mt-4 md:mt-2 text-xl md:text-2xl'
                  >
                    Start at Rs. 599, Cancel anytime.
                  </motion.p>

                  <div className='mt-4 md:mt-10'>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className='mt-1 text-md'
                    >
                      Ready to learn? Enter your email to join.
                    </motion.p>
                    <motion.form className='mt-8 md:mt-4'>
                      <input
                        placeholder='Enter your email.'
                        className='mx-2 px-4 py-2 border rounded-4xl w-64 md:w-80 text-lg'
                      ></input>
                      <Button
                        variant='primary'
                        className='mx-2 mt-5 md:mt-0 px-5 py-2 rounded-3xl text-gray-800 text-lg md:text-xl'
                      >
                        Get Started
                      </Button>
                    </motion.form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Hero>
        <PlatformStats />
        <PopulerCourses />
        <OurServices />
        <MoreReasonsToJoin />
        <FAQs />
        <ContactNewsletter />
      </main>
      <Footer />
    </div>
  )
}
