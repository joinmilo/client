import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddressEntity, Maybe } from 'src/schema/schema';

@Component({
  selector: 'app-address-piece',
  templateUrl: './address-piece.component.html',
  styleUrls: ['./address-piece.component.scss']
})
export class AddressPieceComponent {

  @Input()
  public address?: Maybe<AddressEntity>;

  @Input()
  public link?: Maybe<string>;

  @Output() detailsAddressClicked: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public mapAddressClicked = new EventEmitter<{
    longtitude?: Maybe<number>,
    latitude?: Maybe<number>
  }>();

  onClick() {
    this.detailsAddressClicked.emit();
    this.mapAddressClicked.emit({
      longtitude: this.address?.longitude,
      latitude: this.address?.latitude
    });
  }
}
