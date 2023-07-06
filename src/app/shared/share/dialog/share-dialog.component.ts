import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-share-dialog',
  templateUrl: 'share-dialog.component.html',
})
export class ShareDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public url: string
  ) {}
}

