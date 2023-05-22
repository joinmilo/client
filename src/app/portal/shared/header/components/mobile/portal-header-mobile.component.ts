import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { fadeInAnimation } from 'src/app/core/animations/animations';
import { selectIsSearching } from 'src/app/portal/shared/search/state/search.selectors';
import { Maybe, UserContextEntity } from 'src/schema/schema';

@Component({
  selector: 'app-portal-header-mobile',
  templateUrl: './portal-header-mobile.component.html',
  styleUrls: ['./portal-header-mobile.component.scss'],
  animations: [
    fadeInAnimation(),
  ]
})
export class PortalHeaderMobileComponent {

  public isSearching = this.store.select(selectIsSearching);

  @Input()
  public user?: Maybe<UserContextEntity>;

  constructor(
    private store: Store,
  ) {}

}
