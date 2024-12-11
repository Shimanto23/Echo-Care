import { BellIcon, CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const notifications = [
  {
    id: 1,
    type: 'reminder',
    title: 'Mood Check-in Reminder',
    message: "Don't forget to log your mood today!",
    time: '2 hours ago',
    read: false,
    icon: BellIcon
  },
  {
    id: 2,
    type: 'achievement',
    title: 'New Achievement Unlocked',
    message: "You have completed a 7-day streak of mood tracking!",
    time: '1 day ago',
    read: true,
    icon: CheckCircleIcon
  },
  {
    id: 3,
    type: 'alert',
    title: 'Wellness Check',
    message: 'Your recent mood patterns suggest you might benefit from talking to someone.',
    time: '2 days ago',
    read: false,
    icon: ExclamationCircleIcon
  },
  {
    id: 4,
    type: 'info',
    title: 'New Feature Available',
    message: 'Try our new guided meditation exercises!',
    time: '3 days ago',
    read: true,
    icon: InformationCircleIcon
  }
];

const Notifications = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <button className="text-teal-600 hover:text-teal-700">
          Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className={`bg-white p-4 rounded-lg shadow-sm border ${
                notification.read ? 'border-gray-100' : 'border-teal-200 bg-teal-50'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-full ${
                  notification.read ? 'bg-gray-100' : 'bg-teal-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    notification.read ? 'text-gray-600' : 'text-teal-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{notification.title}</h3>
                      <p className="text-gray-600 mt-1">{notification.message}</p>
                    </div>
                    <span className="text-sm text-gray-500">{notification.time}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;