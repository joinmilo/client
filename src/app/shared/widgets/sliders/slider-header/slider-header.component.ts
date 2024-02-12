import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { DetailsTitleComponent, SubTitleComponent, TitleType } from 'ngx-cinlib/layouts/title';
import { Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';

@Component({
  selector: 'app-slider-header',
  templateUrl: './slider-header.component.html',
  styleUrls: ['./slider-header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    DetailsTitleComponent,
    I18nDirective,
    RouterModule,
    SubTitleComponent,
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
  public titleType?: Maybe<TitleType>;

}
