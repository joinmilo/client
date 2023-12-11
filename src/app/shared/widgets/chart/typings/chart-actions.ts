import { SolidIcons } from 'src/assets/fontawesome/solid-icons';

export type ChartAction = {
  label: string,
  icon: SolidIcons,
  clicked: () => void,
}