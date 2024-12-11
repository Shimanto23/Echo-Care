export type DateRange = 'all' | 'today' | 'week' | 'month';

export interface JournalEntry {
  id: string;
  date: Date;
  title: string;
  content: string;
  mood: number;
  tags: string[];
  gratitude: string[];
  activities: string[];
}