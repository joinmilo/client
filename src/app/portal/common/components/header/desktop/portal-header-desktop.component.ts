import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMenu } from '../../../state/common.selectors';

@Component({
  selector: 'app-portal-header-desktop',
  templateUrl: './portal-header-desktop.component.html',
  styleUrls: ['./portal-header-desktop.component.scss'],
})
export class PortalHeaderDesktopComponent {

  public menu = this.store.select(selectMenu);

  constructor(
    private store: Store,
  ) { }

}