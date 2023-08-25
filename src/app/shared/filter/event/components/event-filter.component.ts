import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, debounceTime, filter, take, takeUntil } from 'rxjs';
import { collapse } from 'src/app/core/animations/animations';
import { FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';
import { Period } from 'src/app/core/typings/period';
import { EventFilterActions } from 'src/app/shared/filter/event/state/event-filter.actions';
import { selectEventFilterParams, selectFiltersActive, selectRawFilterParams } from 'src/app/shared/filter/event/state/event-filter.selectors';

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.scss'],
  animations: [
     collapse()
  ],
})
export class EventFilterComponent implements OnInit, OnDestroy {

  @Output()
  public paramsUpdated = new EventEmitter<FilterSortPaginateInput>();

  @Output()
  public rawParamsUpdated = new EventEmitter<EventFilterQueryParams>();

  public disbleDateFilter = false;
  
  public filtersActive = this.store.select(selectFiltersActive);

  private destroy = new Subject<void>();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
    this.store.dispatch(EventFilterActions.init());
  }
  
  public ngOnInit(): void {
    this.store.select(selectEventFilterParams)
      .pipe(
        filter(params => !!params),
        takeUntil(this.destroy)
      )
      .subscribe(params => this.paramsUpdated.emit(params));

    this.store.select(selectRawFilterParams)
      .pipe(
        filter(params => !!params),
        takeUntil(this.destroy)
      )
      .subscribe(params => {
        this.disbleDateFilter = !!params?.past;
        this.rawParamsUpdated.emit(params);
      });
  }

  public periodSelected(period?: Maybe<Period>): void {
    this.store.dispatch(EventFilterActions.selectedPeriod(period));
  }

  public suburbSelected(suburbIds?: Maybe<string[]>): void {
    this.store.dispatch(EventFilterActions.selectedSuburbs(suburbIds));
  }

  @HostListener('window:popstate', ['$event'])
  public onBrowserNavigation(): void {
    this.activatedRoute.queryParams
      .pipe(
        debounceTime(0), //TODO: race condition between browser navigation and queryparams
        take(1)
    ).subscribe(params => this.store.dispatch(EventFilterActions.browserNavigated(params)));
  }

  public clearFilters(): void {
    this.store.dispatch(EventFilterActions.clearAll());
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}