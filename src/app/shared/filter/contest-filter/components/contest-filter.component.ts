import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, debounceTime, take, takeUntil } from 'rxjs';
import { collapse } from 'src/app/core/animations/animations';
import { FilterSortPaginateInput } from 'src/schema/schema';

import { ContestFilterActions } from '../state/contest-filter.actions';
import { selectContestFilterParams, selectFiltersActive } from '../state/contest-filter.selector';

@Component({
  selector: 'app-contest-filter',
  templateUrl: './contest-filter.component.html',
  styleUrls: ['./contest-filter.component.scss'],
  animations: [
     collapse()
  ],
})
export class ContestFilterComponent implements OnInit, OnDestroy {

  @Output()
  public paramsUpdated = new EventEmitter<FilterSortPaginateInput>();

  public filtersActive = this.store.select(selectFiltersActive);

  private destroy = new Subject<void>();

  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
    this.updateWithQueryParams();
  }
  
  public ngOnInit(): void {
    this.store.select(selectContestFilterParams)
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.paramsUpdated.emit(params));
  }

  @HostListener('window:popstate', ['$event'])
  public onBrowserNavigation(): void {
    this.updateWithQueryParams();
  }

  private updateWithQueryParams(): void {
    this.activatedRoute.queryParams
      .pipe(
        debounceTime(0), //TODO: race condition between browser navigation and queryparams
        take(1)
    ).subscribe(params => this.store.dispatch(ContestFilterActions.updateAll(params)));
  }

  public clearFilters(): void {
    this.store.dispatch(ContestFilterActions.clearAll());
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}