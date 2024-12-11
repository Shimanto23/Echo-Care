import { Link, useLocation } from 'react-router-dom';
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
import { UserProfileMenu } from './UserProfileMenu';

const navigation = [
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

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <Link to="/" className="p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors rounded-lg">
        <img src="echo-care-icon.png" alt="Echo Care" className="w-10 h-10 rounded-lg shadow-sm" />
        <h1 className="text-2xl font-bold text-teal-700">Echo Care</h1>
      </Link>
      <nav className="flex-1 space-y-1 p-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                isActive
                  ? 'bg-teal-100 text-teal-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="mr-3 h-6 w-6" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="border-t">
        <UserProfileMenu />
      </div>
    </div>
  );
};

export default Sidebar;