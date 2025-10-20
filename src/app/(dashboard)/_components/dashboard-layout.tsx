'use client'
import { ReactNode, useState } from 'react'
import {
  BarChart3,
  FileText,
  Video,
  FileCheck,
  UserCheck,
  PlayCircle,
  HelpCircle,
  Library,
  Megaphone,
  MessageSquare,
  Settings,
  BookOpen,
  ClipboardList,
  Store,
  CreditCard,
  Receipt,
  Calendar,
  User,
  ClipboardCheck,
  ChevronDown,
  LogOut,
  Bell
} from 'lucide-react'
import { MdAssignment, MdSettingsApplications } from 'react-icons/md'
import { FaUserGraduate } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import * as Collapsible from '@radix-ui/react-collapsible'

import Image from 'next/image'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar'
import logo from '../../../../public/logo.png'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type RouteGroupType = {
  group: string
  items: {
    href: string
    label: string
    icon: ReactNode
    permission?: string[]
    badge?: number
    isNew?: boolean
  }[]
}

// Enhanced route groups with badges and new indicators
const ROUTE_GROUPS: RouteGroupType[] = [
  {
    group: 'Admin Dashboard',
    items: [
      {
        href: '/admin',
        label: 'Overview',
        icon: <Store className='size-5' />,
        badge: 3
      },
      {
        href: '/admin/applications',
        label: 'Applications',
        icon: <MdSettingsApplications className='size-5' />,
        badge: 12
      },
      {
        href: '/admin/analytics',
        label: 'Analytics',
        icon: <BarChart3 className='size-5' />,
        isNew: true
      },
      {
        href: '/admin/academic/subjects',
        label: 'Subjects',
        icon: <BookOpen className='size-5' />
      },
      {
        href: '/admin/academic/courses',
        label: 'Courses',
        icon: <BookOpen className='size-5' />
      },
      {
        href: '/admin/academic/curriculum',
        label: 'Curriculum',
        icon: <ClipboardList className='size-5' />
      },
      {
        href: '/admin/academic/lessons',
        label: 'Lessons & Content',
        icon: <Video className='size-5' />
      },
      {
        href: '/admin/academic/assignments',
        label: 'Assignments',
        icon: <MdAssignment className='size-5' />,
        badge: 5
      },
      {
        href: '/admin/academic/exams',
        label: 'Exams & Quizzes',
        icon: <FileCheck className='size-5' />
      },
      {
        href: '/admin/users/students',
        label: 'Students',
        icon: <FaUserGraduate className='size-5' />
      },
      {
        href: '/admin/users/teachers',
        label: 'Teachers',
        icon: <UserCheck className='size-5' />
      },
      {
        href: '/admin/content/videos',
        label: 'Video Lectures',
        icon: <PlayCircle className='size-5' />
      },
      {
        href: '/admin/content/notes',
        label: 'Study Materials',
        icon: <FileText className='size-5' />
      },
      {
        href: '/admin/content/library',
        label: 'Resource Library',
        icon: <Library className='size-5' />
      },
      {
        href: '/admin/content/announcements',
        label: 'Announcements',
        icon: <Megaphone className='size-5' />
      },
      {
        href: '/admin/finance/subscriptions',
        label: 'Subscriptions',
        icon: <CreditCard className='size-5' />
      },
      {
        href: '/admin/finance/transactions',
        label: 'Transactions',
        icon: <Receipt className='size-5' />
      },
      {
        href: '/admin/settings',
        label: 'General Settings',
        icon: <Settings className='size-5' />
      }
    ]
  },
  {
    group: 'Teacher Dashboard',
    items: [
      {
        href: '/teacher',
        label: 'Overview',
        icon: <Store className='size-4' />
      },
      {
        href: '/teacher/analytics',
        label: 'Teaching Analytics',
        icon: <BarChart3 className='size-4' />,
        isNew: true
      },
      {
        href: '/teacher/my-courses',
        label: 'My Courses',
        icon: <BookOpen className='size-4' />,
        badge: 2
      },
      {
        href: '/teacher/schedule',
        label: 'Teaching Schedule',
        icon: <Calendar className='size-4' />
      },
      {
        href: '/teacher/assignments',
        label: 'Assignments',
        icon: <MdAssignment className='size-4' />,
        badge: 8
      },
      {
        href: '/teacher/students',
        label: 'My Students',
        icon: <FaUserGraduate className='size-4' />
      },
      {
        href: '/teacher/attendance',
        label: 'Attendance',
        icon: <ClipboardCheck className='size-4' />
      },
      {
        href: '/teacher/messages',
        label: 'Messages',
        icon: <MessageSquare className='size-4' />,
        badge: 3
      },
      {
        href: '/teacher/profile',
        label: 'My Profile',
        icon: <User className='size-4' />
      }
    ]
  },
  {
    group: 'Student Dashboard',
    items: [
      {
        href: '/student',
        label: 'Overview',
        icon: <Store className='size-5' />
      },
      {
        href: '/student/analytics',
        label: 'My Progress',
        icon: <BarChart3 className='size-5' />,
        isNew: true
      },
      {
        href: '/student/my-courses',
        label: 'My Courses',
        icon: <BookOpen className='size-5' />
      },
      {
        href: '/student/class-schedule',
        label: 'Class Schedule',
        icon: <Calendar className='size-5' />
      },
      {
        href: '/student/video-lectures',
        label: 'Video Lectures',
        icon: <PlayCircle className='size-5' />
      },
      {
        href: '/student/resource-library',
        label: 'Resource Library',
        icon: <Library className='size-5' />
      },
      {
        href: '/student/assignments',
        label: 'Assignments',
        icon: <MdAssignment className='size-5' />,
        badge: 4
      },
      {
        href: '/student/quizzes',
        label: 'Quizzes & Tests',
        icon: <HelpCircle className='size-5' />
      },
      {
        href: '/student/exams',
        label: 'Exams',
        icon: <FileCheck className='size-5' />
      }
    ]
  }
]

