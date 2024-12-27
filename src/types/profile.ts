// Update the preferences types to be more specific
export interface NotificationPreferences {
  enabled: boolean;
  dailyReminders: boolean;
  weeklyDigest: boolean;
  moodReminders: boolean;
  meditationReminders: boolean;
}

export interface PrivacyPreferences {
  shareProgress: boolean;
  anonymousDataCollection: boolean;
  showProfilePublicly: boolean;
}

export interface AccessibilityPreferences {
  highContrast: boolean;
  largeText: boolean;
  reduceMotion: boolean;
}

export interface UserPreferences {
  notifications: NotificationPreferences;
  privacy: PrivacyPreferences;
  accessibility: AccessibilityPreferences;
}

export interface PreferencesProps {
  preferences: UserPreferences;
  onPreferenceChange: (
    section: keyof UserPreferences,
    key: string,
    value: boolean
  ) => void;
}

export interface ProfileImageProps {
  imageUrl: string | null;
  onImageUpload: (file: File) => void;
  isUploading?: boolean;
}

export type Preferences = {
  notifications: boolean;
  emailUpdates: boolean;
  darkMode: boolean;
  language: string;
  reminders: boolean;
}