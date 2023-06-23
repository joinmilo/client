import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { MediaComponent } from '../../media/media.component';
import { TitleModule } from '../../title/title.module';
import { SliderHeaderComponent } from '../slider-header/slider-header.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-media-slider',
  templateUrl: './media-slider.component.html',
  styleUrls: ['./media-slider.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    MediaComponent,
    RouterModule,
    SliderComponent,
    SliderHeaderComponent,
    TitleModule,
  ]
})
export class MediaSliderComponent {

  @Input()
  public media?: Maybe<Maybe<MediaEntity>[]>;

  @Input()
  public link?: string[];

  @Input()
  public linkLabel?: string = 'allMedia';

  @Input()
  public titleLabel?: string = 'media';

  @Input()
  public title?: Maybe<string>;

  constructor(public dialog: MatDialog) { }

}
