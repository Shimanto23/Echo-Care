import { useState } from 'react';
import { ChatResponse, Intent } from '../types/chat';
import conversationData from '../data/conversations.json';

const findBestMatch = (input: string, intents: Intent[]): string => {
  const normalizedInput = input.toLowerCase().trim();
  
  // Try to find an exact match in patterns
  for (const intent of intents) {
    const exactMatch = intent.patterns.find(pattern => 
      normalizedInput.includes(pattern.toLowerCase())
    );
    if (exactMatch) {
      return intent.responses[Math.floor(Math.random() * intent.responses.length)];
    }
  }

  // If no exact match, find intent with most similar pattern
  let bestMatch: { intent: Intent | null; similarity: number } = {
    intent: null,
    similarity: 0
  };

  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      const similarity = calculateSimilarity(normalizedInput, pattern.toLowerCase());
      if (similarity > bestMatch.similarity) {
        bestMatch = { intent, similarity };
      }
    }
  }

  if (bestMatch.intent && bestMatch.similarity > 0.3) {
    return bestMatch.intent.responses[
      Math.floor(Math.random() * bestMatch.intent.responses.length)
    ];
  }

  // Default response if no good match found
  return "I'm here to listen. Could you tell me more about what's on your mind?";
};

const calculateSimilarity = (str1: string, str2: string): number => {
  const words1 = str1.split(' ');
  const words2 = str2.split(' ');
  const commonWords = words1.filter(word => words2.includes(word));
  return commonWords.length / Math.max(words1.length, words2.length);
};

export const useChat = () => {
  const [messages, setMessages] = useState<ChatResponse[]>([
    { 
      text: "Hello! I'm your Echo Assistant. How are you feeling today?", 
      isAI: true 
    }
  ]);

  const addMessage = (text: string, isAI: boolean = false) => {
    setMessages(prev => [...prev, { text, isAI }]);
  };

  const handleUserMessage = (input: string) => {
    addMessage(input, false);
    const response = findBestMatch(input, conversationData.intents);
    
    // Simulate AI typing delay
    setTimeout(() => {
      addMessage(response, true);
    }, 500);
  };

  return {
    messages,
    handleUserMessage
  };
};