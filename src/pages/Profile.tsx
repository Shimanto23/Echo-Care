import { useState } from 'react';
import { ProfileOverview } from '../components/profile/ProfileOverview';
import { PersonalInfoSection } from '../components/profile/PersonalInfoSection';
import { PreferencesSection } from '../components/profile/PreferencesSection';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [personalInfo] = useState({
    name: 'Demo User',
    email: 'demo@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    timezone: 'Pacific Time (PT)',
    bio: 'Passionate about mental health and well-being.'
  });

  const [preferences, setPreferences] = useState({
    notifications: true,
    emailUpdates: true,
    darkMode: false,
    language: 'English',
    reminders: true
  });

  const handlePreferenceChange = (key: keyof typeof preferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <ProfileOverview
            name={personalInfo.name}
            email={personalInfo.email}
            location={personalInfo.location}
          />
        </div>

        <div className="md:col-span-2">
          <PersonalInfoSection
            personalInfo={personalInfo}
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