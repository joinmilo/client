import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fadeInAnimation } from 'src/app/core/animations/animations';
import { selectIsSearching } from 'src/app/portal/search/state/search.selectors';
import { selectMenu } from '../../../state/common.selectors';

@Component({
  selector: 'app-portal-header-desktop',
  templateUrl: './portal-header-desktop.component.html',
  styleUrls: ['./portal-header-desktop.component.scss'],
  animations: [
    fadeInAnimation,
  ]
})
export class PortalHeaderDesktopComponent {

  public menu = this.store.select(selectMenu);

  public isSearching = this.store.select(selectIsSearching);

  constructor(
    private store: Store,
  ) {}
}