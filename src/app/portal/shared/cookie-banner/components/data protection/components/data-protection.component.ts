import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieSettingsComponent } from '../../settings/cookie-settings.component';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent {

    constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CookieSettingsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
