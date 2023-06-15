import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-social-share-dialog',
  templateUrl: 'social-share-dialog.component.html',
})
export class SocialShareDialogComponent {
  constructor(public dialogRef: MatDialogRef<SocialShareDialogComponent>) {}
}

