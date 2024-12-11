import { useState } from 'react';
import { Card, CardHeader, CardBody } from '../components/shared/Card';
import { JournalForm } from '../components/journal/JournalForm';
import { JournalEntryList } from '../components/journal/JournalEntryList';
import { JournalEntry } from '../types/journal';

export const Journal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [title, setTitle] = useState('');
  const [mood, setMood] = useState(3);
  const [gratitudeList, setGratitudeList] = useState<string[]>([]);
  const [newGratitude, setNewGratitude] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !newEntry.trim()) return;

    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date(),
      title: title.trim(),
      content: newEntry.trim(),
      mood,
      tags: [],
      gratitude: gratitudeList,
      activities: []
    };

    setEntries([entry, ...entries]);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setNewEntry('');
    setMood(3);
    setGratitudeList([]);
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(prevEntries => prevEntries.filter(entry => entry.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Therapeutic Journal</h1>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-xl font-semibold">New Entry</h2>
          </CardHeader>
          <CardBody>
            <JournalForm
              title={title}
              setTitle={setTitle}
              content={newEntry}
              setContent={setNewEntry}
              mood={mood}
              setMood={setMood}
              gratitudeList={gratitudeList}
              setGratitudeList={setGratitudeList}
              newGratitude={newGratitude}
              setNewGratitude={setNewGratitude}
              onSubmit={handleSubmit}
            />
          </CardBody>
        </Card>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Journal Entries</h2>
          <JournalEntryList 
            entries={entries}
            onDeleteEntry={handleDeleteEntry}
          />
        </div>
      </div>
    </div>
  );
};

export default Journal;