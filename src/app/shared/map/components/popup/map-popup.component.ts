import { Component, Input } from '@angular/core';
import { PointOfInterest } from '../../typings/map';

@Component({
  styleUrls: ['map-popup.component.scss'],
  templateUrl: 'map-popup.component.html'
})
export class MapPopupComponent {

  @Input()
  public poi?: PointOfInterest;
}
