import { FC, useState } from 'react';
import { format } from 'date-fns';
import { JournalEntry } from '../../types/journal';
import { TagIcon, CalendarIcon, HeartIcon, SparklesIcon, TrashIcon } from '@heroicons/react/24/outline';
import { getMoodEmoji } from '../../utils/journalUtils';
import { ConfirmationModal } from '../shared/ConfirmationModal';

interface JournalEntryCardProps {
  entry: JournalEntry;
  onDelete: (id: string) => void;
}

export const JournalEntryCard: FC<JournalEntryCardProps> = ({ entry, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{entry.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarIcon className="w-4 h-4" />
                {format(entry.date, 'PPP')}
                <span className="text-xl">{getMoodEmoji(entry.mood)}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
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
              <button
                onClick={() => setShowDeleteModal(true)}
                className="p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50 transition-colors"
                title="Delete entry"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
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
      </div>

      <ConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => onDelete(entry.id)}
        title="Delete Journal Entry"
        message="Are you sure you want to delete this journal entry? This action cannot be undone."
      />
    </>
  );
};