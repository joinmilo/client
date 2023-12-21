import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, combineLatest, takeUntil } from 'rxjs';
import { FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { MapEntityFilter } from 'src/app/core/typings/filter-params/map-filter-param';
import { MapFeatureActions } from '../../state/portal-map-overview.actions';
import { selectActiveEntityFilter, selectResult } from '../../state/portal-map-overview.selector';

@Component({
  selector: 'app-portal-map-overview-filter',
  templateUrl: './portal-map-overview-filter.component.html',
  styleUrls: ['portal-map-overview-filter.component.scss']
})
export class PortalMapOverviewFilterComponent implements OnDestroy {

  public activeFilter = this.store.select(selectActiveEntityFilter);
  
  public entityFilter = MapEntityFilter;

  public total?: Maybe<number>;

  public label? = '';

  private destroy = new Subject<void>();

  constructor(private store: Store) {
    combineLatest([
      this.store.select(selectActiveEntityFilter),
      this.store.select(selectResult)
    ])
      .pipe(takeUntil(this.destroy))
      .subscribe(([entityFilter, result]) => {
        this.total = result?.data?.length;
        switch (entityFilter) {
          case MapEntityFilter.Deals:
            this.label = this.total && this.total === 1 ? 'deal' : 'deals';
            break;
          case MapEntityFilter.Events:
            this.label = this.total && this.total === 1 ? 'activity' : 'activities';
            break;
          case MapEntityFilter.Organisations:
            this.label = this.total && this.total === 1 ? 'organisation' : 'organisations';
            break;
        }
      });
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(MapFeatureActions.setFilterParams(params));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
