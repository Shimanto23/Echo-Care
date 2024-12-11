import { FC } from 'react';
import { JournalEntry } from '../../types/journal';
import { JournalEntryCard } from './JournalEntryCard';
import { useJournalFilters } from '../../hooks/useJournalFilters';
import { JournalFilters } from './JournalFilters';

interface JournalEntryListProps {
  entries: JournalEntry[];
  onDeleteEntry: (id: string) => void;
}

export const JournalEntryList: FC<JournalEntryListProps> = ({ entries, onDeleteEntry }) => {
  const { 
    filteredEntries,
    selectedTags,
    selectedMood,
    dateRange,
    handleMoodFilter,
    handleDateRangeFilter,
    clearFilters
  } = useJournalFilters(entries);

  return (
    <div className="space-y-6">
      <JournalFilters
        selectedTags={selectedTags}
        selectedMood={selectedMood}
        dateRange={dateRange}
        onMoodFilter={handleMoodFilter}
        onDateRangeFilter={handleDateRangeFilter}
        onClearFilters={clearFilters}
      />
      
      <div className="space-y-4">
        {filteredEntries.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No journal entries found
          </div>
        ) : (
          filteredEntries.map(entry => (
            <JournalEntryCard 
              key={entry.id} 
              entry={entry} 
              onDelete={onDeleteEntry}
            />
          ))
        )}
      </div>
    </div>
  );
};