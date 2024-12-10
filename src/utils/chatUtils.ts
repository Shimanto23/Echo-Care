import { useState } from 'react';
import conversationData from '../data/conversations.json';

interface ChatResponse {
  text: string;
  isAI: boolean;
}

export const useChat = () => {
  const [messages, setMessages] = useState<ChatResponse[]>([
    { text: "Hello! I'm your Echo Care assistant. How are you feeling today?", isAI: true }
  ]);

  const findResponse = (input: string): string => {
    // Convert input to lowercase for case-insensitive matching
    const lowercaseInput = input.toLowerCase();
    
    // Check greetings
    const greeting = conversationData.greetings.find(g => 
      lowercaseInput.includes(g.context.toLowerCase())
    );
    if (greeting) return greeting.response;

    // Check emotions
    for (const [category, responses] of Object.entries(conversationData.emotions)) {
      const match = responses.find(r => 
        lowercaseInput.includes(r.context.toLowerCase())
      );
      if (match) return match.response;
    }

    // Check mental health facts
    const fact = conversationData.mental_health.facts.find(f => 
      lowercaseInput.includes(f.context.toLowerCase())
    );
    if (fact) return fact.response;

    // Default response if no match found
    return "I'm here to listen. Could you tell me more about what's on your mind?";
  };

  const addMessage = (text: string, isAI: boolean = false) => {
    setMessages(prev => [...prev, { text, isAI }]);
  };

  const handleUserMessage = (input: string) => {
    addMessage(input, false);
    const response = findResponse(input);
    setTimeout(() => {
      addMessage(response, true);
    }, 500);
  };

  return {
    messages,
    handleUserMessage
  };
};