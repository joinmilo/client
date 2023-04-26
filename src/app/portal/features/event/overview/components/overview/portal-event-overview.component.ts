import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { EventQueryParams } from 'src/app/shared/event-filter/typings/query-param';
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
    private store: Store,
  ) {
    this.store.dispatch(PortalEventOverviewActions.getSponsoredEvent());

    this.activatedRoute.queryParams
      .pipe(takeUntil(this.destroy))
      .subscribe((queryParams: EventQueryParams) => {

        // let params: FilterSortPaginateInput = {
        //   expression: {}
        // };

        // if (queryParams.categories) {
        //   params.expression.
        // }

        this.store.dispatch(PortalEventOverviewActions.setParams({}));
      })
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}