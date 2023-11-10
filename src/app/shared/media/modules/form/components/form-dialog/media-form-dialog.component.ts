import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MediaEntity } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-media-form-dialog',
  templateUrl: './media-form-dialog.component.html',
  styleUrls: ['./media-form-dialog.component.scss'],
})
export class MediaFormDialogComponent {

  public media: MediaEntity[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public maxFiles: number) { }

}