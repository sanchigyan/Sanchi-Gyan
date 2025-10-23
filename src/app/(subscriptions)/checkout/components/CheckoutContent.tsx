'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import api from '@/lib/api'
import toast from 'react-hot-toast'

// Initialize Stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

// Plan details for display
const PLAN_DETAILS: Record<
  string,
  { name: string; monthly: number; annual: number }
> = {
  basic: { name: 'Basic', monthly: 799, annual: 7990 },
  premium: { name: 'Premium', monthly: 1299, annual: 12990 },
  pro: { name: 'Pro', monthly: 1999, annual: 19990 }
}

export default function CheckoutContent () {
  const searchParams = useSearchParams()
  const router = useRouter()
  const plan = searchParams.get('plan')
  const period = searchParams.get('period') as 'monthly' | 'annual'
  const [clientSecret, setClientSecret] = useState('')
  const [loading, setLoading] = useState(true)
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    if (!plan || !period || !PLAN_DETAILS[plan]) {
      toast.error('Invalid subscription plan')
      router.push('/high-school-plan')
      return
    }

    // Create payment intent
    async function createPaymentIntent () {
      try {
        const response = await api.post('/payments/create-intent', {
          planId: plan,
          billingPeriod: period
        })

        setClientSecret(response.data.data.clientSecret)
        setAmount(response.data.data.amount / 100) // Convert from paise to rupees
      } catch (error: unknown) {
        console.error('Error creating payment intent:', error)
        if (error instanceof Error) {
          toast.error(error?.message)
          router.push('/high-school-plan')
        } else {
          toast.error('Failed to initialize checkout')
          router.push('/high-school-plan')
        }
      } finally {
        setLoading(false)
      }
    }

    createPaymentIntent()
  }, [plan, period, router])

  if (loading) {
    return (
      <div className='flex justify-center items-center bg-gray-100 min-h-screen'>
        <div className='bg-white shadow-lg p-8 rounded-xl w-full max-w-md'>
          <div className='flex flex-col items-center'>
            <div className='border-indigo-500 border-t-2 border-b-2 rounded-full w-12 h-12 animate-spin'></div>
            <p className='mt-4 text-gray-600'>Initializing checkout...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!clientSecret || !plan) {
    return null
  }

  const planDetails = PLAN_DETAILS[plan]

  return (
    <div className='flex justify-center items-center bg-gray-100 dark:bg-gray-900 p-4 min-h-screen'>
      <div className='bg-white dark:bg-gray-800 shadow-lg p-8 rounded-xl w-full max-w-md'>
        <h2 className='mb-2 font-bold text-gray-800 dark:text-white text-2xl text-center'>
          {planDetails.name} Plan
        </h2>
        <p className='mb-4 text-gray-600 dark:text-gray-400 text-center'>
          Billing: {period === 'monthly' ? 'Monthly' : 'Yearly'}
        </p>
        <div className='bg-indigo-50 dark:bg-indigo-900/20 mb-6 p-4 rounded-lg text-center'>
          <p className='text-gray-600 dark:text-gray-400 text-sm'>
            Total Amount
          </p>
          <p className='font-bold text-indigo-600 dark:text-indigo-400 text-3xl'>
            ₹{amount}
          </p>
        </div>
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm
            plan={plan}
            period={period}
            clientSecret={clientSecret}
          />
        </Elements>
      </div>
    </div>
  )
}

function CheckoutForm ({
  clientSecret
}: {
  plan: string
  period: string
  clientSecret: string
}) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState('')
  const [processing, setProcessing] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setProcessing(true)
    setError('')

    try {
      const cardElement = elements.getElement(CardElement)

      if (!cardElement) {
        throw new Error('Card element not found')
      }

      // Confirm payment with Stripe
      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement
          }
        })

      if (stripeError) {
        setError(stripeError.message || 'Payment failed')
        toast.error(stripeError.message || 'Payment failed')
        setProcessing(false)
        return
      }

      if (paymentIntent.status === 'succeeded') {
        // Confirm payment on backend
        try {
          await api.post('/payments/confirm', {
            paymentIntentId: paymentIntent.id
          })

          toast.success('Payment successful! Subscription activated.')
          router.push('/student')
        } catch (confirmError: unknown) {
          console.error('Error confirming payment:', confirmError)
          toast.error(
            'Payment succeeded but subscription activation failed. Please contact support.'
          )
          router.push('/dashboard')
        }
      }
    } catch (err: unknown) {
      console.error('Payment error:', err)
      if (err instanceof Error) {
        setError(err.message)
        toast.error(err.message)
      } else {
        setError('Payment failed')
        toast.error('Payment failed. Please try again.')
      }
    } finally {
      setProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label className='block mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm'>
          Card Details
        </label>
        <div className='bg-white dark:bg-gray-700 p-4 border border-gray-300 dark:border-gray-600 rounded-lg'>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4'
                  }
                },
                invalid: {
                  color: '#9e2146'
                }
              }
            }}
          />
        </div>
      </div>

      {error && (
        <div className='bg-red-50 dark:bg-red-900/20 p-3 border border-red-200 dark:border-red-800 rounded-lg'>
          <p className='text-red-600 dark:text-red-400 text-sm'>{error}</p>
        </div>
      )}

      <button
        type='submit'
        disabled={processing || !stripe}
        className='bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 py-3 rounded-lg w-full font-semibold text-white transition-colors disabled:cursor-not-allowed'
      >
        {processing ? (
          <span className='flex justify-center items-center gap-2'>
            <div className='border-white border-t-2 border-b-2 rounded-full w-4 h-4 animate-spin'></div>
            Processing...
          </span>
        ) : (
          'Pay Now'
        )}
      </button>

      <p className='text-gray-500 dark:text-gray-400 text-xs text-center'>
        🔒 Your payment is secure and encrypted
      </p>
    </form>
  )
}
