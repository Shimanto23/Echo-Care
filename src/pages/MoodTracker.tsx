import { useState } from 'react';
import { FaceSmileIcon, FaceFrownIcon } from '@heroicons/react/24/outline';

const activities = [
  'Exercise', 'Meditation', 'Reading', 'Social Activity',
  'Work', 'Hobbies', 'Family Time', 'Rest'
];

const MoodTracker = () => {
  const [mood, setMood] = useState(3);
  const [note, setNote] = useState('');
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const handleActivityToggle = (activity: string) => {
    setSelectedActivities(prev => 
      prev.includes(activity)
        ? prev.filter(a => a !== activity)
        : [...prev, activity]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ mood, note, activities: selectedActivities });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Daily Mood Check-in</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <label className="block text-lg font-medium text-gray-700 mb-4">
            How are you feeling today?
          </label>
          <div className="flex justify-between items-center mb-4">
            <FaceFrownIcon className="w-6 h-6 text-gray-400" />
            <input
              type="range"
              min="1"
              max="5"
              value={mood}
              onChange={(e) => setMood(Number(e.target.value))}
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

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <label className="block text-lg font-medium text-gray-700 mb-4">
            What activities did you do today?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {activities.map(activity => (
              <button
                key={activity}
                type="button"
                onClick={() => handleActivityToggle(activity)}
                className={`p-2 rounded-md text-sm ${
                  selectedActivities.includes(activity)
                    ? 'bg-teal-100 text-teal-700 border-teal-200'
                    : 'bg-gray-50 text-gray-700 border-gray-200'
                } border`}
              >
                {activity}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <label className="block text-lg font-medium text-gray-700 mb-4">
            Add a note about your day
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full p-3 border rounded-md"
            rows={4}
            placeholder="How was your day? What's on your mind?"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 transition-colors"
        >
          Save Entry
        </button>
      </form>
    </div>
  );
};

export default MoodTracker;