import { useState, useMemo } from 'react';
import { JournalEntry, DateRange } from '../types/journal';
import { isWithinInterval, startOfToday, startOfWeek, startOfMonth } from 'date-fns';

export const useJournalFilters = (entries: JournalEntry[]) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [dateRange, setDateRange] = useState<DateRange>('all');

  const filteredEntries = useMemo(() => {
    return entries.filter(entry => {
      // Filter by tags
      if (selectedTags.length > 0 && !selectedTags.some(tag => entry.tags.includes(tag))) {
        return false;
      }

      // Filter by mood
      if (selectedMood !== null && entry.mood !== selectedMood) {
        return false;
      }

      // Filter by date range
      if (dateRange !== 'all') {
        const today = startOfToday();
        let start;
        
        switch (dateRange) {
          case 'today':
            start = today;
            break;
          case 'week':
            start = startOfWeek(today);
            break;
          case 'month':
            start = startOfMonth(today);
            break;
          default:
            return true;
        }

        if (!isWithinInterval(entry.date, { start, end: new Date() })) {
          return false;
        }
      }

      return true;
    });
  }, [entries, selectedTags, selectedMood, dateRange]);

  const handleTagFilter = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleMoodFilter = (mood: number | null) => {
    setSelectedMood(mood);
  };

  const handleDateRangeFilter = (range: DateRange) => {
    setDateRange(range);
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedMood(null);
    setDateRange('all');
  };

  return {
    filteredEntries,
    selectedTags,
    selectedMood,
    dateRange,
    handleTagFilter,
    handleMoodFilter,
    handleDateRangeFilter,
    clearFilters
  };
};