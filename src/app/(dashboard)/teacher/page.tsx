"use client"
import { motion } from "framer-motion"
import { 
  Users, 
  BookOpen, 
  Clock,  
  BarChart3,
  Calendar,
  Download,
  ArrowUp,
  ArrowDown,
  FileText,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Star,
  TrendingUp,
  Eye,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import ProtectedRoute from "@/components/auth/ProtectedRoute"

const teacherStats = [
  {
    title: "Total Students",
    value: "156",
    change: "+8%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-cyan-400",
    description: "Across all your courses"
  },
  {
    title: "Active Courses",
    value: "7",
    change: "+1",
    trend: "up",
    icon: BookOpen,
    color: "from-green-500 to-emerald-400",
    description: "Courses you're teaching"
  },
  {
    title: "Pending Grading",
    value: "23",
    change: "-5",
    trend: "down",
    icon: FileText,
    color: "from-orange-500 to-amber-400",
    description: "Assignments to review"
  },
  {
    title: "Avg. Rating",
    value: "4.8",
    change: "+0.2",
    trend: "up",
    icon: Star,
    color: "from-purple-500 to-violet-400",
    description: "Student feedback"
  }
]

const upcomingClasses = [
  {
    course: "Mathematics Grade 10",
    time: "10:00 AM - 11:30 AM",
    date: "Today",
    students: 32,
    topic: "Algebraic Expressions",
    room: "Virtual Classroom A",
    type: "live"
  },
  {
    course: "Science Explorers",
    time: "02:00 PM - 03:30 PM",
    date: "Today",
    students: 28,
    topic: "Chemical Reactions",
    room: "Lab 3",
    type: "practical"
  },
  {
    course: "Advanced Physics",
    time: "09:00 AM - 10:30 AM",
    date: "Tomorrow",
    students: 24,
    topic: "Quantum Mechanics",
    room: "Virtual Classroom B",
    type: "lecture"
  }
]

const studentPerformance = [
  {
    name: "Aarav Sharma",
    avatar: "AS",
    course: "Mathematics Grade 10",
    progress: 92,
    assignments: 8,
    attendance: "95%",
    status: "excellent"
  },
  {
    name: "Priya Patel",
    avatar: "PP",
    course: "Science Explorers",
    progress: 78,
    assignments: 6,
    attendance: "88%",
    status: "good"
  },
  {
    name: "Rohan Karki",
    avatar: "RK",
    course: "Mathematics Grade 10",
    progress: 65,
    assignments: 5,
    attendance: "76%",
    status: "needs_attention"
  },
  {
    name: "Sunita Gurung",
    avatar: "SG",
    course: "Advanced Physics",
    progress: 85,
    assignments: 7,
    attendance: "92%",
    status: "good"
  }
]

const pendingTasks = [
  {
    task: "Grade Algebra Homework",
    course: "Mathematics Grade 10",
    due: "Today",
    submissions: 12,
    priority: "high"
  },
  {
    task: "Review Science Projects",
    course: "Science Explorers",
    due: "Tomorrow",
    submissions: 8,
    priority: "medium"
  },
  {
    task: "Prepare Quiz Questions",
    course: "Advanced Physics",
    due: "In 2 days",
    submissions: 0,
    priority: "medium"
  },
  {
    task: "Update Course Materials",
    course: "Mathematics Grade 10",
    due: "This week",
    submissions: 0,
    priority: "low"
  }
]

const recentAnnouncements = [
  {
    title: "Weekly Math Challenge Posted",
    course: "Mathematics Grade 10",
    time: "2 hours ago",
    views: 45,
    comments: 3
  },
  {
    title: "Science Lab Schedule Update",
    course: "Science Explorers",
    time: "1 day ago",
    views: 32,
    comments: 7
  },
  {
    title: "Physics Assignment Deadline Extended",
    course: "Advanced Physics",
    time: "2 days ago",
    views: 28,
    comments: 2
  }
]

const quickActions = [
  { label: "Create Assignment", icon: FileText, color: "bg-blue-500" },
  { label: "Schedule Class", icon: Calendar, color: "bg-green-500" },
  { label: "Send Announcement", icon: MessageSquare, color: "bg-purple-500" },
  { label: "View Analytics", icon: BarChart3, color: "bg-orange-500" }
]

export default function TeacherOverview() {
  return (
    <ProtectedRoute allowedRoles={['TEACHER']}>
      <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 p-6 min-h-screen">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-8"
          >
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export Reports
              </Button>
              <Button className="flex items-center gap-2 bg-[#3ef78b]">
                <Calendar className="w-4 h-4" />
                Today&apos;s Schedule
              </Button>
            </div>
          </motion.div>

          {/* Main Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8"
          >
            {teacherStats.map((stat, index) => (
              <Card key={index} className="bg-white/80 shadow-lg hover:shadow-xl backdrop-blur-sm border-0 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="mb-1 font-medium text-gray-600 text-sm">{stat.title}</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <h3 className="font-bold text-gray-900 text-2xl">{stat.value}</h3>
                        <Badge variant={stat.trend === "up" ? "default" : "destructive"} className={
                          stat.trend === "up" 
                            ? "bg-green-100 text-green-700 hover:bg-green-100" 
                            : "bg-red-100 text-red-700 hover:bg-red-100"
                        }>
                          {stat.trend === "up" ? <ArrowUp className="mr-1 w-3 h-3" /> : <ArrowDown className="mr-1 w-3 h-3" />}
                          {stat.change}
                        </Badge>
                      </div>
                      <p className="text-gray-500 text-xs">{stat.description}</p>
                    </div>
                    <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-2xl`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <div className="gap-8 grid lg:grid-cols-3">
            {/* Left Column - Upcoming & Performance */}
            <div className="space-y-8 lg:col-span-2">
              {/* Upcoming Classes */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-white/80 shadow-lg backdrop-blur-sm border-0">
                  <CardHeader className="flex flex-row justify-between items-center pb-4">
                    <div>
                      <CardTitle className="font-bold text-xl">Today&apos;s Schedule</CardTitle>
                      <CardDescription>Your upcoming classes and sessions</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#06a6ae]">
                      View Full Schedule
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingClasses.map((classItem, index) => (
                      <div key={index} className="flex justify-between items-center hover:bg-[#06a6ae]/5 p-4 border border-gray-100 hover:border-[#06a6ae]/20 rounded-xl transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-2xl ${
                            classItem.type === 'live' ? 'bg-red-100 text-red-600' :
                            classItem.type === 'practical' ? 'bg-blue-100 text-blue-600' :
                            'bg-green-100 text-green-600'
                          }`}>
                            <Clock className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{classItem.course}</h4>
                            <p className="text-gray-600 text-sm">{classItem.topic}</p>
                            <div className="flex items-center gap-4 mt-1 text-gray-500 text-xs">
                              <span>{classItem.time}</span>
                              <span>{classItem.room}</span>
                              <span>{classItem.students} students</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary" className={
                          classItem.date === 'Today' 
                            ? 'bg-[#06a6ae] text-white' 
                            : 'bg-gray-100 text-gray-700'
                        }>
                          {classItem.date}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Student Performance */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-white/80 shadow-lg backdrop-blur-sm border-0">
                  <CardHeader className="flex flex-row justify-between items-center pb-4">
                    <div>
                      <CardTitle className="font-bold text-xl">Student Performance</CardTitle>
                      <CardDescription>Track your students progress and engagement</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#06a6ae]">
                      View All Students
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {studentPerformance.map((student, index) => (
                        <div key={index} className="flex justify-between items-center hover:bg-[#06a6ae]/5 p-4 border border-gray-100 rounded-xl transition-all duration-300">
                          <div className="flex items-center gap-4">
                            <Avatar className="w-10 h-10">
                              <AvatarFallback className={
                                student.status === 'excellent' ? 'bg-green-100 text-green-700' :
                                student.status === 'good' ? 'bg-blue-100 text-blue-700' :
                                'bg-orange-100 text-orange-700'
                              }>
                                {student.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-semibold text-gray-900">{student.name}</h4>
                              <p className="text-gray-600 text-sm">{student.course}</p>
                              <div className="flex items-center gap-4 mt-1 text-gray-500 text-xs">
                                <span>Assignments: {student.assignments}/10</span>
                                <span>Attendance: {student.attendance}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 mb-2">
                              <Progress value={student.progress} className="w-24 h-2" />
                              <span className="font-semibold text-gray-900 text-sm">{student.progress}%</span>
                            </div>
                            <Badge variant="secondary" className={
                              student.status === 'excellent' ? 'bg-green-100 text-green-700' :
                              student.status === 'good' ? 'bg-blue-100 text-blue-700' :
                              'bg-orange-100 text-orange-700'
                            }>
                              {student.status === 'excellent' ? <TrendingUp className="mr-1 w-3 h-3" /> :
                               student.status === 'good' ? <CheckCircle className="mr-1 w-3 h-3" /> :
                               <AlertCircle className="mr-1 w-3 h-3" />}
                              {student.status.replace('_', ' ')}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Column - Tasks & Quick Actions */}
            <div className="space-y-8">
              {/* Pending Tasks */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-white/80 shadow-lg backdrop-blur-sm border-0">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 font-bold text-xl">
                      <FileText className="w-5 h-5 text-[#06a6ae]" />
                      Pending Tasks
                    </CardTitle>
                    <CardDescription>Assignments to grade and tasks to complete</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pendingTasks.map((task, index) => (
                      <div key={index} className="hover:bg-[#06a6ae]/5 p-4 border border-gray-100 rounded-xl transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">{task.task}</h4>
                          <Badge variant="secondary" className={
                            task.priority === 'high' ? 'bg-red-100 text-red-700' :
                            task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }>
                            {task.priority}
                          </Badge>
                        </div>
                        <p className="mb-3 text-gray-600 text-sm">{task.course}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-xs">Due: {task.due}</span>
                          {task.submissions > 0 && (
                            <span className="font-medium text-[#06a6ae] text-sm">
                              {task.submissions} submissions
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-[#06a6ae] to-[#9AD0D3] shadow-xl border-0">
                  <CardContent className="p-6 text-white">
                    <h3 className="mb-4 font-bold text-lg">Quick Actions</h3>
                    <div className="gap-4 grid grid-cols-2">
                      {quickActions.map((action, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="flex flex-col justify-center items-center bg-white/20 hover:bg-white/30 border-0 h-20 text-white transition-all duration-300"
                        >
                          <div className={`p-2 rounded-lg ${action.color} mb-2`}>
                            <action.icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs text-center">{action.label}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recent Announcements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="bg-white/80 shadow-lg backdrop-blur-sm border-0">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 font-bold text-xl">
                      <MessageSquare className="w-5 h-5 text-[#06a6ae]" />
                      Recent Announcements
                    </CardTitle>
                    <CardDescription>Your latest course updates</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentAnnouncements.map((announcement, index) => (
                      <div key={index} className="hover:bg-[#06a6ae]/5 p-3 border border-gray-100 rounded-xl transition-all duration-300">
                        <h4 className="mb-1 font-semibold text-gray-900 text-sm">
                          {announcement.title}
                        </h4>
                        <p className="mb-2 text-gray-600 text-xs">{announcement.course}</p>
                        <div className="flex justify-between items-center text-gray-500 text-xs">
                          <span>{announcement.time}</span>
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {announcement.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3" />
                              {announcement.comments}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}