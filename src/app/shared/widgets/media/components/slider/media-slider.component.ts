import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { FileAction, MediaViewerData, MimeTypeDefinition } from '../../typings/media';
import { fileToMedia, mimeTypeDefinition } from '../../utils/media.utils';
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
  public set files(files: File[]) {
    this.media = files?.map(file => file instanceof File
      ? fileToMedia(file)
      : null
    );
  }

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

  public mimeType(element?: Maybe<MediaEntity>): Maybe<MimeTypeDefinition> {
    return mimeTypeDefinition(element);
  }

  public open(media: Maybe<MediaEntity>): void {
    if (media?.mimeType?.includes('image')) {
      this.openDialog('image', media);
    } else if (media?.mimeType?.includes('video')) {
      this.openDialog('video', media);
    }
  }

  public openDialog(mimeType: string, media: Maybe<MediaEntity>): void {
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
