import { NotificationPreferences } from './preferences/NotificationPreferences';
import { PrivacyPreferences } from './preferences/PrivacyPreferences';
import { AccessibilityPreferences } from './preferences/AccessibilityPreferences';
import { PreferencesProps } from '../../types/profile';

export const PreferencesSection = ({ preferences, onPreferenceChange }: PreferencesProps) => {
  const handleNotificationChange = (key: string, value: boolean) => {
    onPreferenceChange('notifications', key, value);
  };

  const handlePrivacyChange = (key: string, value: boolean) => {
    onPreferenceChange('privacy', key, value);
  };

  const handleAccessibilityChange = (key: string, value: boolean) => {
    onPreferenceChange('accessibility', key, value);
  };

  return (
    <div className="space-y-6">
      <NotificationPreferences
        notifications={preferences.notifications}
        onChange={handleNotificationChange}
      />
      
      <PrivacyPreferences
        privacy={preferences.privacy}
        onChange={handlePrivacyChange}
      />
      
      <AccessibilityPreferences
        accessibility={preferences.accessibility}
        onChange={handleAccessibilityChange}
      />
    </div>
  );
};