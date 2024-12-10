export interface User {
  id: string;
  username: string;
  createdAt: Date;
  lastActive: Date;
}

export interface MoodEntry {
  id: string;
  userId: string;
  mood: number;
  note: string;
  activities: string[];
  sleepHours: number;
  timestamp: Date;
}