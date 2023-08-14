import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, debounceTime, filter, take, takeUntil } from 'rxjs';
import { collapse } from 'src/app/core/animations/animations';
import { MediaFilterQueryParams } from 'src/app/core/typings/filter-params/media-filter-param';
import { FilterSortPaginateInput } from 'src/schema/schema';
import { MediaFilterActions } from '../state/media-filter.actions';
import { selectFiltersActive, selectMediaFilterParams, selectRawFilterParams } from '../state/media-filter.selectors';

@Component({
  selector: 'app-media-filter',
  templateUrl: './media-filter.component.html',
  styleUrls: ['./media-filter.component.scss'],
  animations: [
    collapse()
  ],
})
export class MediaFilterComponent implements OnInit, OnDestroy {

  @Output()
  public paramsUpdated = new EventEmitter<FilterSortPaginateInput>();

  @Output()
  public rawParamsUpdated = new EventEmitter<MediaFilterQueryParams>();

  public filtersActive = this.store.select(selectFiltersActive);

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
    this.store.dispatch(MediaFilterActions.init());
  }

  public ngOnInit(): void {
    this.store.select(selectMediaFilterParams)
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

  @HostListener('window:popstate', ['$event'])
  public onBrowserNavigation(): void {
    this.activatedRoute.queryParams
      .pipe(
        debounceTime(0),
        take(1)
      ).subscribe(params => this.store.dispatch(MediaFilterActions.browserNavigated(params)));
  }

  public clearFilters(): void {
    this.store.dispatch(MediaFilterActions.clearAll());
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
