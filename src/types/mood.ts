export interface MoodEntry {
  id: string;
  timestamp: Date;
  level: number;
  note: string;
  activities: string[];
  sleepHours: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}