import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectCurrentUser } from 'src/app/core/state/core.selectors';
import { Maybe, UserContextEntity } from 'src/schema/schema';

@Component({
  selector: 'app-portal-header-notifications',
  templateUrl: './portal-header-notifications.component.html',
  styleUrls: ['./portal-header-notifications.component.scss'],
})
export class PortalHeaderNotificationsComponent implements OnInit, OnDestroy {
  
  public currentUser?: Maybe<UserContextEntity> | undefined;

  private destroy = new Subject<void>(); 
  
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.select(selectCurrentUser).pipe(takeUntil(this.destroy)).subscribe(user => this.currentUser = user); 
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
