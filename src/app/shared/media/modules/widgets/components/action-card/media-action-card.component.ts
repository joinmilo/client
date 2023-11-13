import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { MediaService } from '../../../../services/media.service';
import { MediaViewerData, MimeTypeDefinition } from '../../../../typings/media';
import { MediaViewerComponent } from '../viewer/media-viewer.component';

@Component({
  selector: 'app-media-action-card',
  templateUrl: './media-action-card.component.html',
  styleUrls: ['./media-action-card.component.scss'],
})
export class MediaActionCardComponent implements OnInit {

  @Input()
  public actionLabel?: Maybe<string>;

  @Input()
  public media?: Maybe<MediaEntity>;

  @Input()
  public showDelete = false;

  @Output()
  public action = new EventEmitter<Maybe<MediaEntity>>();

  @Output()
  public deleted = new EventEmitter<Maybe<MediaEntity>>();

  public iconSize: SizeProp = '5x';

  public mimeType?: Maybe<MimeTypeDefinition>;

  constructor(
    public dialog: MatDialog,
    private mediaService: MediaService,
  ) { }

  public ngOnInit(): void {
    this.mimeType = this.mediaService.mimeTypeDefinition(this.media);
  }

  public openViewer(): void {
    this.dialog.open(MediaViewerComponent, {
      data: {
        media: [this.media],
      } as MediaViewerData,
      panelClass: 'media-dialog',
      autoFocus: false,
    });
  }

  public delete(event: MouseEvent): void {
    event.stopPropagation();
    this.deleted.emit(this.media);
  }

}
