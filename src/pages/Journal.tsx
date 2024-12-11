import { useState } from 'react';
import { Card, CardHeader, CardBody } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { Input } from '../components/shared/Input';
import { 
  TagIcon, 
  CalendarIcon, 
  FaceSmileIcon, 
  HeartIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

interface JournalEntry {
  id: string;
  date: Date;
  title: string;
  content: string;
  mood: number;
  tags: string[];
  gratitude: string[];
  activities: string[];
}

const Journal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [title, setTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [mood, setMood] = useState(3);
  const [gratitudeList, setGratitudeList] = useState<string[]>([]);
  const [newGratitude, setNewGratitude] = useState('');
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const tags = [
    'Reflection', 
    'Goals', 
    'Challenges', 
    'Achievements', 
    'Self-Care',
    'Therapy',
    'Anxiety',
    'Depression',
    'Progress'
  ];

  const activities = [
    'Exercise',
    'Meditation',
    'Reading',
    'Therapy Session',
    'Social Activity',
    'Creative Work',
    'Nature Walk',
    'Journaling'
  ];

  const handleAddGratitude = () => {
    if (newGratitude.trim()) {
      setGratitudeList([...gratitudeList, newGratitude.trim()]);
      setNewGratitude('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntry.trim() || !title.trim()) return;

    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date(),
      title: title.trim(),
      content: newEntry.trim(),
      mood,
      tags: selectedTags,
      gratitude: gratitudeList,
      activities: selectedActivities
    };

    setEntries([entry, ...entries]);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setNewEntry('');
    setSelectedTags([]);
    setMood(3);
    setGratitudeList([]);
    setSelectedActivities([]);
  };

  const getMoodEmoji = (moodLevel: number) => {
    const moods = ['😢', '😕', '😐', '🙂', '😊'];
    return moods[moodLevel - 1] || '😐';
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Therapeutic Journal</h1>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-xl font-semibold">New Entry</h2>
            <p className="text-gray-600 text-sm mt-1">
              Express your thoughts, feelings, and experiences
            </p>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give your entry a title"
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How are you feeling today?
                </label>
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setMood(value)}
                      className={`text-2xl transition-transform ${
                        mood === value ? 'transform scale-125' : ''
                      }`}
                    >
                      {getMoodEmoji(value)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Activities Today
                </label>
                <div className="flex flex-wrap gap-2">
                  {activities.map(activity => (
                    <button
                      key={activity}
                      type="button"
                      onClick={() => {
                        setSelectedActivities(prev => 
                          prev.includes(activity)
                            ? prev.filter(a => a !== activity)
                            : [...prev, activity]
                        );
                      }}
                      className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                        selectedActivities.includes(activity)
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      <SparklesIcon className="w-4 h-4" />
                      {activity}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Journal Entry
                </label>
                <textarea
                  value={newEntry}
                  onChange={(e) => setNewEntry(e.target.value)}
                  className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="What's on your mind? How are you feeling? What challenges or victories did you experience today?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gratitude List
                </label>
                <div className="space-y-2">
                  {gratitudeList.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <HeartIcon className="w-4 h-4 text-red-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                  <div className="flex gap-2">
                    <Input
                      value={newGratitude}
                      onChange={(e) => setNewGratitude(e.target.value)}
                      placeholder="What are you grateful for today?"
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleAddGratitude}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => {
                        setSelectedTags(prev => 
                          prev.includes(tag)
                            ? prev.filter(t => t !== tag)
                            : [...prev, tag]
                        );
                      }}
                      className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                        selectedTags.includes(tag)
                          ? 'bg-teal-100 text-teal-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      <TagIcon className="w-4 h-4" />
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <Button type="submit">Save Entry</Button>
            </form>
          </CardBody>
        </Card>

        <div className="space-y-4">
          {entries.map(entry => (
            <Card key={entry.id}>
              <CardBody>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{entry.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CalendarIcon className="w-4 h-4" />
                        {entry.date.toLocaleDateString()}
                        <span className="text-xl">{getMoodEmoji(entry.mood)}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {entry.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-teal-50 text-teal-700 rounded-full text-xs flex items-center gap-1"
                        >
                          <TagIcon className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {entry.activities.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {entry.activities.map(activity => (
                        <span
                          key={activity}
                          className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs flex items-center gap-1"
                        >
                          <SparklesIcon className="w-3 h-3" />
                          {activity}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="whitespace-pre-wrap">{entry.content}</p>

                  {entry.gratitude.length > 0 && (
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-medium text-red-700 mb-2 flex items-center gap-1">
                        <HeartIcon className="w-4 h-4" />
                        Gratitude List
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {entry.gratitude.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;