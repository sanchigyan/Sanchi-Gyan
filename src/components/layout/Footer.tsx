"use client"
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Logo from '../../../public/logo.png'
import Button from "../shared/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 md:py-16 text-gray-300">
      <div className="gap-10 grid sm:grid-cols-2 lg:grid-cols-4 mx-auto px-2 md:px-6 max-w-6xl">
        
        {/* Brand Info */}
        <div>
          <div className='flex items-center space-x-1'>
            <Link href='/' className='flex flex-shrink-0 items-center'>
              <Image
                src={Logo}
                width={50}
                height={50}
                alt='Sanchi Gyan'
              />
            </Link>
            <h1 className='font-semibold text-xl'>Sanchi Gyan</h1>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Empowering students with smart, flexible, and affordable online learning.
          </p>
          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="bg-gray-800 hover:bg-[var(--primary)] p-2 rounded-full transition-colors"
              >
                <Icon className="text-white" />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-semibold text-white text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-indigo-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-indigo-400">About Us</Link></li>
            <li><Link href="/courses" className="hover:text-indigo-400">Courses</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-400">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="mb-4 font-semibold text-white text-lg">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/blog" className="hover:text-indigo-400">Blog</Link></li>
            <li><Link href="/FAQs" className="hover:text-indigo-400">FAQs</Link></li>
            <li><Link href="/support" className="hover:text-indigo-400">Support</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-4 font-semibold text-white text-lg">Stay Updated</h3>
          <p className="mb-4 text-gray-400">Subscribe to our newsletter to never miss an update.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 px-4 py-2 rounded-l-xl outline-none text-white"
            />
            <Button variant="secondary" className="px-4 py-2 rounded-r-xl transition-all">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-gray-800 border-t text-gray-500 text-center">
        © {new Date().getFullYear()} Sanchi Gyan. All rights reserved.
      </div>
    </footer>
  );
}
