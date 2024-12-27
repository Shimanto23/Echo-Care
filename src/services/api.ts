import { User } from '../types/user';
import { MoodEntry } from '../types/mood';
import { JournalEntry } from '../types/journal';

class ApiService {
  // For demo, simulate API call
  async login(email: string): Promise<{ user: User; token: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            id: '1',
            email,
            name: 'Demo User',
            createdAt: new Date()
          },
          token: 'demo-token'
        });
      }, 1000);
    });
  }

  async saveMoodEntry(entry: Omit<MoodEntry, 'id'>): Promise<MoodEntry> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Date.now().toString(),
          ...entry
        });
      }, 500);
    });
  }

  async saveJournalEntry(entry: Omit<JournalEntry, 'id'>): Promise<JournalEntry> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Date.now().toString(),
          ...entry
        });
      }, 500);
    });
  }
}

export const api = new ApiService();