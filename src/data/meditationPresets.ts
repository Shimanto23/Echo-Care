import { MeditationPreset } from '../types/meditation';

export const meditationPresets: MeditationPreset[] = [
  {
    id: 'mindful-breathing',
    name: 'Mindful Breathing',
    description: 'Focus on your breath to cultivate presence and calm',
    duration: 5,
    type: 'mindfulness',
    guidance: [
      'Find a comfortable position',
      'Close your eyes or maintain a soft gaze',
      'Bring attention to your breath',
      'Notice the sensation of breathing',
      'When mind wanders, gently return to breath'
    ]
  },
  {
    id: 'body-scan',
    name: 'Body Scan',
    description: 'Systematically release tension throughout your body',
    duration: 10,
    type: 'body-scan',
    guidance: [
      'Lie down or sit comfortably',
      'Bring awareness to your body',
      'Scan from head to toe',
      'Notice any tension or discomfort',
      'Release tension with each breath'
    ]
  },
  {
    id: 'loving-kindness',
    name: 'Loving-Kindness',
    description: 'Cultivate compassion for yourself and others',
    duration: 15,
    type: 'loving-kindness',
    guidance: [
      'Begin with self-compassion',
      'Extend well-wishes to loved ones',
      'Include neutral people',
      'Embrace difficult relationships',
      'Extend to all beings'
    ]
  },
  {
    id: 'breathing-exercise',
    name: '4-7-8 Breathing',
    description: 'Calming breathing technique for stress relief',
    duration: 5,
    type: 'breathing',
    guidance: [
      'Inhale for 4 seconds',
      'Hold breath for 7 seconds',
      'Exhale for 8 seconds',
      'Repeat the cycle',
      'Keep breathing smooth and natural'
    ]
  }
];