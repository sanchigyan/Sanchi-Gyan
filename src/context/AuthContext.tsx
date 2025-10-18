'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'
import { useRouter } from 'next/navigation'
import { authApi, setAuthData, getAuthData, isAuthenticated as checkAuth  } from '@/lib/auth'
import { User, SignupData, SigninData } from '@/types/auth.types'
import toast from 'react-hot-toast'

interface AuthContextType {
  user: User | null
  loading: boolean
  signin: (data: SigninData) => Promise<void>
  signup: (data: SignupData) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isClient, setIsClient] = useState(false);
  const router = useRouter()

   // Set client flag after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check if user is logged in on mount (only on client)
  useEffect(() => {
    if (!isClient) return; // Don't run on server

    const checkAuth = async () => {
      try {
        const { accessToken, user: savedUser } = getAuthData()

        if (accessToken && savedUser) {
          // Verify token is still valid by fetching current user
          const response = await authApi.getCurrentUser()
          setUser(response.data)
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        // Token invalid, clear data
        authApi.logout()
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [isClient])

  const signup = async (data: SignupData) => {
    try {
      const response = await authApi.signup(data)
      const { user, accessToken, refreshToken } = response.data

      setAuthData(accessToken, refreshToken, user)
      setUser(user)

      toast.success('Account created successfully!')
      router.push('/')
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Signup failed'
      toast.error(message)
      throw error
    }
  }

  const signin = async (data: SigninData) => {
    try {
      const response = await authApi.signin(data)
      const { user, accessToken, refreshToken } = response.data

      setAuthData(accessToken, refreshToken, user)
      setUser(user)

      toast.success('Logged in successfully!')
      router.push('/')
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Login failed'
      toast.error(message)
      throw error
    }
  }

  const logout = () => {
    authApi.logout()
    setUser(null)
    toast.success('Logged out successfully')
    router.push('/login')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signin,
        signup,
        logout,
        isAuthenticated: isClient ? checkAuth() : false,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
