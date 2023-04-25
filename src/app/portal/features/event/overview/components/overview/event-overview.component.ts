import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { PortalEventOverviewActions } from '../../state/event-overview.actions';
import { selectOverviewData, selectOverviewDisplayType, selectSponsoredEvent } from '../../state/event-overview.selectors';

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.scss']
})
export class EventOverviewComponent implements OnDestroy {

  public sponsored = this.store.select(selectSponsoredEvent);

  public displayType = this.store.select(selectOverviewDisplayType);

  public data = this.store.select(selectOverviewData);

  private destroy = new Subject<void>();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    this.store.dispatch(PortalEventOverviewActions.getSponsoredEvent());

    this.activatedRoute.queryParams
      .pipe(takeUntil(this.destroy))
      .subscribe(queryParams => {
        this.store.dispatch(PortalEventOverviewActions.setParams({
          page: 0,
          size: 5,
        }));
      })
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}