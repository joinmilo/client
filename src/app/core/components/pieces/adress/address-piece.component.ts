import { Component, Input } from '@angular/core';
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

}
