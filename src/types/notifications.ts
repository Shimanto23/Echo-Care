import { ComponentType } from 'react';
import { IconProps } from '@heroicons/react/24/outline';

export type NotificationType = 'warning' | 'reminder' | 'achievement' | 'alert' | 'info';
export type NotificationPriority = 'high' | 'medium' | 'low';

export interface NotificationAction {
  label: string;
  href: string;
}

export interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: ComponentType<IconProps>;
  priority?: NotificationPriority;
  actions?: NotificationAction[];
  persistent?: boolean;
}