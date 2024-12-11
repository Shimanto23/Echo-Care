import { ComponentType } from 'react';
import { IconProps } from '@heroicons/react/24/outline';

interface PreferenceSectionProps {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
  children: React.ReactNode;
}

export const PreferenceSection = ({ title, description, icon: Icon, children }: PreferenceSectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-2 bg-teal-100 rounded-lg">
          <Icon className="w-6 h-6 text-teal-700" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
};