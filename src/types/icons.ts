import { SVGProps, ComponentType } from 'react';

export interface HeroIcon {
  className?: string;
  'aria-hidden'?: boolean;
  title?: string;
}

export type IconComponent = ComponentType<SVGProps<SVGElement> & HeroIcon>;