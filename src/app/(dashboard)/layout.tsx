import React from 'react'

import { AuthProvider } from '@/context/AuthContext'
import DashboardLayout from './_components/dashboard-layout'

export default async function RootLayout ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <AuthProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </AuthProvider>
    </div>
  )
}
