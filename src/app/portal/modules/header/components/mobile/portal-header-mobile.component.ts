import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { fadeInAnimation } from 'src/app/core/animations/animations';
import { Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';
import { accountUrl, adminUrl } from 'src/app/core/constants/module.constants';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { selectIsSearching } from 'src/app/shared/pages/search/state/search.selectors';

@Component({
  selector: 'app-portal-header-mobile',
  templateUrl: './portal-header-mobile.component.html',
  styleUrls: ['./portal-header-mobile.component.scss'],
  animations: [fadeInAnimation()],
})
export class PortalHeaderMobileComponent implements OnInit, OnDestroy{

  public accountUrl = accountUrl;
  public adminUrl = adminUrl;
  
  public currentUser?: Maybe<UserContextEntity>;

  public isSearching = this.store.select(selectIsSearching);

  private destroy = new Subject<void>();
  
  constructor(
    private store: Store) {}

  public ngOnInit(): void {
    this.store.select(selectCurrentUser)
      .pipe(takeUntil(this.destroy))
      .subscribe((user) => this.currentUser = user);
  }
  
  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
