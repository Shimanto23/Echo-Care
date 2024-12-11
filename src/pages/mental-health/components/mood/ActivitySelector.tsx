import { activities } from '../../data/activities';

interface ActivitySelectorProps {
  selected: string[];
  onChange: (activities: string[]) => void;
}

export const ActivitySelector = ({ selected, onChange }: ActivitySelectorProps) => {
  const toggleActivity = (activity: string) => {
    onChange(
      selected.includes(activity)
        ? selected.filter(a => a !== activity)
        : [...selected, activity]
    );
  };

  return (
    <div className="space-y-4">
      <label className="block text-lg font-medium text-gray-700">
        What activities did you do today?
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {activities.map(activity => (
          <button
            key={activity}
            type="button"
            onClick={() => toggleActivity(activity)}
            className={`p-2 rounded-md text-sm ${
              selected.includes(activity)
                ? 'bg-teal-100 text-teal-700 border-teal-200'
                : 'bg-gray-50 text-gray-700 border-gray-200'
            } border`}
          >
            {activity}
          </button>
        ))}
      </div>
    </div>
  );
};