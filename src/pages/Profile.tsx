import { useState } from 'react';
import { ProfileOverview } from '../components/profile/ProfileOverview';
import { PersonalInfoSection } from '../components/profile/PersonalInfoSection';
import { PreferencesSection } from '../components/profile/PreferencesSection';
import { useProfileSettings } from '../hooks/useProfileSettings';
import type { PersonalInfo } from '../components/profile/types';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { profile, preferences, updateProfile, updatePreferences } = useProfileSettings();

  const handleAvatarChange = (url: string) => {
    updateProfile({
      ...profile,
      avatarUrl: url
    });
  };

  const handleProfileSave = (updatedInfo: Omit<PersonalInfo, 'avatarUrl'>) => {
    updateProfile({
      ...profile,
      ...updatedInfo
    });
    setIsEditing(false);
  };

  const handlePreferenceChange = (
    section: 'notifications' | 'privacy' | 'accessibility',
    key: string,
    value: boolean
  ) => {
    updatePreferences(section, key, value);
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
            onSave={handleProfileSave}
          />
          <div className="mt-6">
            <PreferencesSection
              preferences={preferences}
              onPreferenceChange={handlePreferenceChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;