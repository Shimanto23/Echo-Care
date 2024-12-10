import { Observable } from '@nativescript/core';
import { MoodTrackingService } from '../../services/mood-tracking.service';

export class MoodEntryViewModel extends Observable {
  private moodTrackingService: MoodTrackingService;
  
  private _moodLevel: number = 3;
  private _note: string = '';
  private _sleepHours: number = 8;

  constructor() {
    super();
    this.moodTrackingService = new MoodTrackingService();
  }

  get moodLevel(): number {
    return this._moodLevel;
  }

  set moodLevel(value: number) {
    if (this._moodLevel !== value) {
      this._moodLevel = value;
      this.notifyPropertyChange('moodLevel', value);
    }
  }

  get note(): string {
    return this._note;
  }

  set note(value: string) {
    if (this._note !== value) {
      this._note = value;
      this.notifyPropertyChange('note', value);
    }
  }

  get sleepHours(): number {
    return this._sleepHours;
  }

  set sleepHours(value: number) {
    if (this._sleepHours !== value) {
      this._sleepHours = value;
      this.notifyPropertyChange('sleepHours', value);
    }
  }

  saveMoodEntry() {
    this.moodTrackingService.addMoodEntry({
      userId: 'current-user', // In a real app, get from auth service
      mood: this._moodLevel,
      note: this._note,
      activities: [],
      sleepHours: this._sleepHours,
      timestamp: new Date()
    });

    // Reset form
    this.moodLevel = 3;
    this.note = '';
    this.sleepHours = 8;
  }
}