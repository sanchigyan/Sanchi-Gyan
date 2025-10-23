export interface User {
  id: string;
  email: string;
  fullname: string;
  role: 'ADMIN' | 'TEACHER' | 'STUDENT' | 'USER';
  profileImageUrl?: string;
  isEmailVerified: boolean;
}

export interface AuthResponse {
  success: boolean;
  data: {
    user: User;
    accessToken: string;
    refreshToken: string;
  };
}

export interface SignupData {
  email: string;
  password: string;
  fullname: string;
}

export interface SigninData {
  email: string;
  password: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  token: string;
  newPassword: string;
}