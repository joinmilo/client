import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieBannerComponent } from './banner/cookie-banner.component';

@Component({
  selector: 'app-portal-cookie-banner',
  templateUrl: './portal-cookie-banner.component.html',
  styleUrls: ['./portal-cookie-banner.component.scss']
})
export class PortalCookieBannerComponent {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(CookieBannerComponent, {
      panelClass: ['cookie-banner']
    });
  }
}
