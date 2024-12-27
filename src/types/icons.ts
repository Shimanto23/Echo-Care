import { SVGProps, ComponentType } from 'react';

export interface HeroIcon extends SVGProps<SVGSVGElement> {
  className?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
  title?: string;
}

export type IconComponent = ComponentType<HeroIcon>;