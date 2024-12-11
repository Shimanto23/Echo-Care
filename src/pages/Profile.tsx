import { useState } from 'react';
import { ProfileOverview } from '../components/profile/ProfileOverview';
import { PersonalInfoSection } from '../components/profile/PersonalInfoSection';
import { PreferencesSection } from '../components/profile/PreferencesSection';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Demo User',
    email: 'demo@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    timezone: 'Pacific Time (PT)',
    bio: 'Passionate about mental health and well-being.',
    avatarUrl: null as string | null
  });

  const [preferences, setPreferences] = useState({
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
  });

  const handlePreferenceChange = (
    section: 'notifications' | 'privacy' | 'accessibility',
    key: string,
    value: boolean
  ) => {
    setPreferences(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  const handleAvatarChange = (url: string) => {
    setProfile(prev => ({
      ...prev,
      avatarUrl: url
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <ProfileOverview
            name={profile.name}
            email={profile.email}
            location={profile.location}
            avatarUrl={profile.avatarUrl}
            onImageChange={handleAvatarChange}
          />
        </div>

        <div className="md:col-span-2">
          <PersonalInfoSection
            personalInfo={profile}
            isEditing={isEditing}
            onEditToggle={() => setIsEditing(!isEditing)}
          />
          <PreferencesSection
            preferences={preferences}
            onPreferenceChange={handlePreferenceChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;