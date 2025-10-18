import api from './api';
import { 
  AuthResponse, 
  SignupData, 
  SigninData, 
  ForgotPasswordData, 
  ResetPasswordData, 
  User
} from '@/types/auth.types';

export const authApi = {
  // Signup
  signup: async (data: SignupData): Promise<AuthResponse> => {
    const response = await api.post('/auth/signup', data);
    return response.data;
  },

  // Signin
  signin: async (data: SigninData): Promise<AuthResponse> => {
    const response = await api.post('/auth/signin', data);
    return response.data;
  },

  // Forgot Password
  forgotPassword: async (data: ForgotPasswordData) => {
    const response = await api.post('/auth/forgot-password', data);
    return response.data;
  },

  // Reset Password
  resetPassword: async (data: ResetPasswordData) => {
    const response = await api.post('/auth/reset-password', data);
    return response.data;
  },

  // Get current user
  getCurrentUser: async () => {
    const response = await api.get('/users/me');
    return response.data;
  },

  // Logout
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    }
  },
};

// Helper functions
export const setAuthData = (accessToken: string, refreshToken: string, user: User) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(user));
  }
};

export const getAuthData = () => {
  if (typeof window === 'undefined') {
    // Server-side: return empty data
    return { accessToken: null, refreshToken: null, user: null };
  }

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  return { accessToken, refreshToken, user };
};

export const isAuthenticated = () => {
  if (typeof window === 'undefined') {
    return false; // Server-side: not authenticated
  }
  
  const { accessToken } = getAuthData();
  return !!accessToken;
};