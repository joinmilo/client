import {Component, Input} from '@angular/core';
import {defaultMarkerColor} from '../constants/map.constants';
import {IconName} from '@fortawesome/fontawesome-svg-core';


@Component({
  styles: [`
    :host {
      position: relative;
      width: 28px;
      height: 40px;

      svg {
        display: block;
      }

      fa-icon {
        position: absolute;
        top: 8px;
        font-size: 14px;
        color: #eee;
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  `],
  template: `
    <div>
      <svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path [attr.fill]="fill" [attr.stroke]="stroke" stroke-width="0.75"
          d="M14.0801 39.6637C13.9797 39.5498 13.8406 39.3908 13.6679 39.1903C13.2865 38.7476 12.7412 38.103 12.0867 37.2966C10.7774 35.6833 9.03212 33.4238 7.28732 30.8377C5.54204 28.251 3.80035 25.3421 2.49573 22.43C1.18965 19.5146 0.33008 16.6145 0.33008 14.04C0.33008 6.43811 6.47815 0.290034 14.0801 0.290034C21.682 0.290034 27.8301 6.43811 27.8301 14.04C27.8301 16.6145 26.9705 19.5146 25.6644 22.43C24.3598 25.3421 22.6181 28.251 20.8728 30.8377C19.128 33.4238 17.3827 35.6833 16.0735 37.2966C15.4189 38.103 14.8737 38.7476 14.4922 39.1903C14.3196 39.3908 14.1805 39.5498 14.0801 39.6637Z"/>
      </svg>
      <fa-icon *ngIf="iconName" [icon]="['fas', iconName]"></fa-icon>
    </div>
  `
})
export class MapMarkerComponent {

  fill = '';
  stroke = '';

  @Input()
  set color(color: string | null | undefined) {
    this.fill = color || defaultMarkerColor;
    this.stroke = this.darkenColor(this.fill);
  }

  iconName: IconName | null = null;

  @Input()
  set icon(icon: string | null | undefined) {
    this.iconName = icon ? icon as IconName : null;
  }

  private darkenColor(hex: string, amount = 0x333333) {
    if (!hex.match(/^#[0-9A-F]{6}$/)) return "#444444";
    const numeric = Math.max((Number(`0xF${hex.substring(1, 7)}`) - amount), 0xF000000)
      .toString(16)
      .substring(1)
      .toUpperCase();
    return `#${numeric}`;
  }
}
