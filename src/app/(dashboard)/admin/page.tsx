"use client"
import { motion } from "framer-motion"
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  Clock, 
  Award, 
  BarChart3,
  Calendar,
  Download,
  MoreHorizontal,
  ArrowUp,
  ArrowDown,
  Shield
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import ProtectedRoute from "@/components/auth/ProtectedRoute"

const stats = [
  {
    title: "Total Students",
    value: "10,247",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-cyan-400",
    description: "Active enrolled students"
  },
  {
    title: "Courses",
    value: "156",
    change: "+5%",
    trend: "up",
    icon: BookOpen,
    color: "from-green-500 to-emerald-400",
    description: "Published courses"
  },
  {
    title: "Revenue",
    value: "₨ 2.4M",
    change: "+18%",
    trend: "up",
    icon: DollarSign,
    color: "from-purple-500 to-violet-400",
    description: "This month"
  },
  {
    title: "Completion Rate",
    value: "84%",
    change: "+3%",
    trend: "up",
    icon: Award,
    color: "from-orange-500 to-amber-400",
    description: "Course completion"
  }
]

const recentActivities = [
  {
    user: "Aarav Sharma",
    action: "enrolled in",
    target: "Mathematics Grade 10",
    time: "2 minutes ago",
    avatar: "AS",
    type: "enrollment"
  },
  {
    user: "Prof. Maya Gurung",
    action: "uploaded new content for",
    target: "Science Explorers",
    time: "15 minutes ago",
    avatar: "MG",
    type: "content"
  },
  {
    user: "Sunita Karki",
    action: "completed",
    target: "English Mastery Course",
    time: "1 hour ago",
    avatar: "SK",
    type: "completion"
  },
  {
    user: "Ramesh Adhikari",
    action: "graded assignments for",
    target: "Class 9 Mathematics",
    time: "2 hours ago",
    avatar: "RA",
    type: "grading"
  }
]

const topCourses = [
  {
    title: "Mathematics Grade 10",
    instructor: "Dr. Anil Sharma",
    students: 1247,
    revenue: "₨ 348,900",
    rating: 4.9,
    progress: 85
  },
  {
    title: "Science Explorers",
    instructor: "Prof. Maya Gurung",
    students: 892,
    revenue: "₨ 267,600",
    rating: 4.8,
    progress: 72
  },
  {
    title: "English Mastery",
    instructor: "Mr. Ramesh Adhikari",
    students: 756,
    revenue: "₨ 226,800",
    rating: 4.7,
    progress: 68
  }
]

const quickStats = [
  { label: "New Students Today", value: "47", change: "+5" },
  { label: "Pending Assignments", value: "23", change: "-3" },
  { label: "Support Tickets", value: "8", change: "-2" },
  { label: "System Uptime", value: "99.9%", change: "0.1%" }
]

