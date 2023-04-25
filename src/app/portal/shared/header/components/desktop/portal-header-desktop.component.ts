import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fadeInAnimation } from 'src/app/core/animations/animations';
import { selectPortalMenu } from 'src/app/portal/shared/menu/state/portal-menu.selectors';
import { selectIsSearching } from 'src/app/portal/shared/search/state/search.selectors';

@Component({
  selector: 'app-portal-header-desktop',
  templateUrl: './portal-header-desktop.component.html',
  styleUrls: ['./portal-header-desktop.component.scss'],
  animations: [
    fadeInAnimation,
  ]
})
export class PortalHeaderDesktopComponent {

  public menu = this.store.select(selectPortalMenu);

  public isSearching = this.store.select(selectIsSearching);

  constructor(
    private store: Store,
  ) {}
}