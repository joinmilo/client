import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Period, collapse } from 'ngx-cinlib/core';
import { Subject, debounceTime, filter, take, takeUntil } from 'rxjs';
import { FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { ArticleFilterQueryParams } from 'src/app/core/typings/filter-params/article-filter-param';
import { ArticleFilterActions } from 'src/app/shared/filter/article/state/article-filter.actions';
import { selectArticleFilterParams, selectFiltersActive, selectRawFilterParams } from 'src/app/shared/filter/article/state/article-filter.selectors';

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
    this.store.dispatch(ArticleFilterActions.init());
  }
  
  public ngOnInit(): void {
    this.store.select(selectArticleFilterParams)
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
      .subscribe(params => this.rawParamsUpdated.emit(params));
  }

  public periodSelected(period?: Maybe<Period>): void {
    this.store.dispatch(ArticleFilterActions.selectedPeriod(period));
  }

  @HostListener('window:popstate', ['$event'])
  public onBrowserNavigation(): void {
    this.activatedRoute.queryParams
      .pipe(
        debounceTime(0), //TODO: race condition between browser navigation and queryparams
        take(1)
      ).subscribe(params => this.store.dispatch(ArticleFilterActions.browserNavigated(params)));
  }

  public clearFilters(): void {
    this.store.dispatch(ArticleFilterActions.clearAll());
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}