import { RegularIconsType } from 'src/assets/fontawesome/regular-icons';

export type ChartAction = {
  label: string,
  icon: RegularIconsType,
  clicked: () => void,
}