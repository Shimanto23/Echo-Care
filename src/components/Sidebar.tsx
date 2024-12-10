import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, ChatBubbleLeftIcon, BookOpenIcon, UserIcon, BellIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Mood Tracker', href: '/mood', icon: ChartBarIcon },
    { name: 'AI Assistant', href: '/chat', icon: ChatBubbleLeftIcon },
    { name: 'Resources', href: '/resources', icon: BookOpenIcon },
    { name: 'Profile', href: '/profile', icon: UserIcon },
    { name: 'Notifications', href: '/notifications', icon: BellIcon },
  ];

  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="p-4 flex items-center space-x-3">
        <img src="echo-care-icon.png" alt="Echo Care" className="w-10 h-10 rounded-lg shadow-sm" />
        <h1 className="text-2xl font-bold text-teal-700">Echo Care</h1>
      </div>
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
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
            <UserIcon className="w-5 h-5 text-teal-700" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Demo User</p>
            <p className="text-xs text-gray-500">demo@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;