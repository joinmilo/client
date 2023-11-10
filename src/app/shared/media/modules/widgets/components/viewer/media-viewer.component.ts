import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { MediaService } from '../../../../services/media.service';
import { MediaViewerData, MimeTypeDefinition } from '../../../../typings/media';

@Component({
  selector: 'app-media-viewer',
  templateUrl: './media-viewer.component.html',
  styleUrls: ['./media-viewer.component.scss'],
})
export class MediaViewerComponent implements OnInit{

  public currentIndex = 0;
  public currentMedia?: Maybe<MediaEntity>;

  public mimeType?: Maybe<MimeTypeDefinition>;

  constructor(
    public dialogRef: MatDialogRef<MediaViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MediaViewerData,
    private mediaService: MediaService,
  ) { }

  public ngOnInit(): void {
    if (!isNaN(this.data.currentIndex as number)) {
        this.currentIndex = this.data.currentIndex as number;
        this.setCurrentMedia();
    }
  }

  @HostListener('document:keydown', ['$event'])
  public navigateKeyboard(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.previous(event);
    }
    
    if (event.key === 'ArrowRight') {
      this.next(event)
    }
  }

  public next(event: UIEvent): void {
    event.stopPropagation();

    const next = this.currentIndex + 1;
    this.currentIndex = next < this.data.media.length
      ? next
      : 0;

    this.setCurrentMedia();
  }

  public previous(event: UIEvent): void {
    event.stopPropagation();

    const previous = this.currentIndex - 1;
    this.currentIndex = previous < 0
      ? this.data.media.length - 1
      : previous;

    this.setCurrentMedia();
  }

  private setCurrentMedia(): void {
    this.currentMedia = this.data.media[this.currentIndex];
    this.mimeType = this.mediaService.mimeTypeDefinition(this.currentMedia);
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
