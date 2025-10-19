"use client"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect, ReactNode } from "react"

interface ProtectedRouteProps {
  children: ReactNode
  allowedRoles?: string[]
  redirectTo?: string
}

export default function ProtectedRoute({ 
  children, 
  allowedRoles,
  redirectTo = '/unauthorized' 
}: ProtectedRouteProps) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // if (status === 'loading') return

    if (!user) {
      router.push('/login')
      return
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
      router.push(redirectTo)
    }
  }, [allowedRoles,user,router,redirectTo])

//   if (status === 'loading') {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="border-gray-900 border-b-2 rounded-full w-12 h-12 animate-spin"></div>
//       </div>
//     )
//   }

  if (!user || (allowedRoles && !allowedRoles.includes(user.role))) {
    return null
  }

  return <>{children}</>
}

// Usage:
// <ProtectedRoute allowedRoles={['admin']}>
//   <AdminContent />
// </ProtectedRoute>