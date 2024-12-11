import { NotificationItem } from '../components/notifications/NotificationItem';
import { useNotifications } from '../hooks/useNotifications';

const Notifications = () => {
  const { notifications, markAllAsRead, getUnreadCount } = useNotifications();
  const unreadCount = getUnreadCount();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          {unreadCount > 0 && (
            <p className="text-sm text-gray-600 mt-1">
              You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
            </p>
          )}
        </div>
        {unreadCount > 0 && (
          <button 
            onClick={markAllAsRead}
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            Mark all as read
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* Show warning notifications first */}
        {notifications
          .sort((a, b) => {
            // Sort by warning type first, then by unread status
            if (a.type === 'warning' && b.type !== 'warning') return -1;
            if (a.type !== 'warning' && b.type === 'warning') return 1;
            if (!a.read && b.read) return -1;
            if (a.read && !b.read) return 1;
            return 0;
          })
          .map((notification) => (
            <NotificationItem 
              key={notification.id} 
              notification={notification} 
            />
          ))}
      </div>
    </div>
  );
};

export default Notifications;