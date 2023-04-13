import { Component, Input } from '@angular/core';
import { CardData, CardEntity, CardType } from 'src/app/core/typings/card';
import { Maybe } from 'src/schema/schema';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent {

  @Input()
  public cardType = CardType.Content;

  @Input()
  public entity?: CardEntity;

  @Input()
  public data?: Maybe<Maybe<CardData>[]>;

  @Input()
  public link?: string[];

  @Input()
  public linkLabel?: string;

  @Input()
  public titleLabel?: string;

  @Input()
  public title?: Maybe<string>;

  public types = {
    contact: CardType.Contact,
    content: CardType.Content,
    sponsored: CardType.Sponsored
  };


}
