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
    // Normalize user input
    const normalizedInput = input.toLowerCase().trim();

    // Check greetings
    const greeting = conversationData.greetings.find(g => 
      normalizedInput.includes(g.context.toLowerCase())
    );
    if (greeting) return greeting.response;

    // Check emotions
    for (const [category, responses] of Object.entries(conversationData.emotions)) {
      const match = responses.find((r: { context: string; response: string }) => 
        normalizedInput.includes(r.context.toLowerCase())
      );
      if (match) return match.response;
    }

    // Check mental health facts
    const fact = conversationData.mental_health.facts.find(f => 
      normalizedInput.includes(f.context.toLowerCase())
    );
    if (fact) return fact.response;

    // Check mental health queries
    const query = conversationData.mental_health.queries.find(q => 
      normalizedInput.includes(q.context.toLowerCase())
    );
    if (query) return query.response;

    // Check mental health definitions
    const definition = conversationData.mental_health.definitions.find(d => 
      normalizedInput.includes(d.context.toLowerCase())
    );
    if (definition) return definition.response;

    // Check support guidance
    const guidance = conversationData.support.guidance.find(g => 
      normalizedInput.includes(g.context.toLowerCase())
    );
    if (guidance) return guidance.response;

    // Check support tips
    const tip = conversationData.support.tips.find(t => 
      normalizedInput.includes(t.context.toLowerCase())
    );
    if (tip) return tip.response;

    // Check miscellaneous jokes
    const joke = conversationData.miscellaneous.jokes.find(j => 
      normalizedInput.includes(j.context.toLowerCase())
    );
    if (joke) return joke.response;

    // Check miscellaneous location
    const location = conversationData.miscellaneous.location.find(l => 
      normalizedInput.includes(l.context.toLowerCase())
    );
    if (location) return location.response;

    // Default response if no match is found
    return "I'm here to listen. Could you tell me more about what's on your mind?";
  };

  const addMessage = (text: string, isAI: boolean = false) => {
    setMessages(prev => [...prev, { text, isAI }]);
  };

  const handleUserMessage = (input: string) => {
    addMessage(input, false); // Add user message
    const response = findResponse(input); // Get AI response
    setTimeout(() => {
      addMessage(response, true); // Add AI response with delay
    }, 500);
  };

  return {
    messages,
    handleUserMessage
  };
};
