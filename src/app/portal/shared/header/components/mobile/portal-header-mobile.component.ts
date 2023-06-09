import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fadeInAnimation } from 'src/app/core/animations/animations';
import { selectCurrentUser } from 'src/app/core/state/core.selectors';
import { selectIsSearching } from 'src/app/portal/shared/search/state/search.selectors';
import { Maybe, UserContextEntity } from 'src/schema/schema';

@Component({
  selector: 'app-portal-header-mobile',
  templateUrl: './portal-header-mobile.component.html',
  styleUrls: ['./portal-header-mobile.component.scss'],
  animations: [fadeInAnimation()],
})
export class PortalHeaderMobileComponent implements OnInit{
  
  public currentUser?: Maybe<UserContextEntity>;

  public isSearching = this.store.select(selectIsSearching);
  
  constructor(private store: Store) {}
  ngOnInit(): void {
  this.store.select(selectCurrentUser).subscribe((user) => {
    this.currentUser = user;
  });
    
  }
}
