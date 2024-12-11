import { useState } from 'react';
import { Notification } from '../types/notifications';
import { initialNotifications } from '../data/notifications';

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const markAllAsRead = () => {
    setNotifications(prevNotifications => 
      prevNotifications.filter(notification => 
        // Keep only warning notifications
        notification.type === 'warning'
      )
    );
  };

  const markAsRead = (id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => 
        // Keep the notification if it's a warning or not the one being marked as read
        notification.type === 'warning' || notification.id !== id
      )
    );
  };

  const getUnreadCount = () => {
    return notifications.filter(n => n.type !== 'warning').length;
  };

  return {
    notifications,
    markAllAsRead,
    markAsRead,
    getUnreadCount
  };
};