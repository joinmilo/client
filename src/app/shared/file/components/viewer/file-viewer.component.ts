import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { FileViewerData, MimeTypeDefinition } from '../../typings/file';
import { mimeTypeDefinition } from '../../utils/file.utils';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.scss'],
})
export class FileViewerComponent implements OnInit{

  public currentIndex = 0;

  constructor(
    public dialogRef: MatDialogRef<FileViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FileViewerData
  ) { }

  public ngOnInit(): void {
    if (this.data.currentIndex) {
      this.currentIndex = this.data.currentIndex;
    }
  }

  public mimeType(element?: Maybe<MediaEntity>): Maybe<MimeTypeDefinition> {
    return mimeTypeDefinition(element);
  }

  public getCurrentImage(): MediaEntity{
    return this.data.media[this.currentIndex];
  }

  public next(event: MouseEvent): void {
    event.stopPropagation();

    const next = this.currentIndex + 1;
    this.currentIndex = next < this.data.media.length
      ? next
      : 0;
  }

  public previous(event: MouseEvent): void {
    event.stopPropagation();

    const previous = this.currentIndex - 1;
    this.currentIndex = previous <= 0
      ? this.data.media.length - 1
      : previous;
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
