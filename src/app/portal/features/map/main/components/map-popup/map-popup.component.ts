import {Component, Input} from '@angular/core';
import {PointOfInterest} from '../../typings/point-of-interest';

@Component({
  styleUrls: ['map-popup.component.scss'],
  templateUrl: 'map-popup.component.html'
})
export class MapPopupComponent {
  @Input()
  poi?: PointOfInterest;
}
