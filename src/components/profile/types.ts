export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  bio: string;
  avatarUrl: string;
}

export interface PersonalInfoSectionProps {
  personalInfo: PersonalInfo;
  isEditing: boolean;
  onEditToggle: () => void;
  onSave: (info: Omit<PersonalInfo, 'avatarUrl'>) => void;
}

export interface EditableFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}