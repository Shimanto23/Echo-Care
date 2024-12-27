import { ComponentType } from 'react';
import { EyeIcon, DocumentTextIcon, NoSymbolIcon } from '@heroicons/react/24/outline';
import { PreferenceSection } from './PreferenceSection';
import { AccessibilityToggle } from './toggles/AccessibilityToggle';
import { HeroIcon } from '../../../types/icons';

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
      icon={EyeIcon as ComponentType<HeroIcon>}
    >
      <div className="space-y-4">
        <AccessibilityToggle
          title="High Contrast"
          description="Increase contrast for better visibility"
          icon={EyeIcon as ComponentType<HeroIcon>}
          enabled={accessibility.highContrast}
          onChange={(value) => onChange('highContrast', value)}
        />

        <AccessibilityToggle
          title="Large Text"
          description="Increase text size throughout the app"
          icon={DocumentTextIcon as ComponentType<HeroIcon>}
          enabled={accessibility.largeText}
          onChange={(value) => onChange('largeText', value)}
        />

        <AccessibilityToggle
          title="Reduce Motion"
          description="Minimize animations and transitions"
          icon={NoSymbolIcon as ComponentType<HeroIcon>}
          enabled={accessibility.reduceMotion}
          onChange={(value) => onChange('reduceMotion', value)}
        />
      </div>
    </PreferenceSection>
  );
};