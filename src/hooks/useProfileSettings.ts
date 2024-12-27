import { useState, useEffect } from 'react';
import { PersonalInfo } from '../components/profile/types';
import { UserPreferences } from '../types/profile';

const defaultProfile: PersonalInfo = {
  name: 'Demo User',
  email: 'demo@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  timezone: 'Pacific Time (PT)',
  bio: 'Passionate about mental health and well-being.',
  avatarUrl: ''
};

const defaultPreferences: UserPreferences = {
  notifications: {
    enabled: true,
    dailyReminders: true,
    weeklyDigest: true,
    moodReminders: true,
    meditationReminders: true
  },
  privacy: {
    shareProgress: false,
    anonymousDataCollection: true,
    showProfilePublicly: false
  },
  accessibility: {
    highContrast: false,
    largeText: false,
    reduceMotion: false
  }
};

export const useProfileSettings = () => {
  const [profile, setProfile] = useState<PersonalInfo>(defaultProfile);
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);

  // Load saved settings on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    const savedPreferences = localStorage.getItem('userPreferences');

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const updateProfile = (newProfile: PersonalInfo) => {
    setProfile(newProfile);
    localStorage.setItem('userProfile', JSON.stringify(newProfile));
  };

  const updatePreferences = (
    section: keyof UserPreferences,
    key: string,
    value: boolean
  ) => {
    const updatedPreferences = {
      ...preferences,
      [section]: {
        ...preferences[section],
        [key]: value
      }
    };
    setPreferences(updatedPreferences);
    localStorage.setItem('userPreferences', JSON.stringify(updatedPreferences));
  };

  return {
    profile,
    preferences,
    updateProfile,
    updatePreferences
  };
};