import { useState } from 'react';
import { Card, CardHeader, CardBody } from '../../../components/shared/Card';
import { Button } from '../../../components/shared/Button';
import { MoodSelector } from './mood/MoodSelector';
import { ActivitySelector } from './mood/ActivitySelector';
import { JournalPrompt } from './mood/JournalPrompt';
import { SleepQuality } from './mood/SleepQuality';

export const DailyCheckIn = () => {
  const [mood, setMood] = useState(3);
  const [activities, setActivities] = useState<string[]>([]);
  const [journalEntry, setJournalEntry] = useState('');
  const [sleepHours, setSleepHours] = useState(7);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement submission logic
    console.log({ mood, activities, journalEntry, sleepHours });
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <h2 className="text-xl font-semibold">Daily Check-in</h2>
        <p className="text-gray-600 text-sm mt-1">
          Take a moment to reflect on your day
        </p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-6">
          <MoodSelector value={mood} onChange={setMood} />
          <ActivitySelector selected={activities} onChange={setActivities} />
          <SleepQuality value={sleepHours} onChange={setSleepHours} />
          <JournalPrompt value={journalEntry} onChange={setJournalEntry} />
          
          <Button type="submit" className="w-full">
            Save Daily Check-in
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};