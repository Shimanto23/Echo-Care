import { Switch } from '@headlessui/react';
import { IconComponent } from '../../../../types/icons';

interface AccessibilityToggleProps {
  title: string;
  description: string;
  icon: IconComponent;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

export const AccessibilityToggle = ({
  title,
  description,
  icon: Icon,
  enabled,
  onChange
}: AccessibilityToggleProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-gray-100 rounded-lg">
          <Icon className="w-5 h-5 text-gray-600" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-900">{title}</h4>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <Switch
        checked={enabled}
        onChange={onChange}
        className={`${
          enabled ? 'bg-teal-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2`}
      >
        <span className="sr-only">{title}</span>
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
        />
      </Switch>
    </div>
  );
};