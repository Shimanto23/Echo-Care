import { ComponentType } from 'react';
import { HeroIcon } from './icons';

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
  icon: ComponentType<HeroIcon>;
  priority?: NotificationPriority;
  actions?: NotificationAction[];
  persistent?: boolean;
}