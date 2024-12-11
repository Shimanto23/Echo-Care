import { FaceSmileIcon, FaceFrownIcon } from '@heroicons/react/24/outline';

interface MoodSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

export const MoodSelector = ({ value, onChange }: MoodSelectorProps) => {
  return (
    <div className="space-y-4">
      <label className="block text-lg font-medium text-gray-700">
        How are you feeling today?
      </label>
      <div className="flex justify-between items-center">
        <FaceFrownIcon className="w-6 h-6 text-gray-400" />
        <input
          type="range"
          min="1"
          max="5"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full mx-4"
        />
        <FaceSmileIcon className="w-6 h-6 text-gray-400" />
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <span>Very Low</span>
        <span>Low</span>
        <span>Neutral</span>
        <span>Good</span>
        <span>Excellent</span>
      </div>
    </div>
  );
};