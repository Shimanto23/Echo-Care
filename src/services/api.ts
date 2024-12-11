import { User } from '../types/user';
import { MoodEntry } from '../types/mood';
import { JournalEntry } from '../types/journal';

const BASE_URL = 'https://api.echo-care.com/v1';

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  // Auth endpoints
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    // For demo, simulate API call
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

  // Mood tracking endpoints
  async saveMoodEntry(entry: Omit<MoodEntry, 'id'>): Promise<MoodEntry> {
    // For demo, simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Date.now().toString(),
          ...entry
        });
      }, 500);
    });
  }

  // Journal endpoints
  async saveJournalEntry(entry: Omit<JournalEntry, 'id'>): Promise<JournalEntry> {
    // For demo, simulate API call
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