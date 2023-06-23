import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreModule } from 'src/app/core/core.module';
import { MediaEntity } from 'src/schema/schema';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class ImageViewerComponent {

  constructor(
    public dialogRef: MatDialogRef<ImageViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public media: MediaEntity
  ) { }
}
