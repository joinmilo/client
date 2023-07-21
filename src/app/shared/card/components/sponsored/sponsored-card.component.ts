import { Component, Input } from '@angular/core';
import { Maybe } from 'src/schema/schema';
import { CardData, CardEntity } from '../../typings/card';

@Component({
  selector: 'app-sponsored-card',
  templateUrl: './sponsored-card.component.html',
  styleUrls: ['./sponsored-card.component.scss'],
})
export class SponsoredCardComponent {

  @Input()
  public entity?: Maybe<CardEntity>;

  @Input()
  public data?: Maybe<CardData>;

}
