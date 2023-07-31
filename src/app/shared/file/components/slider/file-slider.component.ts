import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { ImageViewerComponent } from '../../../image/viewer/image-viewer.component';
import { FileAction, MimeTypeDefinition } from '../../typings/file';
import { fileToMedia, mimeTypeDefinition } from '../../utils/file.utils';

@Component({
  selector: 'app-file-slider',
  templateUrl: './file-slider.component.html',
  styleUrls: ['./file-slider.component.scss'],
})

export class FileSliderComponent {

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

  @Output()
  public deleted = new EventEmitter<Maybe<MediaEntity>>();

  constructor(public dialog: MatDialog) { }

  public mimeType(element?: Maybe<MediaEntity>): Maybe<MimeTypeDefinition> {
    return mimeTypeDefinition(element);
  }

  public openMedia(index: number): void {
    this.dialog.open(ImageViewerComponent, {
      width: "100vw",
      height: "100vh",
      maxWidth: "100vw",
      data: {media: this.media, currentIndex: index},
      panelClass: "transparent-dialog"
    });
  }
}
