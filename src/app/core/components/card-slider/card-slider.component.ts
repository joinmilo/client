import { Component, Input } from '@angular/core';
import { CardInput, CardType } from 'src/app/core/typings/card';
import { Maybe } from 'src/schema/schema';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent {

  @Input()
  public cards?: Maybe<CardInput[]>;

  @Input()
  public link?: string[];

  @Input()
  public linkLabel?: string;

  @Input()
  public titleLabel?: string;

  @Input()
  public cardType = CardType.Content;

  public types = {
    contact: CardType.Contact,
    content: CardType.Content,
    sponsored: CardType.Sponsored
  };
}
