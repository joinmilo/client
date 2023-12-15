import { RegularIconsType } from 'src/app/shared/widgets/icon/typings/regular-icons';
export type ChartAction = {
  label: string,
  icon: RegularIconsType,
  clicked: () => void,
}