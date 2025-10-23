'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from '../../../public/logo.png'
import Button from '../shared/button'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

interface NavLink {
  id: number
  name: string
  href: string
  requiresAuth?: boolean
  role?: string[]
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { user } = useAuth()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const getDashboardHref = () => {
    if (!user?.role) return '/login' // Default fallback

    switch (user.role.toLowerCase()) {
      case 'admin':
        return '/admin'
      case 'student':
        return '/student'
      case 'teacher':
        return '/teacher'
      default:
        return '/dashboard'
    }
  }

  const getNavLinks = (): NavLink[] => [
    { id: 1, name: 'Home', href: '/' },
    { id: 2,
      name: 'Courses',
      href: '/courses',
      requiresAuth: true,
      role: ['USER']
    },
    { id: 3,
      name: 'Pricing',
      href: '/subscription',
      requiresAuth: true, 
      role: ['USER']
    },
    { id: 4, name: 'About', href: '/about' },
    { id: 5, name: 'Contact', href: '/contact' },
    { id: 6, name: 'Careers', href: '/careers' },
    {
      id: 7,
      name: 'Dashboard',
      href: getDashboardHref(),
      requiresAuth: true,
      role: ['ADMIN', 'STUDENT', 'TEACHER']
    }
  ]

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setScrolled(true)
      else setScrolled(false)
    }

    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  const hiddenRoutes = [
    '/signup',
    '/login',
    '/forgot-password',
    '/reset-password'
  ]

  const shouldHide = hiddenRoutes.includes(pathname)

  // Filter links based on auth status and optionally roles
  const filteredLinks = getNavLinks().filter(link => {
    // If link doesn't require auth, show it to everyone
    if (!link.requiresAuth) return true

    // If link requires auth but user is not logged in, hide it
    if (link.requiresAuth && !user) return false

    // If link has specific role requirements, check them
    if (link.role && !link.role.includes(user?.role || '')) {
      return false
    }

    if (hiddenRoutes.includes(pathname)) return false
    
    // If no role requirements, show to all authenticated users
    return true
  })
  console.log(user);

  return (
    <nav
      className={`z-50 fixed w-full transition-all duration-300 bg-white dark:bg-black ${
        pathname === '/'
          ? scrolled
            ? 'shadow-md py-1'
            : 'bg-transparent py-5'
          : 'bg-black py-1'
      }`}
    >
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center space-x-1'>
            <Link href='/' className='flex flex-shrink-0 items-center'>
              <Image src={Logo} width={70} height={70} alt='Sanchi Gyan' />
            </Link>
            <h1 className='font-semibold text-2xl xl:text-3xl'>Sanchi Gyan</h1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-4'>
            <div
              className={`${
                pathname === '/' ? (scrolled ? 'flex ' : 'hidden') : 'flex '
              }`}
            >
              {filteredLinks.map(link => (
                <Link
                  key={link.id}
                  href={link.href}
                  className='p-1 lg:p-5 font-semibold text-gray-00 dark:text-gray-400 text-lg'
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className={`${shouldHide ? 'hidden' : 'flex space-x-4'}`}>
              {isMounted && user? (
                <></>
              ) : (
                <Link href='/login'>
                  <Button variant='secondary' className='px-4 py-2 rounded-4xl'>
                    Log in
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden flex items-center'>
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
        <div className='md:hidden dark:bg-black'>
          <div className='space-y-1 shadow-lg px-2 sm:px-3 pt-2 pb-3'>
            {filteredLinks.map(link => {
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className='block px-3 py-2 rounded-md font-medium text-base'
                >
                  {link.name}
                </Link>
              )
            })}
            <div className='pt-4 pb-3 border-gray-200 border-t'>
              <Link href='login'>
                <Button className='bg-[var(--primary)] px-4 py-2 rounded-md w-full font-semibold text-sm'>
                  Log in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
