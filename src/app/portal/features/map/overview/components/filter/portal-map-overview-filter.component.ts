import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { FilterKey } from 'src/app/core/typings/filter-params/map-filter-param';
import { FilterSortPaginateInput, Maybe } from 'src/schema/schema';
import { MapFeatureActions } from '../../state/map.actions';
import { selectActiveFilter, selectResults } from '../../state/map.selector';

@Component({
  selector: 'app-portal-map-overview-filter',
  templateUrl: './portal-map-overview-filter.component.html'
})
export class PortalMapOverviewFilterComponent implements OnDestroy {

  public activeFilter = this.store.select(selectActiveFilter);
  
  public filterKey = FilterKey;

  public total?: Maybe<number>;

  public label? = '';

  private destroy = new Subject<void>();

  constructor(private store: Store) {
    this.store.select(selectResults)
      .pipe(takeUntil(this.destroy))
      .subscribe(result => {
        this.total = result?.count;
        switch (result?.entity) {
          case 'EventEntity':
            this.label = this.total && this.total === 1 ? 'activity' : 'activities';
            break;
          case 'DealEntity':
            this.label = this.total && this.total === 1 ? 'deal' : 'deals';
            break;
          case 'OrganisationEntity':
            this.label = this.total && this.total === 1 ? 'organisation' : 'organisations';
            break;
        }
      });
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(MapFeatureActions.setFilterParams({ params }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
