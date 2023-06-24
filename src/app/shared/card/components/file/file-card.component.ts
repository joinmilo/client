import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { mediaDownloadApi } from 'src/app/core/constants/core.constants';
import { MimeTypeDefinition } from 'src/app/core/typings/mime-type';
import { Maybe, MediaEntity } from 'src/schema/schema';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss'],
})
export class FileCardComponent {

  @Input()
  public media?: Maybe<MediaEntity>;

  @Input()
  public mimeType?: MimeTypeDefinition;

  constructor(
    public dialog: MatDialog,
    public router: Router,
  ) { }

  public download(): void {
    window.location.href = mediaDownloadApi(this.media);
  }

}
