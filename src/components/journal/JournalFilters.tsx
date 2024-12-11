import { FC } from 'react';
import { DateRange } from '../../types/journal';
import { getMoodEmoji } from '../../utils/journalUtils';

interface JournalFiltersProps {
  selectedTags: string[];
  selectedMood: number | null;
  dateRange: DateRange;
  onTagFilter: (tag: string) => void;
  onMoodFilter: (mood: number | null) => void;
  onDateRangeFilter: (range: DateRange) => void;
  onClearFilters: () => void;
}

export const JournalFilters: FC<JournalFiltersProps> = ({
  selectedTags,
  selectedMood,
  dateRange,
  onTagFilter,
  onMoodFilter,
  onDateRangeFilter,
  onClearFilters
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Mood
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(mood => (
              <button
                key={mood}
                onClick={() => onMoodFilter(selectedMood === mood ? null : mood)}
                className={`p-2 rounded-md ${
                  selectedMood === mood
                    ? 'bg-teal-100 text-teal-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {getMoodEmoji(mood)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Range
          </label>
          <select
            value={dateRange}
            onChange={(e) => onDateRangeFilter(e.target.value as DateRange)}
            className="w-full rounded-md border-gray-300"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>

      {(selectedTags.length > 0 || selectedMood !== null || dateRange !== 'all') && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClearFilters}
            className="text-sm text-teal-600 hover:text-teal-700"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};