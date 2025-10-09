"use client"
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Logo from '../../../public/logo/logo.jpeg'
import Button from "../shared/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-gray-300">
      <div className="gap-10 grid sm:grid-cols-2 lg:grid-cols-4 mx-auto px-6 max-w-6xl">
        
        {/* Brand Info */}
        <div>
          <div className="flex justify-around items-center">
            <Image
                className='rounded-full'
                src={Logo}
                width={50}
                height={50}
                alt='Sanchi Gyan'
              />
            <h2 className="mb-3 font-bold text-white text-2xl">Sanchi Gyan</h2>
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
            <li><a href="#" className="hover:text-indigo-400">Home</a></li>
            <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-400">Courses</a></li>
            <li><a href="#" className="hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="mb-4 font-semibold text-white text-lg">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
            <li><a href="#" className="hover:text-indigo-400">FAQs</a></li>
            <li><a href="#" className="hover:text-indigo-400">Support</a></li>
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
        © {new Date().getFullYear()} Sahchi Gyan. All rights reserved.
      </div>
    </footer>
  );
}
