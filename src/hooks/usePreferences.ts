import { useState } from 'react';
import { Preferences } from '../types/profile';

export const usePreferences = (initialPreferences: Preferences) => {
  const [preferences, setPreferences] = useState<Preferences>(initialPreferences);

  const handlePreferenceChange = (key: keyof Preferences, value: boolean | string) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));

    // Here you could also persist the changes to localStorage or an API
    localStorage.setItem('userPreferences', JSON.stringify({
      ...preferences,
      [key]: value
    }));
  };

  return {
    preferences,
    handlePreferenceChange
  };
};