import {
  FaChalkboardTeacher,
  FaHeadset,
  FaChartLine,
  FaDollarSign
} from 'react-icons/fa'
import SectionTitle from '../shared/SectionTitle'

export default function MoreReasonsToJoin () {
  const reasons = [
    {
      title: 'Expert-Led Curriculum',
      desc: 'Learn directly from experienced instructors who craft real-world-ready content.',
      icon: <FaChalkboardTeacher />,
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      title: 'Personalized Learning Path',
      desc: "Our adaptive system tailors lessons to each student's pace and strengths.",
      icon: <FaChartLine />,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: '24/7 Mentor Support',
      desc: 'Get instant guidance and feedback anytime from our expert mentors.',
      icon: <FaHeadset />,
      color: 'from-pink-500 to-indigo-500'
    },
    {
      title: 'Affordable & Accessible',
      desc: 'Enjoy premium education without breaking the bank — learn anytime, anywhere.',
      icon: <FaDollarSign />,
      color: 'from-green-500 to-indigo-500'
    }
  ]

  return (
    <section className='py-5'>
      <div className='px-2 md:px-0'>
        <SectionTitle
          title='More Reasons to Join Us'
          subtitle='Discover why thousands of students trust our platform to reach their goals.'
        />
      </div>

      <div className='gap-10 grid sm:grid-cols-2 lg:grid-cols-4 mx-auto px-6 max-w-6xl'>
        {reasons.map((item, index) => (
          <div
            key={index}
            className='group relative bg-white dark:bg-gray-800 shadow-md p-8 border border-gray-100 dark:border-gray-700 rounded-2xl transition-all hover:-translate-y-2 duration-500'
          >
            <div
              className={`text-4xl text-white p-4 rounded-xl mb-5 inline-flex bg-gradient-to-r ${item.color} shadow-lg transition-all duration-500 group-hover:scale-110`}
            >
              {item.icon}
            </div>
            <h3 className='mb-2 font-semibold text-gray-900 dark:text-white text-xl'>
              {item.title}
            </h3>
            <p className='text-gray-500 dark:text-gray-400 leading-relaxed'>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
