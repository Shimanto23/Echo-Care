import { EditableFieldProps } from './types';

export const EditableField = ({ label, value, onChange }: EditableFieldProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-600 capitalize">
        {label}
      </label>
      <input
        type="text"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
      />
    </div>
  );
};