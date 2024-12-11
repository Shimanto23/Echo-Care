import { Switch } from '@headlessui/react';
import { Preferences } from '../../types/profile';

interface PreferencesSectionProps {
  preferences: Preferences;
  onPreferenceChange: (key: keyof Preferences, value: boolean | string) => void;
}

export const PreferencesSection = ({ 
  preferences,
  onPreferenceChange
}: PreferencesSectionProps) => {
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
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                preferences.notifications ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>

        {/* Email Updates */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Email Updates</h3>
            <p className="text-sm text-gray-500">Receive weekly progress reports and tips</p>
          </div>
          <Switch
            checked={preferences.emailUpdates}
            onChange={(value) => onPreferenceChange('emailUpdates', value)}
            className={`${
              preferences.emailUpdates ? 'bg-teal-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2`}
          >
            <span className="sr-only">Enable email updates</span>
            <span
              className={`${
                preferences.emailUpdates ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>

        {/* Dark Mode */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Dark Mode</h3>
            <p className="text-sm text-gray-500">Use dark theme for better night viewing</p>
          </div>
          <Switch
            checked={preferences.darkMode}
            onChange={(value) => onPreferenceChange('darkMode', value)}
            className={`${
              preferences.darkMode ? 'bg-teal-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2`}
          >
            <span className="sr-only">Enable dark mode</span>
            <span
              className={`${
                preferences.darkMode ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>

        {/* Daily Reminders */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Daily Reminders</h3>
            <p className="text-sm text-gray-500">Get reminders for mood tracking and meditation</p>
          </div>
          <Switch
            checked={preferences.reminders}
            onChange={(value) => onPreferenceChange('reminders', value)}
            className={`${
              preferences.reminders ? 'bg-teal-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2`}
          >
            <span className="sr-only">Enable daily reminders</span>
            <span
              className={`${
                preferences.reminders ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>

        {/* Language Selection */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Language</h3>
            <p className="text-sm text-gray-500">Select your preferred language</p>
          </div>
          <select
            value={preferences.language}
            onChange={(e) => onPreferenceChange('language', e.target.value)}
            className="mt-1 block w-40 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </div>
    </div>
  );
};