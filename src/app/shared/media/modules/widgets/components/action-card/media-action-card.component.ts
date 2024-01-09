import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { MediaService } from '../../../../services/media.service';
import { MimeTypeDefinition } from '../../../../typings/media';

@Component({
  selector: 'app-media-action-card',
  templateUrl: './media-action-card.component.html',
  styleUrls: ['./media-action-card.component.scss'],
})
export class MediaActionCardComponent implements OnInit, OnChanges {

  @Input()
  public actionLabel?: Maybe<string>;

  @Input()
  public actionDisabled?: Maybe<boolean>;

  @Input()
  public media?: Maybe<MediaEntity>;

  @Input()
  public showDelete = false;

  @Output()
  public action = new EventEmitter<Maybe<MediaEntity>>();

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

  public ngOnChanges(): void {
    this.mimeType = this.mediaService.mimeTypeDefinition(this.media);
  }

  public delete(event: MouseEvent): void {
    event.stopPropagation();
    this.deleted.emit(this.media);
  }

}
