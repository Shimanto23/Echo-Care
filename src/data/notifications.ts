import { 
  BellIcon, 
  CheckCircleIcon, 
  ExclamationCircleIcon, 
  InformationCircleIcon,
  ExclamationTriangleIcon 
} from '@heroicons/react/24/outline';
import { Notification } from '../types/notifications';

export const initialNotifications: Notification[] = [
  {
    id: 1,
    type: 'warning',
    title: 'Mental Health Check Required',
    message: "We've noticed potential signs of declining mental health based on your recent mood patterns and activity. It's recommended to schedule a consultation with a mental health professional.",
    time: 'Just now',
    read: false,
    priority: 'high',
    icon: ExclamationTriangleIcon,
    actions: [
      {
        label: 'Find Help',
        href: '/resources'
      },
      {
        label: 'Take Assessment',
        href: '/mental-health-check'
      }
    ],
    persistent: true
  },
  {
    id: 2,
    type: 'reminder',
    title: 'Mood Check-in Reminder',
    message: "Don't forget to log your mood today!",
    time: '2 hours ago',
    read: false,
    icon: BellIcon
  },
  {
    id: 3,
    type: 'achievement',
    title: 'New Achievement Unlocked',
    message: "You've completed a 7-day streak of mood tracking!",
    time: '1 day ago',
    read: true,
    icon: CheckCircleIcon
  },
  {
    id: 4,
    type: 'alert',
    title: 'Wellness Check',
    message: 'Your recent mood patterns suggest you might benefit from talking to someone.',
    time: '2 days ago',
    read: false,
    icon: ExclamationCircleIcon
  },
  {
    id: 5,
    type: 'info',
    title: 'New Feature Available',
    message: 'Try our new guided meditation exercises!',
    time: '3 days ago',
    read: true,
    icon: InformationCircleIcon
  }
];