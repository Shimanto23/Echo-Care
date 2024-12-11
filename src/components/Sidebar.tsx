import { Link, useLocation } from 'react-router-dom';
import { UserProfileMenu } from './UserProfileMenu';
import { navigation } from '../config/navigation';

interface NavItemProps {
  item: {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
  isActive: boolean;
}

const NavItem = ({ item, isActive }: NavItemProps) => (
  <Link
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

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <Link to="/" className="p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors rounded-lg">
        <img src="echo-care-icon.png" alt="Echo Care" className="w-10 h-10 rounded-lg shadow-sm" />
        <h1 className="text-2xl font-bold text-teal-700">Echo Care</h1>
      </Link>
      <nav className="flex-1 space-y-1 p-2">
        {navigation.map((item) => (
          <NavItem 
            key={item.name}
            item={item}
            isActive={location.pathname === item.href}
          />
        ))}
      </nav>
      <div className="border-t">
        <UserProfileMenu />
      </div>
    </div>
  );
};