import { Component, Input } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { defaultMarkerColor } from '../../constants/map.constants';


@Component({
  selector: 'app-map-marker',
  styleUrls: ['map-marker.component.scss'],
  templateUrl: 'map-marker.component.html'
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