type RouteGroupProps = RouteGroupType

const RouteGroup = ({ group, items }: RouteGroupProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname()

  return (
    <Collapsible.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      className='group/collapsible'
    >
      <Collapsible.Trigger asChild>
        <Button
          variant='ghost'
          className='flex justify-between items-center hover:bg-sidebar-accent px-3 py-2 w-full font-medium text-sm [&[data-state=open]>svg]:rotate-180 transition-all hover:text-sidebar-accent-foreground'
        >
          <span className='font-semibold text-sidebar-foreground/60 text-xs uppercase tracking-wider'>
            {group}
          </span>
          <ChevronDown className='size-4 transition-transform duration-200 shrink-0' />
        </Button>
      </Collapsible.Trigger>

      <Collapsible.Content>
        <motion.div
          className='space-y-2 mt-1'
          initial='collapsed'
          animate='open'
          exit='collapsed'
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          {items.map(item => {
            const isActive = pathname === item.href
            return (
              <motion.div
                key={item.href}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  )}
                >
                  <div
                    className={cn(
                      'flex justify-center items-center transition-colors',
                      isActive
                        ? 'text-primary-foreground'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.icon}
                  </div>
                  <span className='flex-1 font-medium'>{item.label}</span>

                  <div className='flex items-center gap-1'>
                    {item.isNew && (
                      <Badge
                        variant='secondary'
                        className='bg-green-500 px-1 border-0 h-4 text-white text-xs'
                      >
                        New
                      </Badge>
                    )}
                    {item.badge && item.badge > 0 && (
                      <Badge
                        variant='secondary'
                        className={cn(
                          'px-1 min-w-5 h-5 text-xs',
                          isActive
                            ? 'bg-primary-foreground text-primary'
                            : 'bg-primary text-primary-foreground'
                        )}
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, logout } = useAuth()
  // const pathname = usePathname()

  if (!user) {
    return null
  }

  const userRole = user.role

  const filteredRouteGroups = ROUTE_GROUPS.filter(group => {
    if (userRole === 'ADMIN') {
      return group.group === 'Admin Dashboard'
    } else if (userRole === 'STUDENT') {
      return group.group === 'Student Dashboard'
    } else if (userRole === 'TEACHER') {
      return group.group === 'Teacher Dashboard'
    }
    return false
  })

  const getWelcomeMessage = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className='flex w-full min-h-screen'>
        {/* Enhanced Sidebar */}
        <Sidebar
          collapsible='icon'
          className='bg-gray-200 shadow-lg border-gray-200'
        >
          <SidebarHeader className='p-4'>
            <Link href='/'>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='flex items-center gap-3'
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className='flex-shrink-0'
                >
                  <Image
                    width={48}
                    height={48}
                    src={logo}
                    alt='Sanchi Gyan'
                    className='shadow-md rounded-xl'
                  />
                </motion.div>
                <div className='flex flex-col'>
                  <h1 className='font-bold text-xl'>Sanchi Gyan</h1>
                  <p className='text-muted-foreground text-xs'>
                    Learning Platform
                  </p>
                </div>
              </motion.div>
            </Link>
          </SidebarHeader>
          <Separator className='bg-sidebar-border' />

          <SidebarContent className='space-y-6 px-3'>
            <AnimatePresence>
              {filteredRouteGroups.map((routeGroup, index) => (
                <motion.div
                  key={routeGroup.group}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <RouteGroup {...routeGroup} />
                </motion.div>
              ))}
            </AnimatePresence>
          </SidebarContent>

          <SidebarFooter className='p-2'>
            <div className='space-y-2'>
              <Button
                variant='ghost'
                className='justify-start w-full text-muted-foreground hover:text-foreground'
                onClick={logout}
              >
                <LogOut className='mr-2 size-4' />
                Sign Out
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Enhanced Main Content */}
        <main className='flex flex-col flex-1 min-h-screen'>
          {/* Sticky Header */}
          <header className='top-0 z-50 sticky flex justify-between items-center bg-background/80 shadow-sm backdrop-blur-md px-6 py-4'>
            <div className='flex items-center gap-4'>
              <SidebarTrigger className='hover:bg-accent text-foreground' />
              <div>
                <h1 className='font-bold text-2xl'>
                  {getWelcomeMessage()}, {user.fullname?.split(' ')[0]}!
                </h1>
                <p className='text-muted-foreground text-sm'>
                  Welcome back to your {userRole.toLowerCase()} dashboard
                </p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <Button variant='ghost' size='icon' className='relative'>
                <Bell className='size-5' />
                <span className='-top-1 -right-1 absolute bg-red-500 border-2 border-background rounded-full size-3' />
              </Button>

              <div className='flex items-center gap-3 bg-accent/50 px-3 py-2 rounded-full'>
                <Avatar className='size-8'>
                  <AvatarImage src={user.profileImageUrl} alt={user.fullname} />
                  <AvatarFallback className='bg-primary text-primary-foreground text-sm'>
                    {user.fullname?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className='hidden sm:block'>
                  <p className='font-medium text-sm'>{user.fullname}</p>
                  <p className='text-muted-foreground text-xs capitalize'>
                    {user.role.toLowerCase()}
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content with Enhanced Background */}
          <div className='flex-1 p-6'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className='h-full'
            >
              {children}
            </motion.div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default DashboardLayout
