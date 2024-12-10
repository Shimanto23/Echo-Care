import { useState } from 'react';
import { useChat } from '../utils/chatUtils';

const AIChat = () => {
  const { messages, handleUserMessage } = useChat();
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    handleUserMessage(input);
    setInput('');
  };

  return (
    <div className="p-6 h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-8">AI Assistant</h1>
      
      <div className="flex-1 bg-white rounded-lg shadow overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-sm rounded-lg px-4 py-2 ${
                  message.isAI
                    ? 'bg-teal-100 text-teal-900'
                    : 'bg-indigo-600 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-md focus:outline-none focus:border-teal-500"
            />
            <button
              type="submit"
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AIChat;