import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocialShareDialogComponent } from '../share-dialog/social-share-dialog.component';

@Component({
  selector: 'app-social-share-button',
  templateUrl: './social-share-button.component.html',
  styleUrls: ['./social-share-button.component.scss'],
})

export class SocialShareButtonComponent  {

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SocialShareDialogComponent, {
      width: '18rem',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
