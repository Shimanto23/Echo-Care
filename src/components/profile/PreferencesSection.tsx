import { Switch } from '@headlessui/react';
import { PreferencesProps } from '../../types/profile';

export const PreferencesSection = ({ preferences, onPreferenceChange }: PreferencesProps) => {
  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold mb-6">Preferences</h2>
      <div className="space-y-6">
        {/* Notifications */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
            <p className="text-sm text-gray-500">Receive app notifications and reminders</p>
          </div>
          <Switch
            checked={preferences.notifications}
            onChange={(value) => onPreferenceChange('notifications', value)}
            className={`${
              preferences.notifications ? 'bg-teal-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                preferences.notifications ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>

        {/* Other preference switches... */}
      </div>
    </div>
  );
};