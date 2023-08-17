import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SliderTitleType } from 'src/app/core/typings/slider-title-type';
import { Maybe } from 'src/schema/schema';
import { TitleModule } from '../../../layout/title/title.module';

@Component({
  selector: 'app-slider-header',
  templateUrl: './slider-header.component.html',
  styleUrls: ['./slider-header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    TitleModule,
  ]
})
export class SliderHeaderComponent {

  @Input()
  public link?: string[];

  @Input()
  public linkLabel?: string;

  @Input()
  public titleLabel?: string;

  @Input()
  public title?: Maybe<string>;

  @Input()
  public titleType?: Maybe<SliderTitleType>;

}
