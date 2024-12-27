export interface DailyCheckin {
  id?: number;
  timestamp?: string;
  mood: number;
  activities: string[];
  journal_entry: string;
  sleep_hours: number;
}

export interface StoredDailyCheckin extends DailyCheckin {
  id: number;
  timestamp: string;
}