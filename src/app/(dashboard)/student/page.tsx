'use client'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Calendar,
  Award,
  TrendingUp,
  Clock,
  PlayCircle,
  FileText,
  Target,
  Star,
  ChevronRight,
  BarChart3
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

import ProtectedRoute from '@/components/auth/ProtectedRoute'
import Button from '@/components/shared/button'

const currentCourses = [
  {
    id: 1,
    title: 'Mathematics Grade 10',
    instructor: 'Dr. Anil Sharma',
    progress: 75,
    nextClass: 'Today, 2:00 PM',
    assignmentsDue: 2,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 2,
    title: 'Science Explorers',
    instructor: 'Prof. Maya Gurung',
    progress: 60,
    nextClass: 'Tomorrow, 10:00 AM',
    assignmentsDue: 1,
    color: 'from-green-500 to-emerald-400'
  },
  {
    id: 3,
    title: 'English Mastery',
    instructor: 'Mr. Ramesh Adhikari',
    progress: 45,
    nextClass: 'Today, 4:00 PM',
    assignmentsDue: 0,
    color: 'from-purple-500 to-violet-400'
  }
]

const upcomingClasses = [
  {
    time: '10:00 AM',
    subject: 'Mathematics',
    topic: 'Algebra Basics',
    duration: '45 min'
  },
  {
    time: '11:30 AM',
    subject: 'Science',
    topic: 'Chemical Reactions',
    duration: '60 min'
  },
  {
    time: '2:00 PM',
    subject: 'English',
    topic: 'Grammar Review',
    duration: '45 min'
  },
  {
    time: '4:00 PM',
    subject: 'Social Studies',
    topic: 'Nepali History',
    duration: '30 min'
  }
]

const recentAchievements = [
  {
    title: 'Math Quiz Champion',
    description: 'Scored 95% in Algebra Quiz',
    icon: Award,
    color: 'text-yellow-500'
  },
  {
    title: 'Perfect Attendance',
    description: '1 month perfect attendance',
    icon: Target,
    color: 'text-green-500'
  },
  {
    title: 'Fast Learner',
    description: 'Completed 5 chapters in 2 days',
    icon: TrendingUp,
    color: 'text-blue-500'
  }
]

const quickStats = [
  { label: 'Courses Enrolled', value: '8', icon: BookOpen, change: '+2' },
  { label: 'Hours Studied', value: '156', icon: Clock, change: '+12h' },
  { label: 'Assignments', value: '24', icon: FileText, change: '3 due' },
  { label: 'Average Grade', value: 'A-', icon: Award, change: '+5%' }
]

