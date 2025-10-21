import api from './api';

export interface OnboardingData {
  purpose: string;
  userType: string;
  classLevel?: string;
  skill?: string;
}

export const onboardingApi = {
  // Update onboarding information
  updateOnboarding: async (data: OnboardingData) => {
    const response = await api.post('/users/me/onboarding', data);
    return response.data;
  },

  // Get onboarding status
  getOnboardingStatus: async () => {
    const response = await api.get('/users/me/onboarding');
    return response.data;
  },
};