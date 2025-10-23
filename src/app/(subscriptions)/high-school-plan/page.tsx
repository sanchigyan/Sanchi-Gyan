'use client'

import Button from '@/components/shared/button'
import api from '@/lib/api'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function HignSchoolSubscriptionPage () {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>(
    'annual'
  )
  const router = useRouter()

  const plans = [
    {
      id: 'free',
      name: 'Free Trial',
      description: 'Get started with basic access',
      price: {
        monthly: 0,
        annual: 0
      },
      features: [
        'Access to 5 beginner courses',
        'Community support',
        'Limited learning resources',
        '7-day free trial of premium features',
        'Basic progress tracking'
      ],
      limitations: [
        'No certificate of completion',
        'Limited course access',
        'Ad-supported experience'
      ],
      ctaText: 'Start Free Trial',
      popular: false,
      color: 'gray'
    },
    {
      id: 'basic',
      name: 'Basic',
      description: 'For self-paced learners',
      price: {
        monthly: 799,
        annual: 7990 // 799 * 10 (2 months free)
      },
      features: [
        'Access to all courses',
        'Downloadable resources',
        'Ad-free experience',
        'Certificate of completion',
        'Progress tracking',
        'Email support'
      ],
      limitations: [
        'No live sessions',
        'Limited project feedback',
        'Standard video quality'
      ],
      ctaText: 'Get Started',
      popular: false,
      color: 'blue'
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Most popular for serious learners',
      price: {
        monthly: 1299,
        annual: 12990 // 1299 * 10 (2 months free)
      },
      features: [
        'Everything in Basic',
        'Live Q&A sessions',
        'Priority support',
        'Personalized learning path',
        'HD video quality',
        'Offline viewing',
        'Monthly career webinars'
      ],
      limitations: ['No 1:1 mentorship', 'Limited project reviews'],
      ctaText: 'Choose Premium',
      popular: true,
      color: 'purple'
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'For career advancement',
      price: {
        monthly: 1999,
        annual: 19990 // 1999 * 10 (2 months free)
      },
      features: [
        'Everything in Premium',
        '1:1 mentorship sessions',
        'Project reviews & feedback',
        'Career coaching',
        'Resume review',
        'Job placement assistance',
        'Exclusive workshops',
        'Early access to new courses'
      ],
      limitations: [],
      ctaText: 'Go Pro',
      popular: false,
      color: 'indigo'
    }
  ]

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')
  }

  const calculateAnnualSavings = (monthlyPrice: number) => {
    return monthlyPrice * 12 - monthlyPrice * 10
  }

  const handlePlanSelection = async (planId: string) => {
    if (planId === 'free') {
      try {
        await api.post('/subscriptions/me/trial') // No body needed; api adds token/baseURL
        router.push('/student')
      } catch (error) {
        console.error('Trial activation failed', error)
        // Show toast/error
      }
    } else {
      router.push(`/checkout?plan=${planId}&period=${billingPeriod}`)
    }
  }

  return (
    <div className='bg-gradient-to-br from-gray-50 to-indigo-50 min-h-screen'>
      <main className='pt-24 pb-16'>
        {/* Header Section - Added fade-in */}
        <section className='mx-auto mb-12 px-4 sm:px-6 lg:px-8 max-w-7xl text-center animate-fade-in'>
          <h1 className='bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 font-extrabold text-transparent text-4xl'>
            High School Plan - Choose Your Learning Journey
          </h1>
          <p className='mx-auto max-w-3xl text-gray-700 text-xl'>
            Unlock your potential with plans tailored for high school success.
            Start free or go premium for unlimited access.
          </p>

          {/* Billing Toggle - Improved UI */}
          <div className='flex justify-center items-center mt-8'>
            <span
              className={`mr-4 font-semibold ${
                billingPeriod === 'monthly'
                  ? 'text-indigo-700'
                  : 'text-gray-500'
              }`}
            >
              Monthly
            </span>
            <Button
              onClick={toggleBillingPeriod}
              className='relative bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 w-14 h-7 transition duration-200'
            >
              <span
                className={`absolute left-0 top-0 w-7 h-7 rounded-full transition-transform duration-300 transform ${
                  billingPeriod === 'annual'
                    ? 'translate-x-7 bg-indigo-600'
                    : 'translate-x-0 bg-white shadow'
                }`}
              />
            </Button>
            <span
              className={`ml-4 font-semibold ${
                billingPeriod === 'annual' ? 'text-indigo-700' : 'text-gray-500'
              }`}
            >
              Annual
              <span className='bg-indigo-200 ml-2 px-3 py-1 rounded-full font-medium text-indigo-800 text-sm'>
                Save 17%
              </span>
            </span>
          </div>
        </section>

        {/* Pricing Plans - Grid with hover effects */}
        <section className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {plans.map(plan => (
              <div
                key={plan.id}
                className={`relative rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'ring-4 ring-indigo-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className='top-0 left-0 absolute bg-indigo-600 py-2 w-full font-semibold text-white text-sm text-center'>
                    Most Popular
                  </div>
                )}
                <div className='p-8'>
                  <h3 className='mb-2 font-bold text-gray-900 text-2xl'>
                    {plan.name}
                  </h3>
                  <p className='mb-6 text-gray-600'>{plan.description}</p>
                  <div className='mb-6'>
                    <span className='font-extrabold text-indigo-600 text-4xl'>
                      ₹
                      {billingPeriod === 'monthly'
                        ? plan.price.monthly
                        : plan.price.annual}
                    </span>
                    <span className='ml-1 text-gray-500'>/{billingPeriod}</span>
                  </div>
                  {plan.id !== 'free' && billingPeriod === 'annual' && (
                    <p className='mb-6 font-medium text-green-600'>
                      Save ₹{calculateAnnualSavings(plan.price.monthly)} yearly
                    </p>
                  )}
                  <button
                    onClick={() => handlePlanSelection(plan.id)}
                    className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                      plan.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-indigo-200 text-indigo-800 hover:bg-indigo-300'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
                <div className='bg-gray-50 px-8 py-6'>
                  <h4 className='mb-4 font-semibold text-gray-700 text-sm uppercase'>
                    Features
                  </h4>
                  <ul className='space-y-2'>
                    {plan.features.map(feature => (
                      <li
                        key={feature}
                        className='flex items-center text-gray-600'
                      >
                        <svg
                          className='mr-2 w-5 h-5 text-green-500'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {plan.limitations.length > 0 && (
                    <>
                      <h4 className='mt-6 mb-4 font-semibold text-gray-700 text-sm uppercase'>
                        Limitations
                      </h4>
                      <ul className='space-y-2'>
                        {plan.limitations.map(lim => (
                          <li
                            key={lim}
                            className='flex items-center text-gray-600'
                          >
                            <svg
                              className='mr-2 w-5 h-5 text-red-500'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' />
                            </svg>
                            {lim}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section - Accordion style for better UX */}
        <section className='mx-auto mt-16 px-4 sm:px-6 lg:px-8 max-w-4xl'>
          <h2 className='mb-12 font-bold text-gray-900 text-3xl text-center'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-4'>
            {/* Use details/summary for accordion */}
            <details className='bg-white shadow p-6 rounded-lg'>
              <summary className='font-medium text-gray-900 text-lg cursor-pointer'>
                Can I change my plan later?
              </summary>
              <p className='mt-2 text-gray-600'>
                Yes, upgrade or downgrade anytime. Changes apply immediately for
                upgrades.
              </p>
            </details>
            {/* Repeat for other FAQs */}
            <details className='bg-white shadow p-6 rounded-lg'>
              <summary className='font-medium text-gray-900 text-lg cursor-pointer'>
                Do you offer refunds?
              </summary>
              <p className='mt-2 text-gray-600'>
                14-day money-back for annual plans.
              </p>
            </details>
            <details className='bg-white shadow p-6 rounded-lg'>
              <summary className='font-medium text-gray-900 text-lg cursor-pointer'>
                Can I cancel my subscription?
              </summary>
              <p className='mt-2 text-gray-600'>
                Yes, access continues until end of billing period.
              </p>
            </details>
            <details className='bg-white shadow p-6 rounded-lg'>
              <summary className='font-medium text-gray-900 text-lg cursor-pointer'>
                Are there any hidden fees?
              </summary>
              <p className='mt-2 text-gray-600'>
                No, prices include all taxes.
              </p>
            </details>
          </div>
        </section>
      </main>
    </div>
  )
}
