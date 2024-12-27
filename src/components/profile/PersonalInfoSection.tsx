import { useState } from 'react';
import { PencilIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { PersonalInfoSectionProps } from './types';
import { EditableField } from './EditableField';

export const PersonalInfoSection = ({ 
  personalInfo, 
  isEditing, 
  onEditToggle,
  onSave
}: PersonalInfoSectionProps) => {
  const [editedInfo, setEditedInfo] = useState(personalInfo);

  const handleSave = () => {
    const { avatarUrl, ...infoToSave } = editedInfo;
    onSave(infoToSave);
    onEditToggle();
  };

  const handleCancel = () => {
    setEditedInfo(personalInfo);
    onEditToggle();
  };

  const handleFieldChange = (key: string, value: string) => {
    setEditedInfo(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        {isEditing ? (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="text-teal-600 hover:text-teal-700"
              title="Save changes"
            >
              <CheckIcon className="w-5 h-5" />
            </button>
            <button
              onClick={handleCancel}
              className="text-gray-400 hover:text-gray-500"
              title="Cancel"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <button
            onClick={onEditToggle}
            className="text-teal-600 hover:text-teal-700"
            title="Edit information"
          >
            <PencilIcon className="w-5 h-5" />
          </button>
        )}
      </div>
      
      <div className="space-y-4">
        {Object.entries(editedInfo).map(([key, value]) => (
          key !== 'avatarUrl' && (
            <div key={key} className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 capitalize">
                {key}
              </label>
              {isEditing ? (
                <EditableField
                  label={key}
                  value={value}
                  onChange={(newValue) => handleFieldChange(key, newValue)}
                />
              ) : (
                <p className="mt-1">{value || ''}</p>
              )}
            </div>
          )
        ))}
      </div>
    </div>
  );
};