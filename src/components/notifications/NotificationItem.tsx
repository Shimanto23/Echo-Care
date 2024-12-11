import { Notification } from '../../types/notifications';

interface NotificationItemProps {
  notification: Notification;
}

export const NotificationItem = ({ notification }: NotificationItemProps) => {
  const Icon = notification.icon;
  const isWarning = notification.type === 'warning';
  
  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-sm border ${
        isWarning ? 'border-red-200 bg-red-50' : 'border-gray-100'
      }`}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-2 rounded-full ${
          isWarning ? 'bg-red-100' : 'bg-gray-100'
        }`}>
          <Icon className={`w-6 h-6 ${
            isWarning ? 'text-red-600' : 'text-gray-600'
          }`} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <h3 className={`font-semibold ${
                  isWarning ? 'text-red-700' : ''
                }`}>
                  {notification.title}
                </h3>
                {isWarning && (
                  <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-medium">
                    Important
                  </span>
                )}
              </div>
              <p className={`mt-1 ${
                isWarning ? 'text-red-600' : 'text-gray-600'
              }`}>
                {notification.message}
              </p>
              {notification.actions && (
                <div className="mt-3 flex gap-3">
                  {notification.actions.map((action, index) => (
                    <a
                      key={index}
                      href={action.href}
                      className="inline-flex items-center px-3 py-1 rounded-md bg-red-100 text-red-700 text-sm font-medium hover:bg-red-200 transition-colors"
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <span className={`text-sm ${
              isWarning ? 'text-red-500' : 'text-gray-500'
            }`}>
              {notification.time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};