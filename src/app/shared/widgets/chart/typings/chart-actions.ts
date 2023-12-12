import { RegularIcons } from 'src/assets/fontawesome/regular-icons';

export type ChartAction = {
  label: string,
  icon: RegularIcons,
  clicked: () => void,
}