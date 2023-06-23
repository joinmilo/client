import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { mediaDownloadApi } from 'src/app/core/constants/core.constants';
import { CoreModule } from 'src/app/core/core.module';
import { MimeTypeDefinition } from 'src/app/core/typings/mime-type';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { ImageViewerComponent } from '../image/viewer/image-viewer.component';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    FontAwesomeModule,
  ]
})
export class MediaComponent implements OnInit {

  @Input()
  public media?: Maybe<MediaEntity>;

  public mimeType?: MimeTypeDefinition;

  constructor(
    public dialog: MatDialog,
    public router: Router,
  ) { }

  public ngOnInit(): void {
    if (this.media?.mimeType?.includes('audio')) {
      this.mimeType = MimeTypeDefinition.Audio
    } else if (this.media?.mimeType?.includes('image')) {
      this.mimeType = MimeTypeDefinition.Image;
    } else if (this.media?.mimeType?.includes('video')) {
      this.mimeType = MimeTypeDefinition.Video;
    } else if (this.media?.mimeType?.includes('pdf')) {
      this.mimeType = MimeTypeDefinition.Pdf;
    } else if (this.mimeType?.includes('application/msword')
      || this.mimeType?.includes('application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
        this.mimeType = MimeTypeDefinition.Word;
      }
  }

  public download(): void {
    window.location.href = mediaDownloadApi(this.media);
  }

  public open(): void {
    this.dialog.open(ImageViewerComponent, {
      data: this.media,
    });
  }

}
