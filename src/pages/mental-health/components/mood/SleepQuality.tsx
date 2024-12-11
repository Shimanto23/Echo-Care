interface SleepQualityProps {
  value: number;
  onChange: (hours: number) => void;
}

export const SleepQuality = ({ value, onChange }: SleepQualityProps) => {
  return (
    <div className="space-y-4">
      <label className="block text-lg font-medium text-gray-700">
        How many hours did you sleep last night?
      </label>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min="0"
          max="12"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1"
        />
        <span className="text-lg font-medium text-gray-700">
          {value} hours
        </span>
      </div>
    </div>
  );
};