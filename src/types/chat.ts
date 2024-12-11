export interface Intent {
  tag: string;
  patterns: string[];
  responses: string[];
}

export interface ChatResponse {
  text: string;
  isAI: boolean;
}

export interface ConversationData {
  intents: Intent[];
}