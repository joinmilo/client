import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, debounceTime, take, takeUntil } from 'rxjs';
import { collapse } from 'src/app/core/animations/animations';
import { ArticleFilterQueryParams } from 'src/app/core/typings/filter-params/article-filter-param';
import { Period } from 'src/app/core/typings/period';
import { ArticleFilterActions } from 'src/app/shared/filter/article-filter/state/article-filter.actions';
import { selectArticleFilterParams, selectFiltersActive, selectRawFilterParams } from 'src/app/shared/filter/article-filter/state/article-filter.selectors';
import { FilterSortPaginateInput, Maybe } from 'src/schema/schema';

@Component({
  selector: 'app-article-filter',
  templateUrl: './article-filter.component.html',
  styleUrls: ['./article-filter.component.scss'],
  animations: [
     collapse()
  ],
})
export class ArticleFilterComponent implements OnInit, OnDestroy {

  @Output()
  public paramsUpdated = new EventEmitter<FilterSortPaginateInput>();

  @Output()
  public rawParamsUpdated = new EventEmitter<ArticleFilterQueryParams>();
  
  public filtersActive = this.store.select(selectFiltersActive);

  private destroy = new Subject<void>();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
    this.updateWithQueryParams();
  }
  
  public ngOnInit(): void {
    this.store.select(selectArticleFilterParams)
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.paramsUpdated.emit(params));

    this.store.select(selectRawFilterParams)
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.rawParamsUpdated.emit(params));
  }

  public periodSelected(period?: Maybe<Period>): void {
    this.store.dispatch(ArticleFilterActions.selectedPeriod(period));
  }

  @HostListener('window:popstate', ['$article'])
  public onBrowserNavigation(): void {
    this.updateWithQueryParams();
  }

  private updateWithQueryParams(): void {
    this.activatedRoute.queryParams
      .pipe(
        debounceTime(0), //TODO: race condition between browser navigation and queryparams
        take(1)
    ).subscribe(params => this.store.dispatch(ArticleFilterActions.updateAll(params)));
  }

  public clearFilters(): void {
    this.store.dispatch(ArticleFilterActions.clearAll());
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}