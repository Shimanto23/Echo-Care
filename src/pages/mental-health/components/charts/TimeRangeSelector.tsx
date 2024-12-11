interface TimeRangeSelectorProps {
  value: 'week' | 'month' | 'year';
  onChange: (value: 'week' | 'month' | 'year') => void;
}

export const TimeRangeSelector = ({ value, onChange }: TimeRangeSelectorProps) => {
  return (
    <div className="flex space-x-2">
      {(['week', 'month', 'year'] as const).map((range) => (
        <button
          key={range}
          onClick={() => onChange(range)}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            value === range
              ? 'bg-teal-100 text-teal-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {range.charAt(0).toUpperCase() + range.slice(1)}
        </button>
      ))}
    </div>
  );
};