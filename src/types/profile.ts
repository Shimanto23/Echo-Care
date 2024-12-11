export interface Preferences {
  notifications: boolean;
  emailUpdates: boolean;
  darkMode: boolean;
  language: string;
  reminders: boolean;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  bio: string;
}