export type MeditationType = 'mindfulness' | 'breathing' | 'body-scan' | 'loving-kindness';

export interface MeditationPreset {
  id: string;
  name: string;
  description: string;
  duration: number;
  type: MeditationType;
  guidance: string[];
}