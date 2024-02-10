import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SliderComponent } from 'ngx-cinlib/layouts/slider';
import { TitleType } from 'ngx-cinlib/layouts/title';
import { Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { ContentData, ContentEntity } from 'src/app/core/typings/content-entity';
import { NoDataComponent } from 'src/app/shared/layout/no-data/no-data.component';
import { CardType } from 'src/app/shared/widgets/card/typings/card';
import { CardModule } from '../../card/card.module';
import { SliderHeaderComponent } from '../slider-header/slider-header.component';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss'],
  standalone: true,
  imports: [
    CommonModule,

    CoreModule,
    CardModule,
    RouterModule,

    SliderComponent,
    SliderHeaderComponent,
    NoDataComponent,
  ]
})
export class CardSliderComponent {

  @Input()
  public cardType = CardType.Content;

  @Input()
  public entity?: ContentEntity;

  @Input()
  public data?: Maybe<Maybe<ContentData>[]>;

  @Input()
  public link?: string[];

  @Input()
  public linkLabel?: string;

  @Input()
  public titleLabel?: string;

  @Input()
  public titleType?: Maybe<TitleType> = 'SUBTITLE';

  @Input()
  public title?: Maybe<string>;

  public types = {
    contact: CardType.Contact,
    content: CardType.Content,
    sponsored: CardType.Sponsored,
    member: CardType.Member,
  };
}
