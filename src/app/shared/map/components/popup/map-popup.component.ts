import { Component, Input } from '@angular/core';
import { Maybe } from 'graphql/jsutils/Maybe';
import { locationURL } from 'src/app/core/constants/core.constants';
import { AddressEntity } from 'src/schema/schema';
import { PointOfInterest } from '../../typings/map';

@Component({
  styleUrls: ['map-popup.component.scss'],
  templateUrl: 'map-popup.component.html'
})
export class MapPopupComponent {

  @Input()
  public poi?: PointOfInterest;

  public openGoogleMaps(address: Maybe<AddressEntity>) {
    if (address?.latitude && address?.longitude) {
      window.open(locationURL(address.latitude, address.longitude));
    }
  }
}