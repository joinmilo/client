import { Component, Input } from '@angular/core';
import { CardInput } from '../../../typings/card';

@Component({
  selector: 'app-sponsored-card',
  templateUrl: './sponsored-card.component.html',
  styleUrls: ['./sponsored-card.component.scss']
})
export class SponsoredCardComponent {

  @Input()
  public data: CardInput = { dateTime: true };
  
}
