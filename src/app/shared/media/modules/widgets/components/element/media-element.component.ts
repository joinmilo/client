import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { MediaService } from '../../../../services/media.service';
import { MediaViewerData, MimeTypeDefinition } from '../../../../typings/media';
import { MediaViewerComponent } from '../viewer/media-viewer.component';

@Component({
  selector: 'app-media-element',
  templateUrl: './media-element.component.html',
  styleUrls: ['./media-element.component.scss'],
})
export class MediaElementComponent implements OnInit {

  @Input()
  public media?: Maybe<MediaEntity>;

  @Output()
  public clicked = new EventEmitter<MediaEntity>();

  public iconSize: SizeProp = '5x';

  public mimeType?: Maybe<MimeTypeDefinition>;

  constructor(
    public dialog: MatDialog,
    private mediaService: MediaService,
  ) { }

  public ngOnInit(): void {
    this.mimeType = this.mediaService.mimeTypeDefinition(this.media);
  }

  public click(): void {
    console.log('observerd', this.clicked.observed)
    this.clicked.observed
      ? this.clicked.emit()
      : this.dialog.open(MediaViewerComponent, {
          data: {
            media: [this.media],
          } as MediaViewerData,
          panelClass: 'media-dialog',
          autoFocus: false,
        });
  }

}
