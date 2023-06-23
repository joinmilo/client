import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, debounceTime, take, takeUntil } from 'rxjs';
import { collapse } from 'src/app/core/animations/animations';
import { SurveyFilterActions } from 'src/app/shared/filter/survey-filter/state/survey-filter.actions';
import { selectFiltersActive, selectSurveyFilterParams } from 'src/app/shared/filter/survey-filter/state/survey-filter.selectors';
import { FilterSortPaginateInput } from 'src/schema/schema';
import { SurveyFilterQueryParams } from '../../../../core/typings/filter-param';

@Component({
  selector: 'app-survey-filter',
  templateUrl: './survey-filter.component.html',
  styleUrls: ['./survey-filter.component.scss'],
  animations: [
     collapse()
  ],
})
export class SurveyFilterComponent implements OnInit, OnDestroy {

  @Output()
  public paramsUpdated = new EventEmitter<FilterSortPaginateInput>();

  @Output()
  public rawParamsUpdated = new EventEmitter<SurveyFilterQueryParams>();

  public filtersActive = this.store.select(selectFiltersActive);

  private destroy = new Subject<void>();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
    this.updateWithQueryParams();
  }
  
  public ngOnInit(): void {
    this.store.select(selectSurveyFilterParams)
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.paramsUpdated.emit(params));

  }

  @HostListener('window:popstate', ['$survey'])
  public onBrowserNavigation(): void {
    this.updateWithQueryParams();
  }

  private updateWithQueryParams(): void {
    this.activatedRoute.queryParams
      .pipe(
        debounceTime(0), //TODO: race condition between browser navigation and queryparams
        take(1)
    ).subscribe(params => this.store.dispatch(SurveyFilterActions.updateAll(params)));
  }

  public clearFilters(): void {
    this.store.dispatch(SurveyFilterActions.clearAll());
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}