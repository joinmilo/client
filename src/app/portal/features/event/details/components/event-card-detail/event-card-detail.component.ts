import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, takeUntil } from 'rxjs';
import { selectCurrenUser } from 'src/app/core/state/core.selectors';
import { EventEntity, UserContextEntity } from 'src/schema/schema';
import { selectEventDetails } from '../../state/portal-event-details.selectors';


@Component({
  selector: 'app-event-card-detail',
  templateUrl: './event-card-detail.component.html',
  styleUrls: ['./event-card-detail.component.scss'],
})
export class EventCardDetailComponent implements OnInit, OnDestroy {


  public event?: Maybe<EventEntity> | undefined;

  private destroy = new Subject<void>();

  private currentUser?: Maybe<UserContextEntity> | undefined;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.select(selectEventDetails)
      .pipe(takeUntil(this.destroy))
      .subscribe(event => this.event = event);

    this.store.select(selectCurrenUser)
      .pipe(takeUntil(this.destroy))
      .subscribe(user => this.currentUser = user);
  }

  attendEvent() {
    if (this.currentUser !== null && this.currentUser !== undefined) {
      // TODO: attend logic
    }
    else {
      this.router.navigate(['/user', 'register'])
    }
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
