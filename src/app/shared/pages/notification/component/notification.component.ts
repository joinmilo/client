import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit, OnDestroy {

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