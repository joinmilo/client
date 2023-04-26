import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { DisplayType } from 'src/app/core/typings/overview-display';
import { EventActions } from '../../state/event.actions';
import { selectOverviewData, selectOverviewDisplayType, selectSponsoredEvent } from '../../state/event.selectors';

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.scss']
})
export class EventOverviewComponent implements OnDestroy {

  public sponsored = this.store.select(selectSponsoredEvent);

  public displayType = this.store.select(selectOverviewDisplayType);

  public data = this.store.select(selectOverviewData);

  public types = {
    category: DisplayType.Category,
    calendar: DisplayType.Calendar,
    list: DisplayType.List,
    map: DisplayType.Map,
  };

  private destroy = new Subject<void>();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    this.store.dispatch(EventActions.getSponsoredEvent());

    this.activatedRoute.queryParams
      .pipe(takeUntil(this.destroy))
      .subscribe(queryParams => {
        this.store.dispatch(EventActions.setParams({
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