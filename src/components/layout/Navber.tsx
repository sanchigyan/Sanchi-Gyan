'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from '../../../public/logo/logo.jpeg'
import Button from '../shared/button'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const NavLinks = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Courses', href: '/courses' },
    { id: 3, name: 'Pricing', href: '/subscription' },
    { id: 4, name: 'About', href: '/about' },
    { id: 5, name: 'Contact', href: '/contact' },
    { id: 6, name: 'Careers', href: '/careers' }
  ]

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setScrolled(true)
      else setScrolled(false)
    }

   if(pathname === '/') {
     window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
   }
  }, [pathname])

  return (
    <nav
      className={`z-50 fixed w-full transition-all duration-300 bg-black ${
        pathname === '/' ? (scrolled ? 'shadow-md py-2' : 'bg-transparent py-5'): 'bg-black py-2'
      }`}
    >
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link href='/' className='flex flex-shrink-0 items-center'>
              <Image
                className='rounded-full'
                src={Logo}
                width={50}
                height={50}
                alt='Sanchi Gyan'
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-4'>
            <div
              className={`${
                pathname === '/' ? (scrolled ? 'flex space-x-2' : 'hidden') : 'flex space-x-2'
              }`}
            >
              {NavLinks.map(link => (
                <Link
                  key={link.id}
                  href={link.href}
                  className='p-5 font-semibold text-gray-400 text-lg'
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className='flex space-x-4'>
              <Link href='/register'>
                <Button variant='secondary' className='px-4 py-2 rounded-4xl'>
                  Sign in
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              title='Toggle Menu'
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex justify-center items-center p-2 rounded-md focus:outline-none text-gray-700 hover:text-indigo-600'
            >
              <svg
                className='w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='space-y-1 bg-white shadow-lg px-2 sm:px-3 pt-2 pb-3'>
            {NavLinks.map(link => {
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className='block px-3 py-2 rounded-md font-medium text-gray-700 hover:text-indigo-600 text-base'
                >
                  {link.name}
                </Link>
              )
            })}
            <div className='pt-4 pb-3 border-gray-200 border-t'>
              <button className='bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md w-full font-medium text-white text-sm'>
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
