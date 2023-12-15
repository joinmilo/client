import { BrandIcon } from 'src/assets/fontawesome/brand-icons';
import { RegularIcon } from 'src/assets/fontawesome/regular-icons';
import { SolidIcon } from 'src/assets/fontawesome/solid-icons';

export interface RadioButtonInput<T = unknown> {
  icon?: SolidIcon | RegularIcon | BrandIcon;
  label?: string;
  value?: T;
}