interface JournalPromptProps {
  value: string;
  onChange: (value: string) => void;
}

export const JournalPrompt = ({ value, onChange }: JournalPromptProps) => {
  return (
    <div className="space-y-4">
      <label className="block text-lg font-medium text-gray-700">
        Would you like to share more about your day?
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        placeholder="How was your day? What's on your mind?"
      />
    </div>
  );
};