'use client'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'
import Button from '../shared/button'
import Link from 'next/link'

export const JOBS = [
  {
    _id: '68de6dc68a24c4ae6e7ed950',
    title: 'Mathematics Teacher',
    department: 'Academic',
    type: 'Full-time',
    location: 'Kathmandu / Remote',
    experience: '2+ years',
    salary: '₨ 40,000 - ₨ 60,000',
    deadline: '2024-03-15',
    description:
      'Join our academic team to deliver exceptional mathematics education to students in classes 8–10. Free comprehensive training provided for qualified candidates.',
    responsibilities: [
      'Deliver engaging mathematics lessons for classes 8–10 students',
      'Create and develop interactive learning materials and lesson plans',
      'Conduct regular assessments and provide constructive feedback',
      'Participate in curriculum development and improvement',
      'Provide one-on-one support to students when needed'
    ],
    requirements: [
      'B.Ed. in Mathematics or related field',
      'Teaching License preferred',
      'Strong communication skills',
      'Passion for teaching and technology'
    ],
    benefits: [
      'Free Teacher Training',
      'Flexible Working Hours',
      'Professional Development',
      'Health Insurance',
      'Performance Bonus'
    ],
    urgency: 'high',
    featured: true
  },
  {
    _id: '68de6dc68a24c4ae6e7ed951',
    title: 'Science Teacher',
    department: 'Academic',
    type: 'Full-time',
    location: 'Pokhara / Remote',
    experience: '1+ year',
    salary: '₨ 35,000 - ₨ 55,000',
    deadline: '2024-03-18',
    description:
      'Deliver interactive science lessons using modern teaching methodologies. Free training program included.',
    responsibilities: [
      'Plan and deliver science lessons aligned with the curriculum',
      'Incorporate experiments and practical learning',
      'Track student progress and provide feedback'
    ],
    requirements: [
      'Bachelor’s degree in Science or Education',
      'Strong communication and presentation skills'
    ],
    benefits: [
      'Free Teacher Training',
      'Technology-enabled Classrooms',
      'Performance-Based Rewards'
    ],
    urgency: 'medium',
    featured: true
  },
  {
    _id: '68de6dc68a24c4ae6e7ed952',
    title: 'Digital Marketer',
    department: 'Marketing',
    type: 'Part-time',
    location: 'Remote',
    experience: '1–3 years',
    salary: '₨ 25,000 - ₨ 45,000',
    deadline: '2024-03-25',
    description:
      'Create and manage digital campaigns across social platforms to grow brand awareness. Training provided for new joiners.',
    responsibilities: [
      'Plan and execute digital marketing campaigns',
      'Optimize social media content and ad performance',
      'Report on engagement and conversions'
    ],
    requirements: [
      'Basic understanding of SEO, Google Ads, and Meta Ads',
      'Creative mindset and analytical thinking'
    ],
    benefits: [
      'Free Digital Marketing Training',
      'Remote Work Flexibility',
      'Performance Incentives'
    ],
    urgency: 'medium',
    featured: false
  },
  {
    _id: '68de6dc68a24c4ae6e7ed953',
    title: 'Direct Marketer',
    department: 'Sales',
    type: 'Full-time',
    location: 'Kathmandu',
    experience: 'Fresher Accepted',
    salary: '₨ 20,000 + Commission',
    deadline: '2024-03-12',
    description:
      'Engage with clients directly to promote educational programs. Free marketing and communication training provided.',
    responsibilities: [
      'Interact with potential customers and explain services',
      'Achieve monthly sales targets',
      'Maintain customer satisfaction'
    ],
    requirements: [
      'Excellent interpersonal skills',
      'Self-motivated and goal-oriented'
    ],
    benefits: [
      'Free Communication Training',
      'Attractive Incentives',
      'Career Growth Opportunities'
    ],
    urgency: 'high',
    featured: true
  },
  {
    _id: '68de6dc68a24c4ae6e7ed954',
    title: 'Video Editor',
    department: 'Creative',
    type: 'Full-time',
    location: 'Lalitpur / Remote',
    experience: '2+ years',
    salary: '₨ 40,000 - ₨ 65,000',
    deadline: '2024-03-22',
    description:
      'Create high-quality educational videos for our learning platform and social media channels.',
    responsibilities: [
      'Edit video content using Adobe Premiere Pro or DaVinci Resolve',
      'Add graphics, transitions, and audio effects',
      'Collaborate with content creators'
    ],
    requirements: [
      'Proficiency in video editing tools',
      'Creative storytelling ability'
    ],
    benefits: ['Creative Freedom', 'Remote Flexibility', 'Performance Bonuses'],
    urgency: 'low',
    featured: false
  },
  {
    _id: '68de6dc68a24c4ae6e7ed955',
    title: 'Animator',
    department: 'Creative',
    type: 'Full-time',
    location: 'Remote',
    experience: '1–3 years',
    salary: '₨ 35,000 - ₨ 60,000',
    deadline: '2024-03-28',
    description:
      'Design engaging animations for educational content and promotional campaigns.',
    responsibilities: [
      'Create 2D/3D animations',
      'Collaborate with video editors and designers',
      'Ensure brand consistency'
    ],
    requirements: [
      'Experience with After Effects or Blender',
      'Strong artistic sense'
    ],
    benefits: ['Remote Work', 'Creative Growth', 'Incentive Programs'],
    urgency: 'medium',
    featured: false
  },
  {
    _id: '68de6dc68a24c4ae6e7ed956',
    title: 'Trainer',
    department: 'Learning & Development',
    type: 'Full-time',
    location: 'Kathmandu / Hybrid',
    experience: '3+ years',
    salary: '₨ 50,000 - ₨ 70,000',
    deadline: '2024-03-10',
    description:
      'Lead skill development sessions for teachers and marketers. Free refresher training programs included.',
    responsibilities: [
      'Deliver structured training programs',
      'Monitor trainee performance',
      'Update content as per new methodologies'
    ],
    requirements: [
      'Excellent communication & leadership skills',
      'Experience in training or coaching'
    ],
    benefits: [
      'Free Training Certifications',
      'Performance Rewards',
      'Career Growth'
    ],
    urgency: 'high',
    featured: true
  },
  {
    _id: '68de6dc68a24c4ae6e7ed957',
    title: 'Graphic Designer',
    department: 'Creative',
    type: 'Part-time',
    location: 'Remote',
    experience: '1+ year',
    salary: '₨ 25,000 - ₨ 40,000',
    deadline: '2024-03-26',
    description:
      'Design impactful graphics for social media, courses, and marketing campaigns.',
    responsibilities: [
      'Create visual designs and illustrations',
      'Collaborate with marketing and content teams'
    ],
    requirements: [
      'Proficiency in Adobe Photoshop and Illustrator',
      'Creative and detail-oriented'
    ],
    benefits: ['Creative Environment', 'Remote Work Flexibility'],
    urgency: 'low',
    featured: false
  }
]

