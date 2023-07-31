import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { mediaDownloadApi } from 'src/app/core/constants/core.constants';
import { CoreModule } from 'src/app/core/core.module';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { FileAction, MimeTypeDefinition } from '../../typings/file';
import { fileToMedia, mimeTypeDefinition } from '../../utils/file.utils';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    FontAwesomeModule,
    CommonModule,
    CoreModule,
    MatButtonModule,
  ]
})
export class FileCardComponent implements OnChanges {

  @Input()
  public action?: Maybe<FileAction> = 'DOWNLOAD';

  @Input()
  public set file(file: Maybe<File>) {
    this.media = fileToMedia(file);
  }
  
  @Input()
  public media?: Maybe<MediaEntity>;

  public mimeType?: Maybe<MimeTypeDefinition>;

  @Output()
  public deleted = new EventEmitter<Maybe<MediaEntity>>();

  constructor(
    public dialog: MatDialog,
    public router: Router,
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.mimeType = mimeTypeDefinition(this.media);
    }
  }

  public name(): Maybe<string> | undefined {
    return this.media?.extension
      ? `${this.media?.name}.${this.media?.extension}`
      : this.media?.name;
  }

  public download(): void {
    window.location.href = mediaDownloadApi(this.media);
  }

  public delete(): void {
    this.deleted.emit(this.media);
  }

}
