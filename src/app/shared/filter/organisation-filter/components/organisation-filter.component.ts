import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, debounceTime, take, takeUntil } from 'rxjs';
import { collapse } from 'src/app/core/animations/animations';
import { OrganisationFilterQueryParams } from 'src/app/core/typings/filter-params/organisation-filter-param';
import { FilterSortPaginateInput, Maybe } from 'src/schema/schema';
import { OrganisationFilterActions } from '../state/organisation-filter.actions';
import { selectFiltersActive, selectOrganisationFilterParams, selectRawFilterParams } from '../state/organisation-filter.selectors';

@Component({
  selector: 'app-organisation-filter',
  templateUrl: './organisation-filter.component.html',
  styleUrls: ['./organisation-filter.component.scss'],
  animations: [
     collapse()
  ],
})
export class OrganisationFilterComponent implements OnInit, OnDestroy {

  @Output()
  public paramsUpdated = new EventEmitter<FilterSortPaginateInput>();

  @Output()
  public rawParamsUpdated = new EventEmitter<OrganisationFilterQueryParams>();
  
  public filtersActive = this.store.select(selectFiltersActive);

  private destroy = new Subject<void>();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
    this.updateWithQueryParams();
  }
  
  public ngOnInit(): void {
    this.store.select(selectOrganisationFilterParams)
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.paramsUpdated.emit(params));

    this.store.select(selectRawFilterParams)
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.rawParamsUpdated.emit(params));
  }

  public suburbSelected(suburbIds: Maybe<string[]> | undefined): void {
    this.store.dispatch(OrganisationFilterActions.selectedSuburbs(suburbIds));
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
    ).subscribe(params => this.store.dispatch(OrganisationFilterActions.updateAll(params)));
  }

  public clearFilters(): void {
    this.store.dispatch(OrganisationFilterActions.clearAll());
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}