export default function AdminOverview() {
  return (
    <ProtectedRoute allowedRoles={['ADMIN']}>
      <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 p-6 min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="font-bold text-gray-900 text-3xl">Dashboard Overview</h1>
            <p className="mt-2 text-gray-600">Welcome back! Here&apos;s what&apos;s happening with Sanchi Gyan today.</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
            <Button className="flex items-center gap-2 bg-[#3ef78b]">
              <Calendar className="w-4 h-4" />
              This Month
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
          {stats.map((stat, index) => (
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
          {/* Left Column - Charts & Performance */}
          <div className="space-y-8 lg:col-span-2">
            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white/80 shadow-lg backdrop-blur-sm border-0">
                <CardHeader className="flex flex-row justify-between items-center pb-4">
                  <div>
                    <CardTitle className="font-bold text-xl">Revenue Analytics</CardTitle>
                    <CardDescription>Monthly revenue performance</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center items-center bg-gradient-to-br from-slate-50 to-blue-50 border border-gray-200 rounded-xl h-80">
                    <div className="text-center">
                      <BarChart3 className="mx-auto mb-4 w-12 h-12 text-gray-400" />
                      <p className="text-gray-500">Revenue chart visualization</p>
                      <p className="text-gray-400 text-sm">Monthly trends and projections</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Top Performing Courses */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-white/80 shadow-lg backdrop-blur-sm border-0">
                <CardHeader className="flex flex-row justify-between items-center pb-4">
                  <div>
                    <CardTitle className="font-bold text-xl">Top Performing Courses</CardTitle>
                    <CardDescription>Most popular courses by enrollment and revenue</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#06a6ae]">
                    View All
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {topCourses.map((course, index) => (
                    <div key={index} className="flex justify-between items-center hover:bg-[#06a6ae]/5 p-4 border border-gray-100 hover:border-[#06a6ae]/20 rounded-xl transition-all duration-300">
                      <div className="flex flex-1 items-center gap-4">
                        <div className="flex justify-center items-center bg-[#3ef78b] rounded-2xl w-12 h-12">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 truncate">{course.title}</h4>
                          <p className="text-gray-600 text-sm">{course.instructor}</p>
                          <div className="flex items-center gap-4 mt-2 text-gray-500 text-xs">
                            <span>{course.students} students</span>
                            <span>Rating: {course.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{course.revenue}</div>
                        <Progress value={course.progress} className="mt-1 w-24 h-2" />
                        <div className="mt-1 text-gray-500 text-xs">{course.progress}% progress</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Activity & Quick Stats */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-white/80 shadow-lg backdrop-blur-sm border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 font-bold text-xl">
                    <Clock className="w-5 h-5 text-[#06a6ae]" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Latest platform activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 hover:bg-[#06a6ae]/5 p-3 border border-gray-100 hover:border-[#06a6ae]/20 rounded-xl transition-all duration-300">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-[#3ef78b] text-white text-xs">
                          {activity.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 text-sm">
                          <span className="font-semibold">{activity.user}</span> {activity.action}{" "}
                          <span className="font-semibold text-[#06a6ae]">{activity.target}</span>
                        </p>
                        <p className="mt-1 text-gray-500 text-xs">{activity.time}</p>
                      </div>
                      <Badge variant="secondary" className={
                        activity.type === 'enrollment' ? 'bg-green-50 text-green-700' :
                        activity.type === 'content' ? 'bg-blue-50 text-blue-700' :
                        activity.type === 'completion' ? 'bg-purple-50 text-purple-700' :
                        'bg-orange-50 text-orange-700'
                      }>
                        {activity.type}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-[#06a6ae] to-[#9AD0D3] shadow-xl border-0">
                <CardContent className="p-6 text-white">
                  <h3 className="mb-4 font-bold text-lg">Quick Overview</h3>
                  <div className="space-y-4">
                    {quickStats.map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-white/90">{stat.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{stat.value}</span>
                          <Badge variant="secondary" className="bg-white/20 border-0 text-white text-xs">
                            {stat.change}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-white/80 shadow-lg backdrop-blur-sm border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 font-bold text-xl">
                    <Shield className="w-5 h-5 text-[#06a6ae]" />
                    System Status
                  </CardTitle>
                  <CardDescription>Platform health monitoring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { service: "Video Streaming", status: "operational", latency: "45ms" },
                    { service: "Database", status: "operational", latency: "12ms" },
                    { service: "Payment Gateway", status: "degraded", latency: "280ms" },
                    { service: "CDN", status: "operational", latency: "23ms" }
                  ].map((service, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border border-gray-100 rounded-xl">
                      <div>
                        <div className="font-medium text-gray-900">{service.service}</div>
                        <div className="text-gray-500 text-sm">Latency: {service.latency}</div>
                      </div>
                      <Badge variant={service.status === "operational" ? "default" : "destructive"} 
                        className={service.status === "operational" 
                          ? "bg-green-100 text-green-700 hover:bg-green-100" 
                          : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                        }>
                        {service.status}
                      </Badge>
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