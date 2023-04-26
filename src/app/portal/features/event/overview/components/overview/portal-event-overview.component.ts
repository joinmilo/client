import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { PortalEventOverviewActions } from '../../state/portal-event-overview.actions';
import { selectDisplayType, selectOverviewData, selectSponsoredEvent } from '../../state/portal-event-overview.selectors';

@Component({
  selector: 'app-portal-event-overview',
  templateUrl: './portal-event-overview.component.html',
  styleUrls: ['./portal-event-overview.component.scss']
})
export class PortalEventOverviewComponent implements OnDestroy {

  public sponsored = this.store.select(selectSponsoredEvent);

  public displayType = this.store.select(selectDisplayType);

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