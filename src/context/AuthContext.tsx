'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'
import { useRouter } from 'next/navigation'
import { authApi, setAuthData, getAuthData } from '@/lib/auth'
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
  const router = useRouter()

  // Check if user is logged in on mount 
  useEffect(() => {
   const initAuth = async () => {
      // Wait for client-side hydration
      if (typeof window === 'undefined') {
        setLoading(false);
        return;
      }

      try {
        const { accessToken, user: savedUser } = getAuthData();
        
        console.log('🔍 Checking auth...', { 
          hasToken: !!accessToken, 
          hasUser: !!savedUser 
        });

        if (accessToken && savedUser) {
          // Try to verify token with backend
          try {
            const response = await authApi.getCurrentUser();
            console.log('✅ User verified:', response.data);
            setUser(response.data);
          } catch (error) {
            console.log(error);
            // Token invalid, clear data
            // authApi.logout();
            // setUser(null);
          }
        } else {
          console.log('⚠️ No saved auth data found');
          // setUser(null);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        // setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth()
  }, [])

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
  };

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
        isAuthenticated: !!user,
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
