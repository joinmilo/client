import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { mediaDownloadApi } from 'src/app/core/constants/url.constants';
import { MediaService } from '../../../../services/media.service';
import { MimeTypeDefinition } from '../../../../typings/media';

@Component({
  selector: 'app-media-view-card',
  templateUrl: './media-view-card.component.html',
  styleUrls: ['./media-view-card.component.scss'],
})
export class MediaViewCardComponent implements OnInit {

  @Input()
  public media?: Maybe<MediaEntity>;

  @Output()
  public clicked = new EventEmitter<Maybe<MediaEntity>>();

  @Output()
  public deleted = new EventEmitter<Maybe<MediaEntity>>();

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

}
