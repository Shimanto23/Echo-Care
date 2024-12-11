interface Preferences {
  notifications: boolean;
  emailUpdates: boolean;
  darkMode: boolean;
  language: string;
  reminders: boolean;
}

interface PreferencesSectionProps {
  preferences: Preferences;
  onPreferenceChange: (key: keyof Preferences, value: boolean) => void;
}

export const PreferencesSection = ({ 
  preferences,
  onPreferenceChange
}: PreferencesSectionProps) => {
  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold mb-6">Preferences</h2>
      <div className="space-y-4">
        {(Object.entries(preferences) as [keyof Preferences, boolean | string][]).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <span className="text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
            {typeof value === 'boolean' && (
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => onPreferenceChange(key, e.target.checked)}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};