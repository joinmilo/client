import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Maybe } from 'src/schema/schema';
import { CardActionInput, CardActionOutput, CardData, CardEntity } from '../../typings/card';

@Component({
  selector: 'app-sponsored-card',
  templateUrl: './sponsored-card.component.html',
  styleUrls: ['./sponsored-card.component.scss'],
})
export class SponsoredCardComponent {

  @Input()
  public actions?: CardActionInput[];

  @Input()
  public entity?: Maybe<CardEntity>;

  @Input()
  public data?: Maybe<CardData>;

  @Output()
  public actionClicked = new EventEmitter<CardActionOutput>();

}
