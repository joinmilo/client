import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { mediaDownloadApi } from 'src/app/core/constants/url.constants';
import { MediaService } from '../../../../services/media.service';
import { MimeTypeDefinition } from '../../../../typings/media';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
})
export class MediaCardComponent implements OnInit {

  @Input()
  public media?: Maybe<MediaEntity>;

  @Input()
  public showDelete = false;

  @Output()
  public clicked = new EventEmitter<Maybe<MediaEntity>>();

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

  public click(): void {
    this.clicked.emit(this.media);
  }

  public download(event: MouseEvent): void {
    event.stopPropagation();
    window.location.href = mediaDownloadApi(this.media);
  }

  public delete(event: MouseEvent): void {
    event.stopPropagation();
    this.deleted.emit(this.media);
  }

}
