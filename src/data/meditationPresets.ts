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
  },
  {
    id: 'stress-relief',
    name: 'Stress Relief',
    description: 'Quick meditation to reduce stress and anxiety',
    duration: 8,
    type: 'mindfulness',
    guidance: [
      'Sit in a comfortable position',
      'Take deep, calming breaths',
      'Release tension from your shoulders',
      'Visualize stress melting away',
      'Focus on present moment sensations'
    ]
  },
  {
    id: 'gratitude',
    name: 'Gratitude Practice',
    description: 'Cultivate appreciation and positive mindset',
    duration: 10,
    type: 'mindfulness',
    guidance: [
      'Reflect on things you\'re grateful for',
      'Feel the warmth of appreciation',
      'Think of people who support you',
      'Acknowledge life\'s simple pleasures',
      'Send gratitude to yourself and others'
    ]
  }
];