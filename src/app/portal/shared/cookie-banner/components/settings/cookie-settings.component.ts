import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cookie-settings',
  templateUrl: './cookie-settings.component.html',
  styleUrls: ['./cookie-settings.component.scss']
})
export class CookieSettingsComponent {

  constructor(public dialogRef: MatDialogRef<CookieSettingsComponent>) {
  
  }

  dismiss() {
    this.dialogRef.close();
  }

}
