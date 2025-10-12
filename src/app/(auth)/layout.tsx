import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navber'

export default function AuthLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
