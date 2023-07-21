import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Maybe } from 'src/schema/schema';
import { ShareDialogComponent } from '../dialog/share-dialog.component';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.scss'],
})

export class ShareButtonComponent  {

  @Input()
  public url?: Maybe<string>;

  @Input()
  public withLabel = false;

  constructor(public dialog: MatDialog) {}

  public openDialog(): void {
    this.dialog.open(ShareDialogComponent, {
      data: this.url
    }); 
  }
}
