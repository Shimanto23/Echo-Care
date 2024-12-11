import { 
  HomeIcon,
  BeakerIcon, 
  ChatBubbleLeftIcon, 
  BookOpenIcon, 
  UserIcon, 
  BellIcon,
  PencilSquareIcon,
  HeartIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Mental Health Check', href: '/mental-health-check', icon: BeakerIcon },
  { name: 'Echo Assistant', href: '/chat', icon: ChatBubbleLeftIcon },
  { name: 'Journal', href: '/journal', icon: PencilSquareIcon },
  { name: 'Meditation', href: '/meditation', icon: HeartIcon },
  { name: 'Resources', href: '/resources', icon: BookOpenIcon },
  { name: 'Profile', href: '/profile', icon: UserIcon },
  { name: 'Book Appointment', href: '/appointments', icon: CalendarIcon },
  { name: 'Notifications', href: '/notifications', icon: BellIcon },
];