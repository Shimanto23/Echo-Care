export interface Preferences {
  notifications: boolean;
  emailUpdates: boolean;
  darkMode: boolean;
  language: string;
  reminders: boolean;
}

export interface PreferencesProps {
  preferences: Preferences;
  onPreferenceChange: (key: keyof Preferences, value: boolean) => void;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  bio: string;
}