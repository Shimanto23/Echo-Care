import { Switch } from '@headlessui/react';
import { EyeIcon } from '@heroicons/react/24/outline';
import { PreferenceSection } from './PreferenceSection';

interface AccessibilityPreferencesProps {
  accessibility: {
    highContrast: boolean;
    largeText: boolean;
    reduceMotion: boolean;
  };
  onChange: (key: string, value: boolean) => void;
}

export const AccessibilityPreferences = ({ accessibility, onChange }: AccessibilityPreferencesProps) => {
  return (
    <PreferenceSection
      title="Accessibility"
      description="Customize your experience for better accessibility"
      icon={EyeIcon}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">High Contrast</h4>
            <p className="text-sm text-gray-500">Increase contrast for better visibility</p>
          </div>
          <Switch
            checked={accessibility.highContrast}
            onChange={(value) => onChange('highContrast', value)}
            className={`${
              accessibility.highContrast ? 'bg-teal-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable high contrast</span>
            <span
              className={`${
                accessibility.highContrast ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Large Text</h4>
            <p className="text-sm text-gray-500">Increase text size throughout the app</p>
          </div>
          <Switch
            checked={accessibility.largeText}
            onChange={(value) => onChange('largeText', value)}
            className={`${
              accessibility.largeText ? 'bg-teal-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable large text</span>
            <span
              className={`${
                accessibility.largeText ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Reduce Motion</h4>
            <p className="text-sm text-gray-500">Minimize animations and transitions</p>
          </div>
          <Switch
            checked={accessibility.reduceMotion}
            onChange={(value) => onChange('reduceMotion', value)}
            className={`${
              accessibility.reduceMotion ? 'bg-teal-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable reduce motion</span>
            <span
              className={`${
                accessibility.reduceMotion ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>
      </div>
    </PreferenceSection>
  );
};