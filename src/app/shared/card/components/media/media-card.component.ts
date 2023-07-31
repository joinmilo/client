import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { mediaDownloadApi } from 'src/app/core/constants/core.constants';
import { FileViewerComponent } from 'src/app/shared/file/components/viewer/file-viewer.component';
import { MimeTypeDefinition } from 'src/app/shared/file/typings/file';
import { mimeTypeDefinition } from 'src/app/shared/file/utils/file.utils';
import { Maybe, MediaEntity } from 'src/schema/schema';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
})
export class MediaCardComponent implements OnInit {

  @Input()
  public media?: Maybe<MediaEntity>;

  public mimeType?: Maybe<MimeTypeDefinition>;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
      this.mimeType = mimeTypeDefinition(this.media);
  }

  public name(): Maybe<string> | undefined {
    return this.media?.extension
      ? `${this.media?.name}.${this.media?.extension}`
      : this.media?.name;
  }

  public download(): void {
    window.location.href = mediaDownloadApi(this.media);
  }

  public openImage(image?: Maybe<MediaEntity>): void {
    this.dialog.open(FileViewerComponent, {
      data: image,
    });
  }
}
