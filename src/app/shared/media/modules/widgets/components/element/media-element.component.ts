import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { MediaService } from '../../../../services/media.service';
import { AttributionDirection, MediaViewerData, MimeTypeDefinition } from '../../../../typings/media';
import { MediaViewerComponent } from '../viewer/media-viewer.component';

@Component({
  selector: 'app-media-element',
  templateUrl: './media-element.component.html',
  styleUrls: ['./media-element.component.scss'],
})
export class MediaElementComponent implements OnInit, OnChanges {

  @Input()
  public media?: Maybe<MediaEntity>;

  @Input()
  public attributionDirection: AttributionDirection = 'BOTTOM-RIGHT';

  @Input()
  public clickable = true;

  @Output()
  public clicked = new EventEmitter<MediaEntity>();

  public mimeType?: Maybe<MimeTypeDefinition>;

  constructor(
    public dialog: MatDialog,
    private mediaService: MediaService,
  ) { }

  public ngOnInit(): void {
    this.mimeType = this.mediaService.mimeTypeDefinition(this.media);
  }

  public ngOnChanges(): void {
    this.mimeType = this.mediaService.mimeTypeDefinition(this.media);
  }

  public click(): void {
    this.clicked.observed
      ? this.clicked.emit()
      : this.clickable
        ? this.dialog.open(MediaViewerComponent, {
            data: {
              media: [this.media],
            } as MediaViewerData,
            panelClass: 'media-dialog',
            autoFocus: false,
          })
        : null;
  }

}
