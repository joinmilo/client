import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { EventEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { EventAdminDetailsLandingActions } from '../../landing/state/event-admin-details-landing.actions';
import { selectEventAdminDetailsLanding } from '../../landing/state/event-admin-details-landing.selectors';



@Component({
  selector: 'app-event-admin-details-visitors',
  templateUrl: './event-admin-details-visitors.component.html',
  styleUrls: ['./event-admin-details-visitors.component.scss']
})
export class EventAdminDetailsVisitorsComponent implements OnInit, OnDestroy {

  public event?: Maybe<EventEntity>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(
      tap(params => this.store.dispatch(EventAdminDetailsLandingActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectEventAdminDetailsLanding)),
      takeUntil(this.destroy)
    ).subscribe(event => {
      this.event = event;
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}