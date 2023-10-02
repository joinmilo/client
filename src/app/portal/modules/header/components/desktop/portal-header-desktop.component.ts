import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { fadeInAnimation } from 'src/app/core/animations/animations';
import { Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';
import { accountUrl, adminUrl } from 'src/app/core/constants/module.constants';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { selectPortalMenu } from 'src/app/portal/state/portal.selectors';
import { selectIsSearching } from 'src/app/shared/pages/search/state/search.selectors';

@Component({
  selector: 'app-portal-header-desktop',
  templateUrl: './portal-header-desktop.component.html',
  styleUrls: ['./portal-header-desktop.component.scss'],
  animations: [
    fadeInAnimation(),
  ]
})
export class PortalHeaderDesktopComponent implements OnInit, OnDestroy {

  public accountUrl = accountUrl;
  public adminUrl = adminUrl;

  public currentUser?: Maybe<UserContextEntity>;

  public isSearching = this.store.select(selectIsSearching);
  
  public menu = this.store.select(selectPortalMenu);

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
  ) {}

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