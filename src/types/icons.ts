import { SVGProps, RefAttributes } from 'react';

export interface HeroIcon extends SVGProps<SVGSVGElement> {
  className?: string;
  'aria-hidden'?: boolean;
  title?: string;
  titleId?: string;
}

export type IconComponent = React.ForwardRefExoticComponent<
  HeroIcon & RefAttributes<SVGSVGElement>
>;