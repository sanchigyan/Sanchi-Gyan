import React from 'react'

import { AuthProvider } from '@/context/AuthContext'
import Footer from '@/components/layout/Footer'

export default async function RootLayout ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <AuthProvider>
        {children}
        <Footer/>
      </AuthProvider>
    </div>
  )
}
