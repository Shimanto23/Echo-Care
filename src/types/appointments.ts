export interface Therapist {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  experience: number;
  image: string;
  availability?: string[];
  bio?: string;
}

export interface Appointment {
  id: number;
  therapistId: number;
  date: string;
  time: string;
  type: 'video' | 'audio' | 'in-person';
  reason: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}