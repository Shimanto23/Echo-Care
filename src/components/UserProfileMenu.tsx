import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { UserIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const UserProfileMenu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-3 w-full p-4 hover:bg-gray-50 transition-colors">
        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
          <UserIcon className="w-5 h-5 text-teal-700" />
        </div>
        <div className="flex-1 text-left">
          <p className="text-sm font-medium text-gray-700">{user?.name || 'Demo User'}</p>
          <p className="text-xs text-gray-500">{user?.email || 'demo@example.com'}</p>
        </div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute bottom-full left-0 w-full mb-1 bg-white rounded-md shadow-lg border border-gray-100 focus:outline-none">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={`${
                    active ? 'bg-gray-50' : ''
                  } flex items-center w-full px-3 py-2 text-sm text-red-600 rounded-md`}
                >
                  <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};