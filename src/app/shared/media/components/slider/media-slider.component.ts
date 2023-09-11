import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { SliderTitleType } from 'src/app/core/typings/slider-title-type';
import { MediaService } from '../../services/media.service';
import { FileAction, MediaViewerData, MimeTypeDefinition } from '../../typings/media';
import { MediaViewerComponent } from '../viewer/media-viewer.component';

@Component({
  selector: 'app-media-slider',
  templateUrl: './media-slider.component.html',
  styleUrls: ['./media-slider.component.scss'],
})
export class MediaSliderComponent {

  @Input()
  public action?: FileAction;

  @Input()
  public media?: Maybe<(Maybe<MediaEntity> | undefined)[]>;

  @Input()
  public link?: string[];

  @Input()
  public linkLabel?: string = 'allMedia';
  
  @Input()
  public titleLabel?: string = 'media';

  @Input()
  public title?: Maybe<string>;

  @Input()
  public titleType: SliderTitleType = 'DETAILS';

  @Output()
  public deleted = new EventEmitter<Maybe<MediaEntity>>();

  constructor(
    public dialog: MatDialog,
    private mediaService: MediaService,) { }

  public mimeType(element?: Maybe<MediaEntity>): Maybe<MimeTypeDefinition> {
    return this.mediaService.mimeTypeDefinition(element);
  }

  delete(event: Maybe<MediaEntity>) {
    console.log("slider", event);
    this.deleted.emit(event);
  }

  public open(media?: Maybe<MediaEntity>): void {
    if (media?.mimeType?.includes('image')) {
      this.openDialog('image', media);
    } else if (media?.mimeType?.includes('video')) {
      this.openDialog('video', media);
    }
  }

  public openDialog(mimeType: string, media?: Maybe<MediaEntity>): void {
    const filtered = this.media?.filter(element => element?.mimeType?.includes(mimeType));

    this.dialog.open(MediaViewerComponent, {
      data: {
        media: filtered,
        currentIndex: filtered?.findIndex(element => element?.id === media?.id)
      } as MediaViewerData,
      panelClass: 'media-dialog',
      autoFocus: false,
    });
  }
}
