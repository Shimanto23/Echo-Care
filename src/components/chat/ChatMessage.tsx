interface ChatMessageProps {
  text: string;
  isAI: boolean;
}

export const ChatMessage = ({ text, isAI }: ChatMessageProps) => {
  return (
    <div className={`flex ${isAI ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-sm rounded-lg px-4 py-2 ${
          isAI
            ? 'bg-teal-100 text-teal-900'
            : 'bg-indigo-600 text-white'
        }`}
      >
        {text}
      </div>
    </div>
  );
};