import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { MimeTypeDefinition } from 'src/app/core/typings/mime-type';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { CardModule } from '../../card/card.module';
import { ImageViewerComponent } from '../../image/viewer/image-viewer.component';
import { TitleModule } from '../../title/title.module';
import { SliderHeaderComponent } from '../slider-header/slider-header.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-media-slider',
  templateUrl: './media-slider.component.html',
  styleUrls: ['./media-slider.component.scss'],
  standalone: true,
  imports: [
    CardModule,
    CommonModule,
    CoreModule,
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

  public mimeTypeDefinition(element?: Maybe<MediaEntity>): Maybe<MimeTypeDefinition> {
    if (element?.mimeType?.includes('audio')) {
      return 'AUDIO';
    } else if (element?.mimeType?.includes('image')) {
      return 'IMAGE';
    } else if (element?.mimeType?.includes('video')) {
      return 'VIDEO';
    } else if (element?.mimeType?.includes('pdf')) {
      return 'PDF';
    } else if (element?.extension?.includes('doc')) {
      return 'WORD';
    }
    return null;
  }

  public openImage(image?: Maybe<MediaEntity>): void {
    this.dialog.open(ImageViewerComponent, {
      data: image,
    });
  }


}
