import { Switch } from '@headlessui/react';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import { PreferenceSection } from './PreferenceSection';

interface PrivacyPreferencesProps {
  privacy: {
    shareProgress: boolean;
    anonymousDataCollection: boolean;
    showProfilePublicly: boolean;
  };
  onChange: (key: string, value: boolean) => void;
}

export const PrivacyPreferences = ({ privacy, onChange }: PrivacyPreferencesProps) => {
  return (
    <PreferenceSection
      title="Privacy & Security"
      description="Control your privacy settings and data sharing preferences"
      icon={ShieldCheckIcon}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Share Progress</h4>
            <p className="text-sm text-gray-500">Allow sharing your progress with healthcare providers</p>
          </div>
          <Switch
            checked={privacy.shareProgress}
            onChange={(value) => onChange('shareProgress', value)}
            className={`${
              privacy.shareProgress ? 'bg-teal-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable progress sharing</span>
            <span
              className={`${
                privacy.shareProgress ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Anonymous Data Collection</h4>
            <p className="text-sm text-gray-500">Help improve our services with anonymous usage data</p>
          </div>
          <Switch
            checked={privacy.anonymousDataCollection}
            onChange={(value) => onChange('anonymousDataCollection', value)}
            className={`${
              privacy.anonymousDataCollection ? 'bg-teal-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable anonymous data collection</span>
            <span
              className={`${
                privacy.anonymousDataCollection ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Public Profile</h4>
            <p className="text-sm text-gray-500">Make your profile visible to other users</p>
          </div>
          <Switch
            checked={privacy.showProfilePublicly}
            onChange={(value) => onChange('showProfilePublicly', value)}
            className={`${
              privacy.showProfilePublicly ? 'bg-teal-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Show profile publicly</span>
            <span
              className={`${
                privacy.showProfilePublicly ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>
      </div>
    </PreferenceSection>
  );
};