"use client"
import CardCarousel from '../CardCarousel'
import SectionTitle from '../shared/SectionTitle'

export default function PopulerCourses () {
  return (
    <div className='py-10'>
      <SectionTitle
        title='Popular Courses'
        subtitle='Discover top courses designed for high school students in Nepal to learn, grow, and succeed.'
      />
      <CardCarousel />
    </div>
  )
}
