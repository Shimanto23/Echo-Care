import { FC } from 'react';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import { getMoodEmoji } from '../../utils/journalUtils';

interface JournalFormProps {
  title: string;
  setTitle: (value: string) => void;
  content: string;
  setContent: (value: string) => void;
  mood: number;
  setMood: (value: number) => void;
  gratitudeList: string[];
  setGratitudeList: (value: string[]) => void;
  newGratitude: string;
  setNewGratitude: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const JournalForm: FC<JournalFormProps> = ({
  title,
  setTitle,
  content,
  setContent,
  mood,
  setMood,
  gratitudeList,
  setGratitudeList,
  newGratitude,
  setNewGratitude,
  onSubmit
}) => {
  const handleAddGratitude = () => {
    if (newGratitude.trim()) {
      setGratitudeList([...gratitudeList, newGratitude.trim()]);
      setNewGratitude('');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
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
          Journal Entry
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
              <span className="flex-1">{item}</span>
              <button
                type="button"
                onClick={() => setGratitudeList(gratitudeList.filter((_, i) => i !== index))}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex gap-2">
            <input
              type="text"
              value={newGratitude}
              onChange={(e) => setNewGratitude(e.target.value)}
              className="flex-1 border rounded-md p-2"
              placeholder="What are you grateful for today?"
            />
            <button
              type="button"
              onClick={handleAddGratitude}
              className="px-4 py-2 bg-teal-50 text-teal-700 rounded-md hover:bg-teal-100"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <Button type="submit">Save Entry</Button>
    </form>
  );
};