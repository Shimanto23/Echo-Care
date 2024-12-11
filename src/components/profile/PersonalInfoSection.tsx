import { PencilIcon } from '@heroicons/react/24/outline';

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  bio: string;
}

interface PersonalInfoSectionProps {
  personalInfo: PersonalInfo;
  isEditing: boolean;
  onEditToggle: () => void;
}

export const PersonalInfoSection = ({ 
  personalInfo, 
  isEditing, 
  onEditToggle 
}: PersonalInfoSectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <button
          onClick={onEditToggle}
          className="text-teal-600 hover:text-teal-700"
        >
          <PencilIcon className="w-5 h-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        {Object.entries(personalInfo).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 capitalize">
              {key}
            </label>
            {isEditing ? (
              <input
                type="text"
                defaultValue={value}
                className="mt-1 p-2 border rounded-md"
              />
            ) : (
              <p className="mt-1">{value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};