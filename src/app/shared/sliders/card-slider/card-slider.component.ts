import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { CardData, CardEntity, CardType } from 'src/app/shared/card/typings/card';
import { Maybe } from 'src/schema/schema';
import { CardModule } from '../../card/card.module';
import { TitleModule } from '../../title/title.module';
import { SliderHeaderComponent } from '../slider-header/slider-header.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss'],
  standalone: true,
  imports: [
    CommonModule,

    CoreModule,
    CardModule,
    FontAwesomeModule,
    RouterModule,

    SliderComponent,
    SliderHeaderComponent,
    TitleModule,
  ]
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
