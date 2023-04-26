import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-social-share-button',
  templateUrl: './social-share-button.component.html',
  styleUrls: ['./social-share-button.component.scss'],
})

export class SocialShareComponent  {

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SocialShareDialog, {
      width: '18rem',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'app-social-share-dialog',
  templateUrl: 'social-share-dialog.component.html',
})
export class SocialShareDialog {
  constructor(public dialogRef: MatDialogRef<SocialShareDialog>) {}
}

