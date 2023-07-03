import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, takeUntil } from 'rxjs';
import { selectCurrentUser } from 'src/app/core/state/core.selectors';
import { EventEntity, UserContextEntity } from 'src/schema/schema';
import { selectEventDetails } from '../../state/portal-event-details.selectors';

@Component({
  selector: 'app-event-details-summary',
  templateUrl: './event-details-summary.component.html',
  styleUrls: ['./event-details-summary.component.scss'],
})
export class EventDetailsSummrayComponent implements OnInit, OnDestroy {

  public event?: Maybe<EventEntity> | undefined;

  private destroy = new Subject<void>();

  public currentUser?: Maybe<UserContextEntity> | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {

    this.store.select(selectEventDetails)
      .pipe(takeUntil(this.destroy))
      .subscribe(event => {
        this.event = event;
      });

    this.store.select(selectCurrentUser)
      .pipe(takeUntil(this.destroy))
      .subscribe(user => this.currentUser = user);
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