export default function StudentDashboard () {
  return (
    <ProtectedRoute allowedRoles={['STUDENT']}>
      <div className='bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 min-h-screen'>
        <div className='mx-auto px-6 py-8 max-w-7xl'>
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='gap-6 grid grid-cols-2 lg:grid-cols-4 mb-8'
          >
            {quickStats.map((stat, index) => (
              <Card
                key={index}
                className='bg-white/80 shadow-lg hover:shadow-xl backdrop-blur-sm border-0 transition-all duration-300'
              >
                <CardContent className='p-6'>
                  <div className='flex justify-between items-start'>
                    <div>
                      <p className='mb-1 font-medium text-gray-600 text-sm'>
                        {stat.label}
                      </p>
                      <div className='flex items-baseline gap-2'>
                        <h3 className='font-bold text-gray-900 text-2xl'>
                          {stat.value}
                        </h3>
                        <span className='bg-green-50 px-2 py-1 rounded-full font-medium text-green-500 text-xs'>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className='bg-gradient-to-r from-[#39f869] to-[#1be1a9] p-3 rounded-2xl'>
                      <stat.icon className='w-5 h-5 text-white' />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <div className='gap-8 grid lg:grid-cols-3'>
            {/* Left Column - Courses & Progress */}
            <div className='space-y-8 lg:col-span-2'>
              {/* Current Courses */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className='bg-white/80 shadow-lg backdrop-blur-sm border-0'>
                  <CardHeader className='flex flex-row justify-between items-center pb-4'>
                    <div>
                      <CardTitle className='font-bold text-xl'>
                        My Courses
                      </CardTitle>
                      <CardDescription>
                        Continue your learning journey
                      </CardDescription>
                    </div>
                    <Button
                      variant='secondary'
                      className='text-[#06a6ae] hover:text-[#059298]'
                    >
                      View All <ChevronRight className='ml-1 w-4 h-4' />
                    </Button>
                  </CardHeader>
                  <CardContent className='space-y-6'>
                    {currentCourses.map((course, index) => (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className='group flex items-center gap-4 hover:bg-[#06a6ae]/5 p-4 border border-gray-100 hover:border-[#06a6ae]/20 rounded-xl transition-all duration-300'
                      >
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <BookOpen className='w-6 h-6 text-white' />
                        </div>
                        <div className='flex-1 min-w-0'>
                          <div className='flex justify-between items-start mb-2'>
                            <h3 className='font-semibold text-gray-900 truncate'>
                              {course.title}
                            </h3>
                            <Badge
                              variant='secondary'
                              className='bg-blue-50 text-blue-600'
                            >
                              {course.progress}%
                            </Badge>
                          </div>
                          <p className='mb-2 text-gray-600 text-sm'>
                            {course.instructor}
                          </p>
                          <div className='space-y-2'>
                            <Progress value={course.progress} className='h-2' />
                            <div className='flex justify-between items-center text-gray-500 text-xs'>
                              <span>Next: {course.nextClass}</span>
                              {course.assignmentsDue > 0 && (
                                <span className='font-medium text-orange-600'>
                                  {course.assignmentsDue} assignment(s) due
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Performance Chart */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className='bg-white/80 shadow-lg backdrop-blur-sm border-0'>
                  <CardHeader>
                    <CardTitle className='font-bold text-xl'>
                      Learning Progress
                    </CardTitle>
                    <CardDescription>
                      Your performance across all subjects
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='flex justify-center items-center bg-gradient-to-br from-slate-50 to-blue-50 border border-gray-200 rounded-xl h-64'>
                      <div className='text-center'>
                        <BarChart3 className='mx-auto mb-4 w-12 h-12 text-gray-400' />
                        <p className='text-gray-500'>
                          Performance chart visualization
                        </p>
                        <p className='text-gray-400 text-sm'>
                          Weekly progress tracking
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Column - Schedule & Achievements */}
            <div className='space-y-8'>
              {/* Today's Schedule */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className='bg-white/80 shadow-lg backdrop-blur-sm border-0'>
                  <CardHeader className='pb-4'>
                    <CardTitle className='flex items-center gap-2 font-bold text-xl'>
                      <Calendar className='w-5 h-5 text-[#06a6ae]' />
                      Today&apos;s Schedule
                    </CardTitle>
                    <CardDescription>Your classes for today</CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    {upcomingClasses.map((classItem, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        className='group flex items-center gap-4 hover:bg-[#06a6ae]/5 p-3 border border-gray-100 hover:border-[#06a6ae]/20 rounded-xl transition-all duration-300'
                      >
                        <div className='flex-shrink-0 w-12 text-center'>
                          <div className='font-semibold text-gray-900'>
                            {classItem.time}
                          </div>
                          <div className='text-gray-500 text-xs'>
                            {classItem.duration}
                          </div>
                        </div>
                        <div className='flex-1 min-w-0'>
                          <h4 className='font-semibold text-gray-900 text-sm'>
                            {classItem.subject}
                          </h4>
                          <p className='text-gray-600 text-xs truncate'>
                            {classItem.topic}
                          </p>
                        </div>
                        <Button
                          variant='secondary'
                          className='opacity-0 group-hover:opacity-100 transition-opacity'
                        >
                          <PlayCircle className='w-4 h-4' />
                        </Button>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recent Achievements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className='bg-white/80 shadow-lg backdrop-blur-sm border-0'>
                  <CardHeader className='pb-4'>
                    <CardTitle className='flex items-center gap-2 font-bold text-xl'>
                      <Award className='w-5 h-5 text-[#06a6ae]' />
                      Recent Achievements
                    </CardTitle>
                    <CardDescription>Your learning milestones</CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    {recentAchievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className='flex items-center gap-4 hover:bg-[#06a6ae]/5 p-3 border border-gray-100 hover:border-[#06a6ae]/20 rounded-xl transition-all duration-300'
                      >
                        <div
                          className={`p-2 rounded-xl bg-gradient-to-r from-[#adf7c0] to-[#1be1a9]`}
                        >
                          <achievement.icon
                            className={`w-4 h-4 ${achievement.color}`}
                          />
                        </div>
                        <div className='flex-1 min-w-0'>
                          <h4 className='font-semibold text-gray-900 text-sm'>
                            {achievement.title}
                          </h4>
                          <p className='text-gray-600 text-xs'>
                            {achievement.description}
                          </p>
                        </div>
                        <Star className='fill-current w-4 h-4 text-yellow-400' />
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Actions */}
              {/* <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className='bg-gradient-to-br from-[#06a6ae] to-[#9AD0D3] shadow-xl border-0'>
                  <CardContent className='p-6 text-white'>
                    <h3 className='mb-4 font-bold text-lg'>Quick Actions</h3>
                    <div className='gap-3 grid grid-cols-2'>
                      <Button
                        variant='secondary'
                        className='bg-white/20 hover:bg-white/30 border-0 text-white'
                      >
                        <Download className='mr-2 w-4 h-4' />
                        Resources
                      </Button>
                      <Button
                        variant='secondary'
                        className='bg-white/20 hover:bg-white/30 border-0 text-white'
                      >
                        <HelpCircle className='mr-2 w-4 h-4' />
                        Support
                      </Button>
                      <Button
                        variant='secondary'
                        className='bg-white/20 hover:bg-white/30 border-0 text-white'
                      >
                        <Users className='mr-2 w-4 h-4' />
                        Forums
                      </Button>
                      <Button
                        variant='secondary'
                        className='bg-white/20 hover:bg-white/30 border-0 text-white'
                      >
                        <FileText className='mr-2 w-4 h-4' />
                        Notes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
