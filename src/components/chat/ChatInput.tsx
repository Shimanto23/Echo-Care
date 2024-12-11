import { useState } from 'react';
import { Button } from '../shared/Button';
import { MicrophoneIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useSpeechRecognition } from '../../hooks/useSpeechRecognition';
import { SpeechError } from './SpeechError';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export const ChatInput = ({ onSend }: ChatInputProps) => {
  const [input, setInput] = useState('');
  const { 
    isListening, 
    startListening, 
    stopListening, 
    transcript,
    isSupported,
    error
  } = useSpeechRecognition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  const handleVoiceSubmit = async () => {
    if (isListening) {
      stopListening();
      if (transcript) {
        onSend(transcript);
      }
    } else {
      await startListening();
    }
  };

  return (
    <div className="border-t">
      {error && <SpeechError error={error} />}
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-md focus:outline-none focus:border-teal-500"
          />
          <Button type="submit">
            <PaperAirplaneIcon className="w-5 h-5" />
          </Button>
          {isSupported && (
            <Button 
              type="button"
              onClick={handleVoiceSubmit}
              className={`transition-colors ${
                isListening ? 'bg-red-600 hover:bg-red-700' : ''
              }`}
              title={isListening ? 'Stop recording' : 'Start recording'}
            >
              <MicrophoneIcon className={`w-5 h-5 ${
                isListening ? 'animate-pulse' : ''
              }`} />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};