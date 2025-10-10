'use client'

export default function Hero ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <section className='relative pt-16 md:pt-10 min-h-screen overflow-hidden'>
        {/* Background elements */}
        <div className='top-0 right-0 absolute w-full h-full overflow-hidden'>
          <div className='top-0 right-0 absolute bg-[#9AD0D3] opacity-10 blur-3xl rounded-full w-[500px] h-[500px] -translate-y-1/2 translate-x-1/2 transform'></div>
          <div className='bottom-0 left-0 absolute bg-[#EDBEA4] opacity-10 blur-3xl rounded-full w-[400px] h-[400px] -translate-x-1/3 translate-y-1/3 transform'></div>
        </div>
        {children}
      </section>
    </div>
  )
}
