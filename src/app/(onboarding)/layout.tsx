
import Image from 'next/image'

export default function OnboardingLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex min-h-screen'>
      {/* Left Section */}
      <div className='hidden lg:flex flex-col justify-center items-center bg-indigo-50 dark:bg-gray-900 p-10 w-1/2'>
        <Image
          src='https://i.ibb.co/0VKSrvWt/A-relevant-uplifting-illustration-e-g-students-signup-form-Without-a-background-may-be-stable-with-d.png'
          alt='Onboarding Illustration'
          width={400}
          height={400}
          className='mb-6'
        />
        <h2 className='font-bold text-gray-800 dark:text-white text-3xl text-center'>
          Hey,  👋
        </h2>
        <p className='mt-3 max-w-md text-gray-600 dark:text-gray-400 text-center'>
          Help us personalize your experience by telling us a bit about
          yourself.
        </p>
      </div>

      {/* Right Section (Dynamic Steps) */}
      <div className='flex justify-center items-center bg-white dark:bg-gray-950 w-full lg:w-1/2'>
        <div className='p-8 w-full max-w-md'>{children}</div>
      </div>
    </div>
  )
}