export default function JobsBoard () {
  const [query, setQuery] = useState('')
  const [department, setDepartment] = useState('All')
  const [location, setLocation] = useState('All')
  const [isRemoteOnly, setIsRemoteOnly] = useState(false)
  const [type, setType] = useState('All')
  const [page, setPage] = useState(1)
  const pageSize = 6

  const departments = useMemo(
    () => ['All', ...Array.from(new Set(JOBS.map(j => j.department)))],
    []
  )
  const locations = useMemo(
    () => ['All', ...Array.from(new Set(JOBS.map(j => j.location)))],
    []
  )

  const filtered = useMemo(() => {
    return JOBS.filter(j => {
      if (isRemoteOnly && j.location !== 'Remote') return false
      if (department !== 'All' && j.department !== department) return false
      if (location !== 'All' && j.location !== location) return false
      if (type !== 'All' && j.type !== type) return false
      const q = query.trim().toLowerCase()
      if (q) {
        return (
          j.title.toLowerCase().includes(q) ||
          j.department.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [query, department, location, isRemoteOnly, type])

  const pages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize)

  return (
    <section id='jobs' className='py-16'>
      <div className='mx-auto px-6 max-w-7xl'>
        <div className='flex md:flex-row flex-col md:justify-between md:items-center gap-4 mb-6'>
          <div>
            <h3 className='font-bold text-gray-900 dark:text-white text-3xl'>
              Open Roles
            </h3>
            <p className='mt-1 text-gray-500 dark:text-gray-300'>
              Filter by team, location, or role type — find your fit quickly.
            </p>
          </div>

          <div className='flex items-center gap-3'>
            <div className='relative'>
              <FaSearch className='top-1/2 left-3 absolute text-gray-400 -translate-y-1/2' />
              <input
                value={query}
                onChange={e => {
                  setQuery(e.target.value)
                  setPage(1)
                }}
                placeholder='Search roles or teams...'
                className='bg-gray-50 dark:bg-gray-800 py-2 pr-4 pl-10 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-[var(--primary)] focus:ring-2 w-64 text-sm'
              />
            </div>

            <button
              onClick={() => {
                setQuery('')
                setDepartment('All')
                setLocation('All')
                setIsRemoteOnly(false)
                setType('All')
              }}
              className='px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm'
            >
              Reset
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className='flex md:flex-row flex-col md:justify-between md:items-center gap-4 mb-6'>
          <div className='flex flex-wrap gap-3'>
            <select
              title='filter'
              value={department}
              onChange={e => {
                setDepartment(e.target.value)
                setPage(1)
              }}
              className='bg-white dark:bg-gray-800 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm'
            >
              {departments.map(t => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <select
              title='filter'
              value={location}
              onChange={e => {
                setLocation(e.target.value)
                setPage(1)
              }}
              className='bg-white dark:bg-gray-800 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm'
            >
              {locations.map(l => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>

            <select
              title='filter'
              value={type}
              onChange={e => {
                setType(e.target.value)
                setPage(1)
              }}
              className='bg-white dark:bg-gray-800 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm'
            >
              <option>All</option>
              <option>Full-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>

            <label className='inline-flex items-center gap-2 text-sm'>
              <input
                type='checkbox'
                checked={isRemoteOnly}
                onChange={e => {
                  setIsRemoteOnly(e.target.checked)
                  setPage(1)
                }}
                className='rounded'
              />
              <span className='text-gray-600 dark:text-gray-300'>
                Remote only
              </span>
            </label>
          </div>

          <div className='text-gray-500 dark:text-gray-300 text-sm'>
            Showing{' '}
            <span className='font-medium text-gray-900 dark:text-white'>
              {filtered.length}
            </span>{' '}
            roles
          </div>
        </div>

        {/* Results */}
        <div className='gap-6 grid sm:grid-cols-2'>
          {visible.length === 0 && (
            <div className='col-span-full p-8 border border-gray-200 dark:border-gray-700 border-dashed rounded-xl text-center'>
              <p className='text-gray-500'>
                No roles matched your filters. Try clearing filters or
                broadening your search.
              </p>
            </div>
          )}

          {visible.map(job => (
            <motion.div
              key={job._id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className='bg-white dark:bg-gray-800 shadow-md p-6 border border-gray-100 dark:border-gray-700 rounded-2xl'
            >
              <div className='flex justify-between items-start gap-4'>
                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-white text-lg'>
                    {job.title}
                  </h4>
                  <div className='mt-1 text-gray-500 text-sm'>
                    {job.department} • {job.location}
                  </div>
                </div>
                <div className='text-gray-500 text-sm'>{job.experience}</div>
              </div>

              <div className='flex justify-between items-center gap-4 mt-4'>
                <div className='flex items-center gap-2'>
                  <span className='bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs'>
                    {job.type}
                  </span>
                </div>
                <div className='flex gap-2'>
                  <Button
                    variant='primary'
                    className='px-4 py-2 border border-gray-900 dark:border-gray-700 rounded-full text-gray-900 text-sm'
                  >
                    <Link href={`/careers/${job._id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className='flex justify-center items-center gap-3 mt-8'>
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className='px-3 py-2 border rounded-md'
          >
            {'‹'}
          </button>
          <span className='bg-gray-50 dark:bg-gray-800 px-4 py-2 border rounded-md'>
            {page} / {pages}
          </span>
          <button
            onClick={() => setPage(p => Math.min(pages, p + 1))}
            disabled={page === pages}
            className='px-3 py-2 border rounded-md'
          >
            {'›'}
          </button>
        </div>
      </div>
    </section>
  )
}
