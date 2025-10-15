'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaUsers, FaHeart, FaGlobeAsia, FaRocket } from 'react-icons/fa'

const Images = [
  {id:1, url: 'https://i.ibb.co/ZRyPGyYP/Whats-App-Image-2025-10-08-at-12-24-08-PM-12.jpg'},
  {id:2, url: 'https://i.ibb.co/whR2MT66/Whats-App-Image-2025-10-08-at-12-24-08-PM-11.jpg'},
  {id:3, url: 'https://i.ibb.co/wrPYW3zj/Whats-App-Image-2025-10-08-at-12-24-08-PM-10.jpg'},
  {id:4, url: 'https://i.ibb.co/xS5qvMQ7/Whats-App-Image-2025-10-08-at-12-24-08-PM-8.jpg'},
  {id:5, url: 'https://i.ibb.co/WNnLbPrg/Whats-App-Image-2025-10-08-at-12-24-08-PM-9.jpg'},
  {id:6, url: 'https://i.ibb.co/Lhd3yP12/Whats-App-Image-2025-10-08-at-12-24-08-PM-7.jpg'},
  {id:7, url: 'https://i.ibb.co/zHh5PPFS/Whats-App-Image-2025-10-08-at-12-24-08-PM-6.jpg'},
  {id:8, url: 'https://i.ibb.co/rfcHjTDh/Whats-App-Image-2025-10-08-at-12-24-08-PM-2.jpg'},
  {id:9, url: 'https://i.ibb.co/dwP7cCX0/Whats-App-Image-2025-10-08-at-12-24-08-PM-5.jpg'}
]

export default function AboutPage() {
  return (
    <div className="pt-10 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto px-6 max-w-4xl"
        >
          <h1 className="mb-4 font-bold text-3xl md:text-5xl">
            Empowering Learners, Inspiring Change
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300 text-lg">
            At <strong>Sanchi Gyan</strong>, we’re reimagining education in Nepal — making it accessible, 
            engaging, and empowering for everyone through technology and passion.
          </p>
        </motion.div>

        {/* Soft Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="top-1/3 left-1/2 absolute bg-indigo-200/30 dark:bg-indigo-800/20 blur-3xl rounded-full w-[600px] h-[600px] -translate-x-1/2"></div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-5'>
        <div className="items-center gap-10 grid md:grid-cols-2 mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='grid grid-cols-3 col-span-2 border-[var(--primary)] border-2 rounded-2xl overflow-hidden'
          >
            
            {Images.map((img)=>(
              <Image
              key={img.id}
              src={img.url}
              alt="Our Mission"
              width={500}
              height={400}
              className="mx-auto"
            />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 font-bold text-3xl">Our Mission & Vision</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              We believe every learner deserves the chance to grow through 
              accessible, high-quality digital education in their own language. 
              Our mission is to simplify learning while creating opportunities for all.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Our vision is to empower 1 million learners across Nepal by building a 
              future-ready platform that bridges education and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5">
        <div className="mx-auto px-6 max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 font-bold text-3xl"
          >
            Our Core Values
          </motion.h2>

          <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FaHeart size={30} />,
                title: 'Passion for Learning',
                text: 'We put love and purpose into everything we create to inspire learners daily.'
              },
              {
                icon: <FaUsers size={30} />,
                title: 'Community First',
                text: 'We grow together with our learners, educators, and creators.'
              },
              {
                icon: <FaGlobeAsia size={30} />,
                title: 'Accessibility',
                text: 'Education should be available to everyone, regardless of background.'
              },
              {
                icon: <FaRocket size={30} />,
                title: 'Innovation',
                text: 'We continuously evolve to provide the most effective learning experience.'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 shadow hover:shadow-xl p-8 rounded-2xl transition-all"
              >
                <div className="flex justify-center mb-4 text-indigo-600 dark:text-[var(--primary)]">
                  {value.icon}
                </div>
                <h3 className="mb-2 font-semibold text-xl">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 overflow-hidden text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto px-6 max-w-3xl"
        >
          <h2 className="mb-4 font-bold text-4xl">Join Our Journey</h2>
          <p className="mb-8 text-lg">
            Together, let’s redefine the future of learning in Nepal.  
            Explore career opportunities or connect with our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/career"
              className="bg-white shadow hover:shadow-lg px-8 py-3 rounded-full font-semibold text-indigo-600 transition-all"
            >
              View Careers
            </a>
            <a
              href="/contact"
              className="hover:bg-white px-8 py-3 border border-white rounded-full font-semibold hover:text-indigo-600 transition-all"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
