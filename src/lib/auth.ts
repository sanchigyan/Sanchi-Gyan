import Cookies from 'js-cookie';
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
  signup: async (data: SignupData): Promise<AuthResponse> => {
    const response = await api.post('/auth/signup', data);
    return response.data;
  },

  signin: async (data: SigninData): Promise<AuthResponse> => {
    const response = await api.post('/auth/signin', data);
    return response.data;
  },

  forgotPassword: async (data: ForgotPasswordData) => {
    const response = await api.post('/auth/forgot-password', data);
    return response.data;
  },

  resetPassword: async (data: ResetPasswordData) => {
    const response = await api.post('/auth/reset-password', data);
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data; 
  },

  logout: () => {
    try {
      Cookies.remove('accessToken', { path: '/' });
      Cookies.remove('refreshToken', { path: '/' });
      Cookies.remove('user', { path: '/' });
      console.log('🗑️ Auth cookies cleared');
    } catch (error) {
      console.error('Error clearing cookies:', error);
    }
  },
};

// IMPORTANT: Set path to '/' for all cookies
export const setAuthData = (accessToken: string, refreshToken: string, user: User) => {
  try {
    console.log('💾 Saving to cookies with persistence...');

    const cookieOptions = {
      path: '/',           // Available on all pages
      sameSite: 'lax' as const, // More permissive than 'strict'
      // Don't set secure in development (only in production)
      secure: process.env.NODE_ENV === 'production',
    };

    // Access token - 1 year
    Cookies.set('accessToken', accessToken, {
      ...cookieOptions,
      expires: 365, // 1 year
    });

    // Refresh token - 1 year
    Cookies.set('refreshToken', refreshToken, {
      ...cookieOptions,
      expires: 365, // 1 year
    });

    // User data - 1 year
    Cookies.set('user', JSON.stringify(user), {
      ...cookieOptions,
      expires: 365, // 1 year
    });

    // Verify cookies were set
    const verify = {
      accessToken: Cookies.get('accessToken'),
      refreshToken: Cookies.get('refreshToken'),
      user: Cookies.get('user')
    };

    console.log('✅ Cookies saved:', {
      hasAccessToken: !!verify.accessToken,
      hasRefreshToken: !!verify.refreshToken,
      hasUser: !!verify.user,
      tokenPreview: verify.accessToken?.substring(0, 20) + '...'
    });

    if (!verify.accessToken || !verify.refreshToken || !verify.user) {
      console.error('⚠️ WARNING: Some cookies were not saved!');
      console.log('Browser might be blocking cookies. Check browser settings.');
    }

  } catch (error) {
    console.error('❌ Error saving cookies:', error);
  }
};

export const getAuthData = () => {
  try {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');
    const userStr = Cookies.get('user');
    const user = userStr ? JSON.parse(userStr) : null;

    console.log('📖 Reading cookies:', {
      hasAccessToken: !!accessToken,
      hasRefreshToken: !!refreshToken,
      hasUser: !!user,
      tokenPreview: accessToken ? accessToken.substring(0, 20) + '...' : 'none'
    });

    return { accessToken, refreshToken, user };
  } catch (error) {
    console.error('❌ Error reading cookies:', error);
    return { accessToken: null, refreshToken: null, user: null };
  }
};

export const isAuthenticated = () => {
  const { accessToken } = getAuthData();
  return !!accessToken;
};