import { Observable } from '@nativescript/core';
import { MoodEntry } from '../models/user.model';

export class MoodTrackingService extends Observable {
  private moodEntries: MoodEntry[] = [];

  addMoodEntry(entry: Omit<MoodEntry, 'id'>): MoodEntry {
    const newEntry = {
      ...entry,
      id: Date.now().toString(),
    };
    this.moodEntries.push(newEntry);
    this.notifyPropertyChange('moodEntries', this.moodEntries);
    return newEntry;
  }

  getMoodEntries(userId: string): MoodEntry[] {
    return this.moodEntries.filter(entry => entry.userId === userId);
  }

  getRecentMoodTrend(userId: string, days: number = 7): MoodEntry[] {
    const now = new Date();
    const threshold = new Date(now.setDate(now.getDate() - days));
    
    return this.moodEntries
      .filter(entry => entry.userId === userId && entry.timestamp >= threshold)
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }
}