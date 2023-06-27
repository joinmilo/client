import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { fadeInAnimation } from 'src/app/core/animations/animations';
import { selectCurrentUser } from 'src/app/core/state/core.selectors';
import { selectPortalMenu } from 'src/app/portal/shared/menu/state/portal-menu.selectors';
import { selectIsSearching } from 'src/app/portal/shared/search/state/search.selectors';
import { UserContextEntity } from 'src/schema/schema';

@Component({
  selector: 'app-portal-header-desktop',
  templateUrl: './portal-header-desktop.component.html',
  styleUrls: ['./portal-header-desktop.component.scss'],
  animations: [
    fadeInAnimation(),
  ]
})
export class PortalHeaderDesktopComponent implements OnInit{

  public currentUser?: Maybe<UserContextEntity>;

  public isSearching = this.store.select(selectIsSearching);
  
  public menu = this.store.select(selectPortalMenu);

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
  this.store.select(selectCurrentUser).subscribe((user) => {
    this.currentUser = user;
  });
}
}