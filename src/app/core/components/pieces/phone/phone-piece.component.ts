import { Component, Input } from '@angular/core';
import { Maybe } from 'src/schema/schema';

@Component({
  selector: 'app-phone-piece',
  templateUrl: './phone-piece.component.html',
  styleUrls: ['./phone-piece.component.scss']
})
export class PhonePieceComponent {

  @Input()
  public phone?: Maybe<string>;

  @Input()
  public actionMenu = false;

}
