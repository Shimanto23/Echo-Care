import { Switch } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import { PreferenceSection } from './PreferenceSection';

interface NotificationPreferencesProps {
  notifications: {
    enabled: boolean;
    dailyReminders: boolean;
    weeklyDigest: boolean;
    moodReminders: boolean;
    meditationReminders: boolean;
  };
  onChange: (key: string, value: boolean) => void;
}

export const NotificationPreferences = ({ notifications, onChange }: NotificationPreferencesProps) => {
  return (
    <PreferenceSection
      title="Notifications"
      description="Manage how and when you receive notifications"
      icon={BellIcon}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Enable Notifications</h4>
            <p className="text-sm text-gray-500">Receive important updates and reminders</p>
          </div>
          <Switch
            checked={notifications.enabled}
            onChange={(value) => onChange('enabled', value)}
            className={`${
              notifications.enabled ? 'bg-teal-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                notifications.enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>

        {notifications.enabled && (
          <div className="ml-4 space-y-4 border-l-2 border-gray-100 pl-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Daily Reminders</h4>
                <p className="text-sm text-gray-500">Get daily check-in reminders</p>
              </div>
              <Switch
                checked={notifications.dailyReminders}
                onChange={(value) => onChange('dailyReminders', value)}
                className={`${
                  notifications.dailyReminders ? 'bg-teal-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable daily reminders</span>
                <span
                  className={`${
                    notifications.dailyReminders ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Weekly Digest</h4>
                <p className="text-sm text-gray-500">Receive weekly progress summary</p>
              </div>
              <Switch
                checked={notifications.weeklyDigest}
                onChange={(value) => onChange('weeklyDigest', value)}
                className={`${
                  notifications.weeklyDigest ? 'bg-teal-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable weekly digest</span>
                <span
                  className={`${
                    notifications.weeklyDigest ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Mood Tracking</h4>
                <p className="text-sm text-gray-500">Get mood check-in reminders</p>
              </div>
              <Switch
                checked={notifications.moodReminders}
                onChange={(value) => onChange('moodReminders', value)}
                className={`${
                  notifications.moodReminders ? 'bg-teal-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable mood reminders</span>
                <span
                  className={`${
                    notifications.moodReminders ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Meditation</h4>
                <p className="text-sm text-gray-500">Get meditation session reminders</p>
              </div>
              <Switch
                checked={notifications.meditationReminders}
                onChange={(value) => onChange('meditationReminders', value)}
                className={`${
                  notifications.meditationReminders ? 'bg-teal-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable meditation reminders</span>
                <span
                  className={`${
                    notifications.meditationReminders ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>
          </div>
        )}
      </div>
    </PreferenceSection>
  );
};