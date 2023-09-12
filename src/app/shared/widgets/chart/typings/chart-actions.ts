import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ChartAction = {
  label: string,
  icon: IconProp,
  clicked: () => void,
}