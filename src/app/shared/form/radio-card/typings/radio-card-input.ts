import { BrandIcon } from 'src/app/shared/widgets/icon/typings/brand-icons';
import { RegularIcon } from 'src/app/shared/widgets/icon/typings/regular-icons';
import { SolidIcon } from 'src/app/shared/widgets/icon/typings/solid-icons';

export interface RadioCardInput {
  display?: string,
  icon: SolidIcon | RegularIcon | BrandIcon;
  label?: string;
  value?: unknown;
}