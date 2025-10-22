'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { onboardingApi, OnboardingData } from '@/lib/onboarding'

export default function OnboardingPage () {
  const router = useRouter()

  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    purpose: '',
    userType: '',
    classLevel: '',
    skill: ''
  })

  const handleNext = () => setStep(prev => prev + 1)
  const handleBack = () => {
    setStep(prev => prev - 1)

    if (step === 3) {
      setFormData(prev => ({
        ...prev,
        classLevel: '',
        skill: ''
      }))
    } else if (step === 2) {
      setFormData(prev => ({
        ...prev,
        userType: '',
        classLevel: '',
        skill: ''
      }))
    }
  }

  const handleSelect = (key: string, value: string) => {
    if (key === 'purpose') {
      setFormData({
        purpose: value,
        userType: '',
        classLevel: '',
        skill: ''
      })
    } else if (key === 'userType') {
      setFormData({
        ...formData,
        userType: value,
        classLevel: '',
        skill: ''
      })
    } else {
      setFormData({ ...formData, [key]: value })
    }
  }

  const handleFinish = async () => {
    setLoading(true)
    try {
      const dataToSend: OnboardingData = {
        purpose: formData.purpose,
        userType: formData.userType
      }

      if (formData.classLevel) {
        dataToSend.classLevel = formData.classLevel
      }

      if (formData.skill) {
        dataToSend.skill = formData.skill
      }

      // Call API
      const response = await onboardingApi.updateOnboarding(dataToSend)

      console.log('Onboarding completed:', response)
      toast.success('Onboarding completed successfully!')

      // Redirect based on user answers
      const level = parseInt(formData.classLevel, 10)

      if (formData.purpose === 'find_opportunity') {
        router.push('/careers')
      } else if (formData.purpose === 'learn') {
        if (formData.userType === 'student' && !isNaN(level)) {
          if (level <= 5) {
            router.push('/primary-school-plan')
          } else {
            router.push('/high-school-plan')
          }
        } else if (formData.userType === 'learner') {
          router.push('/courses')
        } else {
          router.push('/general-dashboard')
        }
      } else {
        router.push('/')
      }
    } catch (err) {
      console.error('Failed to update user info:', err)
    } finally {
      setLoading(false)
    }
  }
  console.log(formData)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className='font-semibold text-3xl text-center'>
            Step {step} of 4
          </CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <motion.div
              key='step1'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className='mb-4 font-medium text-2xl'>I am here to:</h3>
              <RadioGroup
                onValueChange={v => handleSelect('purpose', v)}
                value={formData.purpose}
              >
                <div className='flex flex-col gap-3'>
                  <Label className='flex items-center gap-2 hover:bg-accent p-3 rounded-md text-xl transition-colors cursor-pointer'>
                    <RadioGroupItem value='learn' /> Learn
                  </Label>
                  <Label className='flex items-center gap-2 hover:bg-accent p-3 rounded-md text-xl transition-colors cursor-pointer'>
                    <RadioGroupItem value='find_opportunity' /> Find Opportunity
                  </Label>
                </div>
              </RadioGroup>
              <div className='flex justify-end mt-6'>
                <Button onClick={handleNext} disabled={!formData.purpose}>
                  Next
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && formData.purpose === 'learn' && (
            <motion.div
              key='step2-learn'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className='mb-4 font-medium text-2xl'>I am:</h3>
              <RadioGroup
                onValueChange={v => handleSelect('userType', v)}
                value={formData.userType}
              >
                <div className='flex flex-col gap-3'>
                  <Label className='flex items-center gap-2 hover:bg-accent p-3 rounded-md text-xl transition-colors cursor-pointer'>
                    <RadioGroupItem value='student' /> A Student
                  </Label>
                  <Label className='flex items-center gap-2 hover:bg-accent p-3 rounded-md text-xl transition-colors cursor-pointer'>
                    <RadioGroupItem value='learner' /> Looking to learn skills
                  </Label>
                </div>
              </RadioGroup>
              <div className='flex justify-between mt-6'>
                <Button variant='outline' onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleNext} disabled={!formData.userType}>
                  Next
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && formData.purpose === 'find_opportunity' && (
            <motion.div
              key='step2-opportunity'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className='mb-4 font-medium text-2xl'>I am:</h3>
              <RadioGroup
                onValueChange={v => handleSelect('userType', v)}
                value={formData.userType}
              >
                <div className='flex flex-col gap-3'>
                  <Label className='flex items-center gap-2 hover:bg-accent p-3 rounded-md text-xl transition-colors cursor-pointer'>
                    <RadioGroupItem value='teacher' /> Professional Teacher
                  </Label>
                  <Label className='flex items-center gap-2 hover:bg-accent p-3 rounded-md text-xl transition-colors cursor-pointer'>
                    <RadioGroupItem value='other_profession' /> Other Profession
                  </Label>
                </div>
              </RadioGroup>
              <div className='flex justify-between mt-6'>
                <Button variant='outline' onClick={handleBack}>
                  Back
                </Button>
                <Button
                  onClick={handleFinish}
                  disabled={!formData.userType || loading}
                >
                  {loading ? 'Saving...' : 'Continue'}
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && formData.userType === 'student' && (
            <motion.div
              key='step3-student'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className='mb-4 font-medium text-2xl'>
                What class do you read in?
              </h3>
              <RadioGroup
                onValueChange={v => handleSelect('classLevel', v)}
                value={formData.classLevel}
              >
                <div className='flex flex-col gap-3'>
                  {[6, 7, 8, 9, 10].map(cls => (
                    <Label
                      key={cls}
                      className='flex items-center gap-2 hover:bg-accent p-3 rounded-md text-xl transition-colors cursor-pointer'
                    >
                      <RadioGroupItem value={cls.toString()} /> Class {cls}
                    </Label>
                  ))}
                </div>
              </RadioGroup>
              <div className='flex justify-between mt-6'>
                <Button variant='outline' onClick={handleBack}>
                  Back
                </Button>
                <Button
                  onClick={handleFinish}
                  disabled={!formData.classLevel || loading}
                >
                  {loading ? 'Saving...' : 'Continue'}
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && formData.userType === 'learner' && (
            <motion.div
              key='step3-learner'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className='mb-4 font-medium text-2xl'>
                What type of skill do you want to learn?
              </h3>
              <RadioGroup
                onValueChange={v => handleSelect('skill', v)}
                value={formData.skill}
              >
                <div className='flex flex-col gap-3'>
                  <Label className='flex items-center gap-2 hover:bg-accent p-3 rounded-md text-xl transition-colors cursor-pointer'>
                    <RadioGroupItem value='digital_marketing' /> Digital
                    Marketing
                  </Label>
                  <Label className='flex items-center gap-2 hover:bg-accent p-3 rounded-md text-xl transition-colors cursor-pointer'>
                    <RadioGroupItem value='video_editing' /> Video Editing
                  </Label>
                </div>
              </RadioGroup>
              <div className='flex justify-between mt-6'>
                <Button variant='outline' onClick={handleBack}>
                  Back
                </Button>
                <Button
                  onClick={handleFinish}
                  disabled={!formData.skill || loading}
                >
                  {loading ? 'Saving...' : 'Continue'}
                </Button>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
