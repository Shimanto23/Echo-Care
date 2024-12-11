export const getMoodEmoji = (moodLevel: number): string => {
  const moods = ['😢', '😕', '😐', '🙂', '😊'];
  return moods[moodLevel - 1] || '😐';
};

export const formatJournalDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};