import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Maybe } from 'graphql/jsutils/Maybe';
import { PointOfInterest } from '../../typings/map';

@Component({
  styleUrls: ['map-popup.component.scss'],
  templateUrl: 'map-popup.component.html'
})
export class MapPopupComponent {

  @Input()
  public poi?: PointOfInterest;

  constructor(private router: Router) { }

  openGoogleMaps(event: { longtitude?: Maybe<number> | undefined; latitude?: Maybe<number> | undefined; }) {
    if (event.latitude && event.longtitude) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${event.latitude},${event.longtitude}`;
      window.open(url, '_blank');
    }
  }
}