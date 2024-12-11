import { Therapist } from '../types/appointments';

export const therapists: Therapist[] = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    title: 'Clinical Psychologist',
    specialties: ['Anxiety', 'Depression', 'Trauma'],
    experience: 12,
    image: '/images/therapist-1.jpg',
    bio: 'Dr. Johnson specializes in cognitive behavioral therapy and has extensive experience treating anxiety and depression.'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    title: 'Psychiatrist',
    specialties: ['Mood Disorders', 'ADHD', 'Anxiety'],
    experience: 15,
    image: '/images/therapist-2.jpg',
    bio: 'Dr. Chen combines medication management with therapy to provide comprehensive mental health care.'
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    title: 'Clinical Psychologist',
    specialties: ['Relationships', 'Stress Management', 'Life Transitions'],
    experience: 8,
    image: '/images/therapist-3.jpg',
    bio: 'Dr. Rodriguez helps clients navigate life changes and build healthier relationships.'
  }
];