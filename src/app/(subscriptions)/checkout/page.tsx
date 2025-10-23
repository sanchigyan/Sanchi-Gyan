'use client'

import { Suspense } from 'react'
import CheckoutContent from './components/CheckoutContent'


export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <CheckoutContent />
    </Suspense>
  )
}

function CheckoutLoading() {
  return (
    <div className='flex justify-center items-center bg-gray-100 min-h-screen'>
      <div className='bg-white shadow-lg p-8 rounded-xl w-full max-w-md'>
        <div className='flex flex-col items-center'>
          <div className='border-indigo-500 border-t-2 border-b-2 rounded-full w-12 h-12 animate-spin'></div>
          <p className='mt-4 text-gray-600'>Loading checkout...</p>
        </div>
      </div>
    </div>
  )
}