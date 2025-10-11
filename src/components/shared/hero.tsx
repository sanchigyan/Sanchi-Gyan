'use client'

export default function Hero ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <section className='relative pt-8 min-h-screen overflow-hidden'>
        {children}
      </section>
    </div>
  )
}
